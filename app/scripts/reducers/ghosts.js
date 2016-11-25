import config from '../config';

let gridSize = config.gridSize;

const initialState = [
	{
		position: {x: 16 * gridSize, y: 10 * gridSize},
		color: '#BB00BB'
	}, {
		position: {x: 13 * gridSize, y: 10 * gridSize},
		color: '#008F00'
	}, {
		position: {x: 14 * gridSize, y: 10 * gridSize},
		color: '#026AA7'
	}
]

function ghosts(state = initialState, action) {
	switch (action.type) {
		default:
			return state;
	}
}

export default ghosts;
