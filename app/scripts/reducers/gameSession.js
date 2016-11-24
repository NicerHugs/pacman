import tick from '../game/tick';

const initialState = {
	gameover: false,
	gridSize: 40,
	levelIndex: 0,
	currentScore: 0,
	currentLives: 3,
	gameLoop: null,
	timer: 50,
	currentGrid: [[0]]
}

function gameSession(state = initialState, action) {
	switch (action.type) {
		case 'TOGGLE_GAME_LOOP':
			let gameLoop;
			if (state.gameLoop) {
				window.clearInterval(state.gameLoop);
				gameLoop = null;
			} else {
				gameLoop = window.setInterval(tick, 1000/60)
			}
			return Object.assign({}, state, {gameLoop});
		default:
			return state;
	}
}

export default gameSession;
