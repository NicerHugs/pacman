import pacAtePellet from './helpers/pacAtePellet';
import draw from './draw';
import store from '../store';

export default function(ctx) {
	let state = store.getState(),
			grid = state.gameSession.currentGrid,
			gridSize = state.gameSession.gridSize,
			pac = state.pac,
			ghosts = state.ghosts,
			bodies = {pac, ghosts};

	store.dispatch({type: 'MODIFY_COUNTERS'});
	store.dispatch({type: 'MOVE_BODIES', grid});

	state = store.getState();
	pac = state.pac;
	ghosts = state.ghosts;
	bodies = {pac, ghosts};

	// pellet will be the type and coords of a pellet pac ate OR undefined
	let pellet = pacAtePellet(pac, grid, gridSize);
	if (pellet) {
		store.dispatch({type: 'PAC_ATE_PELLET', pellet})
	}

	draw(ctx, gridSize, grid, bodies);
}
