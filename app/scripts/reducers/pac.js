import config from '../config';
import {pathOpen, nextGridCoords, moveBody} from './helpers';

let gridSize = config.gridSize;

const initialState = {
	position: {	x: 15 * gridSize, y: 16 * gridSize },
	intent: {val: 1, coord: 'x'},
	direction: {val: 1, coord: 'x'}
}

function pac(state = initialState, action) {
	switch (action.type) {
		case 'CHANGE_INTENT':
			if (action.dir === 'up')
				return Object.assign({}, state, {intent: {coord: 'y', val: -1}});
			else if (action.dir === 'right')
				return Object.assign({}, state, {intent: {coord: 'x', val: 1}});
			else if (action.dir === 'left') 
				return Object.assign({}, state, {intent: {coord: 'x', val: -1}});
			else if (action.dir === 'down')
				return Object.assign({}, state, {intent: {coord: 'y', val: 1}});
		case 'MOVE_BODIES':
			let direction = state.direction,
					intent = state.intent,
					position = Object.assign({}, state.position),
					grid = action.grid;

			if (state.position.x % gridSize === 0 &&
					state.position.y % gridSize === 0) {
				// we can change direction bc we're centered on a grid square
				if (pathOpen(grid,
										 nextGridCoords(position, gridSize, intent))) {
					// the intended path is open. update direction and start that way.
					direction = state.intent;
					position = moveBody(position, direction, grid, gridSize);
				} else if (pathOpen(grid,
														nextGridCoords(position, gridSize, direction))) {
					// the current trajectory is open. keep going that way
					position[direction.coord] += direction.val;
				}
			} else {
				// we can't change direction yet bc we're inbetween grid spaces, keep on the path
				position[direction.coord] += direction.val;
			}
			return Object.assign({}, state, {position, direction});
		default:
			return state;
	}
}

export default pac;
