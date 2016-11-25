import draw from './draw';
import store from '../store';

export default function(ctx) {
	const state = store.getState();
	const grid = state.gameSession.currentGrid;
	const gridSize = state.gameSession.gridSize;
	let bodies;
	draw(ctx, gridSize, grid, bodies);
}
