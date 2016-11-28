import tick from '../game/tick';
import levels from '../game/levels';
import {boardCleared} from './helpers';
import config from '../config';

let gridSize = config.gridSize;

const initialState = {
	gameover: false,
	gridSize: gridSize,
	levelIndex: 0,
	currentScore: 0,
	currentLives: 3,
	gameLoop: null,
	timer: 18000,
	currentGrid: levels[0].grid.map(a => a),
	gameWon: false
}

function gameSession(state = initialState, action) {
	switch (action.type) {
		case 'LEVEL_COMPLETE':
			let levelInfo = {
				gameWon: true,
				score: state.score + Math.ceil(state.timer/60),
				gameover: true
			};
			if (levels[action.nextLevel]) {
				levelInfo = {
					levelIndex: action.nextLevel,
					currentGrid: levels[action.nextLevel].grid.map(a => a),
					score: state.score + Math.ceil(state.timer/60),
					timer: 18000,
					gameover: false,
				}
			};
			return Object.assign({}, state, levelInfo)
		case 'PAC_ATE_PELLET':
			let {gridX, gridY} = action.pellet.coords,
					currentGrid = state.currentGrid.map((row, y) => {
						return row.map((cell, x) => {
							if (x === gridX && y === gridY) return 0;
							else return cell;
						})
					}),
					currentScore = state.currentScore,
					currentLives = currentScore % 1000 === 0 && currentScore > 0 ? state.currentLives + 1 : state.currentLives;
			currentGrid[gridY][gridX] = 0;
			currentScore += action.pellet.type === 'pellet' ? 1 : 10;

			return Object.assign({}, state, {currentGrid, currentScore, currentLives});
		case 'RESET_GAME':
			return initialState;
		case 'MODIFY_COUNTERS':
			if (state.gameLoop !== null && state.timer > 0) {
				return Object.assign({}, state, {timer: state.timer - 1})
			} else if (state.gameLoop !== null) {
				window.clearInterval(state.gameLoop);
				return Object.assign({}, state, {gameLoop: null, gameover: true})
			} else {
				return state;
			}
		case 'TOGGLE_GAME_LOOP':
			let gameLoop;
			if (state.gameover === false) {
				if (state.gameLoop !== null) {
					window.clearInterval(state.gameLoop);
					gameLoop = null;
				} else {
					gameLoop = window.setInterval(tick.bind(window, action.ctx), 1000/60)
				}
				return Object.assign({}, state, {gameLoop});
			} else return state;
		default:
			return state;
	}
}

export default gameSession;
