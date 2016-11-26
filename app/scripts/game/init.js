import keyboard from '../keyboard';
import store from '../store';

import draw from './draw';

export default function(canvas) {
	const ctx = canvas.getContext('2d'),
				gs = store.getState().gameSession,
				pac = store.getState().pac,
				ghosts = store.getState().ghosts,
				bodies = {pac, ghosts};
	draw(ctx, gs.gridSize, gs.currentGrid, bodies);
	keyboard({
		space: () => {store.dispatch({type: 'TOGGLE_GAME_LOOP', ctx})},
		up: () => {if (store.getState().gameSession.gameLoop !== null)
			store.dispatch({type: 'CHANGE_INTENT', dir: 'up'});},
		down: () => {if (store.getState().gameSession.gameLoop !== null)
			store.dispatch({type: 'CHANGE_INTENT', dir: 'down'});},
		left: () => {if (store.getState().gameSession.gameLoop !== null)
			store.dispatch({type: 'CHANGE_INTENT', dir: 'left'});},
		right: () => {if (store.getState().gameSession.gameLoop !== null)
			store.dispatch({type: 'CHANGE_INTENT', dir: 'right'});},
	})
}
