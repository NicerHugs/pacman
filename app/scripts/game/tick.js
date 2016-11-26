import draw from './draw';
import store from '../store';

export default function(ctx) {
	const state = store.getState(),
				grid = state.gameSession.currentGrid,
				gridSize = state.gameSession.gridSize,
				pac = state.pac,
				ghosts = state.ghosts,
				bodies = {pac, ghosts};

	store.dispatch({type: 'MODIFY_COUNTERS'});
	store.dispatch({type: 'MOVE_BODIES', grid});
	draw(ctx, gridSize, grid, bodies);
}
