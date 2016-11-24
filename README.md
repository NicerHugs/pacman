# PacMan

## What is this confounded contraption?
PacMan. A game for the ages.

I was inspired by [this learn to javascript and build PacMan tutorial](http://www.jeffreybiles.com/build-pacman/), but wanted to do it with React instead of Ember because I like to play with React. And soon into it I realized that this project isn't about building components at all, and so React isn't really the right tool for the job. Instead, this app is all about HTML5 canvas and state management. So I opted to see how it would be to build a canvas game using Redux to manage my state. Afterall, Redux claims it isn't just for React, right??

My goal is for the state to be defined declaratively. At any given moment the entire game should be recreatable using the current state object, much like a Redux based React app would be.

### How the State should be
- `levels`: array - all available levels and level data, effectively read only.
	- `level`: object
		- `grid`: array
			- `row`: array
				- `cell`: number
					- 0: empty
					- 1: wall
					- 2: pellet
					- 3: superPellet
		- `pacStartPosition`: object
			- `gridX`: number
			- `gridY`: number
		- `ghostsStartPosition`: object
			- `gridX`: number
			- `gridY`: number
- `gameSession`: object
	- `gameover`: boolean - used to determine whether to display the gameover dialog box
	- `gridSize`: used for determining how large to make all the things. probably determined by the user's screen size
	- `levelIndex`: number - references the index of the level in the `levels` array
	- `currentGrid`: array - initially a copy of the `grid` found at `levelIndex` of `levels`
	- `currentScore`: number
	- `currentLives`: number - starts at 3, cannot go below 0
	- `gameLoop`: `setInterval` or `null` - used to stop the game loop for pause, game over, or between levels
	- `timer`: number - used to count down until the game will end and pac loses
- `pac`: object
	- `position`: object
		- `x`: number - the actual center coordinate of pac at a given moment in time
		- `y`: number - the actual center coordinate of pac at a given moment in time
	- `direction`: direction enum - the direction pac is currently moving, cannot change unless pac `x` and pac `y` are both divisible by `gridSize`
	- `intent`: direction enum - the queued direction for pac to move when its `direction` is eligible for updating
	- `speed`: number - between 0-1, used to determine how much to move pac in a single tick. multiplied by `gridSize` and added to correct `position` coordinate as determined by `direction`
	- `powerCount`: number - greater than or equal to 0. if 0, pac is not powered, otherwise pac is powered up. the number will drop on each tick
- `ghosts`: array
	- `ghost`: object
		- `position`: object - as with pac
			- `x`: number
			- `y`: number
		- `effort`: number - a random number between 0-1 that indicates how much effort this ghost applies to moving in the best direction towards pac
		- `direction`: direction enum - as with pac
		- `speed`: number - as with pac
		- `frozenCount`: number, greater than or equal to 0. if not 0, ghost cannot move. will drop with each tick

### Actions (that update state)
#### User initiated (occur immediately)
- `keyPress` (up, right, down, left)
	- sets `intent` of pac
	- only has effect if `gameloop` has a value
- `keyPress` (space)
	- start or stop gameplay
	- if `gameloop` has a value, `clearInterval` with `gameloop`'s value, but change no other state
	- otherwise, sets `gameloop` to new `setInterval`, initiating the tick cycle, but changes no other state
- `click` (start new game from gameover dialogue box)
	- resets state to initial state

#### Tick initiated
##### What the crap is a tick?!
Tick is what I'm calling one run through of the gameloop. Each tick initiates a tick action (see right chere below) and a [draw cycle](#draw-cycle).

Each tick will cause the following (enormamente) action:
- modify counters
	- if pac's `powerCount` is greater than 0, decrement it
	- if any ghost's `frozenCount` is greater than 0, decrement it
	- if timer is greater than 0, decrement it
- move pac
	- if both of pac's `position` coordinates are divisible by `gridSize`, check if pac's `intent` has it colliding with a wall
		- if so, update pac's `direction` to `null`
		- if not, update pac's `direction` to pac's current `intent`
	- if pac's `direction` is anything other than `null`, update pac's `position` based on pac's `speed` (multiplied by `gridSize`) and `direction` (add the value to the appropriate coordinate).
- move each ghost
	- if both of ghost's `position` coordinates are divisible by `gridSize`, determine new direction using available options (do not allow ghost to select a direction where there is a wall), `effort`, and comparison to pac's current location.
	- update ghost's `position` based on ghost's `speed` (multiplied by `gridSize`) and `direction` (add the value to the appropriate coordinate).
- (then) handle collisions
	- pac and ghost colliding
		- if pac's `powerCount` is greater than 0, increase ghost's `frozenCount` and change ghost's `position` to the level's `ghostsStartPosition`
		- if pac's `powerCount` equals 0, `clearInterval` with `gameloop`'s value, set pac's `position` to `pacStartPosition`, set all ghosts' `position` to `ghostsStartPosition`, set all ghosts' `frozenCount` to max, and decrement `currentLives`
			- if `currentLives` is now 0, set `gameover` to true
	- if pac and pellet colliding
		- for `pellet` - change `currentGrid` to reflect space is now empty and increment `currentScore`
		- for `superPellet` - increase pac's `powerCount` and increment `currentScore`
		- if `currentScore` is divisible by 2000 increment `currentLives`
		- if `grid` contains only 1 and 0's, `clearInterval` with `gameloop`'s value, increment `levelIndex`, set `currentGrid` to a copy of grid found in `levelIndex` of `levels`, set pac's `position` to new `pacStartPosition` and ghosts' `position`s to `ghostsStartPosition`, set pac's `powerCount` to zero, set ghosts' `frozenCount` to max
- (then) handle timeover
	- `clearInterval` with `gameloop`'s value, set pac's `position` to `pacStartPosition`, set all ghosts' `position` to `ghostsStartPosition`, set all ghosts' `frozenCount` to max, and decrement `currentLives`
		- if `currentLives` is now 0, set `gameover` to true

### Draw cycle
Drawing should be based entirely on current state. Each draw cycle will need to:
- clear the canvas
- draw the current grid
	- draw any walls
	- draw any `pellet`s
	- draw any `superPellet`s
- draw pac centered on its current `position`
- draw each ghost centered on its current `position`

### Some things are still React tho?
Some things are still handled by React. Namely, the gameover dialogue (and interaction with it), the score, timer, and level displays, and the canvas itself (tho not the art/gameplay drawn on it).
