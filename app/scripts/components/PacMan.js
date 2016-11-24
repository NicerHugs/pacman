import React from 'react';

import store from '../store';
import initiatePac from '../game/init';

import GameOverDialogue from './GameOverDialogue';

export default React.createClass({
	getInitialState() {
		return store.getState();
	},
	componentDidMount() {
		this.unsubscribe = store.subscribe(() => {
			this.setState(store.getState());
		});
		initiatePac();
	},
	componentWillUnmount() {
		this.unsubscribe();
	},
	render() {
		const width = this.state.currentGrid[0].length * this.state.gridSize,
					height = this.state.currentGrid.length * this.state.gridSize,
					score = this.state.currentScore,
					level = this.state.levelIndex + 1,
					gameover = this.state.gameover;
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
