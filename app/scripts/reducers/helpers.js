export function pathOpen(grid, {x, y}) {
	if (grid[y] !== 1) {
		if (grid[y][x] !== 1) {
			return true;
		}
	}
};

export function nextGridCoords({x,y}, gridSize, {coord, val}) {
	let nextGridCoords = {x: x / gridSize, y: y / gridSize};
	nextGridCoords[coord] += val;
	return nextGridCoords;
};

export function moveBody(position, direction, grid, gridSize) {
	let nextPosition = nextGridCoords(position, gridSize, direction);
	if (grid[nextPosition.y][nextPosition.x] === undefined) {
		// move to the other side of the board
		if (direction.val > 0) {
			position[direction.coord] = gridSize * -1;
		} else if (direction.coord === 'y') {
			position[direction.coord] = grid.length * gridSize;
		} else {
			position[direction.coord] = grid[0].length * gridSize;
		}
	} else {
		position[direction.coord] += direction.val;
	}
	return position;
}
