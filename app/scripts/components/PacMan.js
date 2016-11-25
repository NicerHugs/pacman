import React from 'react';

import store from '../store';
import initiatePac from '../game/init';

import GameOverDialogue from './GameOverDialogue';

export default React.createClass({
	getInitialState() {
		return store.getState().gameSession;
	},
	componentDidMount() {
		this.unsubscribe = store.subscribe(() => {
			this.setState(store.getState().gameSession);
		});
		initiatePac(this.refs.canvas);
	},
	componentWillUnmount() {
		this.unsubscribe();
	},
	render() {
		const width = this.state.currentGrid[0].length * this.state.gridSize,
					height = this.state.currentGrid.length * this.state.gridSize,
					lives = this.state.currentLives,
					score = this.state.currentScore,
					level = this.state.levelIndex + 1,
					timer = Math.ceil(this.state.timer / 60),
					gameover = this.state.gameover;
		let gameOverDialogue;
		if (gameover) {
			gameOverDialogue = <GameOverDialogue />;
		}
		return(
			<div>
				<canvas ref="canvas" id="pac-canvas" width={width} height={height}/>
				<div>
					Lives: {lives} Score: {score} Level: {level} Timer: {timer}
				</div>
				Press the spacebar to {this.state.gameLoop ? 'pause' : 'start'} the game
				{gameOverDialogue}
			</div>
		)
	}
});
