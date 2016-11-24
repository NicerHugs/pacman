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
  return state
}

export default gameSession;
