import pacAtePellet from './helpers/pacAtePellet';
import pacAteGhost from './helpers/pacAteGhost';
import ghostAtePac from './helpers/ghostAtePac';
import gameover from './helpers/gameover';
import levelComplete from './helpers/levelComplete';
import draw from './draw';
import store from '../store';

export default function(ctx) {
	let state = store.getState(),
			grid = state.gameSession.currentGrid,
			gridSize = state.gameSession.gridSize,
			pac = state.pac,
			ghosts = state.ghosts,
			bodies = {pac, ghosts},
			timer, currentLives, levelIndex;

	store.dispatch({type: 'MODIFY_COUNTERS'});
	store.dispatch({type: 'MOVE_BODIES', grid});

	state = store.getState();
	pac = state.pac;
	ghosts = state.ghosts;
	bodies = {pac, ghosts};

	let pellet = pacAtePellet(pac, grid, gridSize);
	if (pellet) {
		store.dispatch({type: 'PAC_ATE_PELLET', pellet})
	}

	let ghost = pacAteGhost(bodies);
	if (ghost !== undefined) {
		store.dispatch({type: 'PAC_ATE_GHOST', ghost})
	}

	ghost = ghostAtePac(bodies);
	if (ghost !== undefined) {
		store.dispatch({type: 'GHOST_ATE_PAC', ghost})
	}

	state = store.getState(),
	grid = state.gameSession.currentGrid,
	{timer, currentLives, levelIndex} = state.gameSession;

	if (gameover(timer, currentLives)) {
		store.dispatch({type: 'GAMEOVER'})
	} else if (levelComplete(grid)) {
		store.dispatch({type: 'TOGGLE_GAME_LOOP'})
		store.dispatch({type: 'LEVEL_COMPLETE', nextLevel: levelIndex+1})
	}
	draw(ctx, gridSize, grid, bodies);
}
