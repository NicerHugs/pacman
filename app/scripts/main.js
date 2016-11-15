import { render } from 'react-dom';
import React from 'react';

import PacMan from './components/PacMan';

render((
	<PacMan
		squareSize={40} />
	), document.getElementById('container')
)
