import draw from './draw';
import store from '../store';

export default function(ctx) {
	const state = store.getState(),
				grid = state.gameSession.currentGrid,
				gridSize = state.gameSession.gridSize,
				pac = state.pac,
				ghosts = state.ghosts,
				bodies = {pac, ghosts};
	draw(ctx, gridSize, grid, bodies);
}
