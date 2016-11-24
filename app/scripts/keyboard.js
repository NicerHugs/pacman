function keydown(keyName, callback) {
	window.addEventListener('keydown', (e) => {
		if (keyName === e.key.toLowerCase()) callback(e);
	})
}

function register(name, callback) {
	switch(name) {
		case 'enter':
			keydown.call(window, 'enter', callback);
			break;
		case 'up':
			keydown.call(window, 'arrowup', callback);
			break;
		case 'down':
			keydown.call(window, 'arrowdown', callback);
			break;
		case 'left':
			keydown.call(window, 'arrowleft', callback);
			break;
		case 'right':
			keydown.call(window, 'arrowright', callback);
			break;
	}
}

export default function(hash) {
	var keys = Object.keys(hash);
	keys.forEach((key, i) => {
		register(key, hash[key]);
	});
};
