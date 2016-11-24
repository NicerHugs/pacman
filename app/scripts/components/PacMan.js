import React from 'react';

import GameOverDialogue from './GameOverDialogue';

export default React.createClass({
	getInitialState() {
		return {};
	},
	componentDidMount() {},
	render() {
		const width = 500,
					height = 400,
					score = 0,
					level = 1,
					gameover = false;
		let gameOverDialogue;
		if (gameover) {
			gameOverDialogue = <GameOverDialogue />;
		}
		return(
			<div>
				<canvas ref="canvas" id="pac-canvas" width={width} height={height}/>
				<div>
					Score: {score} Level: {level}
				</div>
				{gameOverDialogue}
			</div>
		)
	}
});
