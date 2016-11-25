import config from '../config';

let gridSize = config.gridSize;

const initialState = {
	position: {	x: 15 * gridSize, y: 16 * gridSize }
}

function pac(state = initialState, action) {
	switch (action.type) {
		default:
			return state;
	}
}

export default pac;
