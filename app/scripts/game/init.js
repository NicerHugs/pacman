import keyboard from '../keyboard';
import store from '../store';

export default function() {
	keyboard({
		space: () => {store.dispatch({type: 'TOGGLE_GAME_LOOP'})},
		up: () => {console.log('up');},
		down: () => {console.log('down');},
		left: () => {console.log('left');},
		right: () => {console.log('right');},
	})
}
