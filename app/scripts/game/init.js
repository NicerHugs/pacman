import keyboard from '../keyboard';
import store from '../store';

import draw from './draw';

export default function(canvas) {
	const ctx = canvas.getContext('2d');
	const gs = store.getState().gameSession;
	draw(ctx, gs.gridSize, gs.currentGrid)
	keyboard({
		space: () => {store.dispatch({type: 'TOGGLE_GAME_LOOP', ctx})},
		up: () => {console.log('up');},
		down: () => {console.log('down');},
		left: () => {console.log('left');},
		right: () => {console.log('right');},
	})
}
