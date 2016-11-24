import keyboard from '../keyboard';

export default function() {
	keyboard({space: () => {console.log('hi')}})
}
