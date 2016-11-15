import React from 'react';

import keyboard from '../keyboard';
import gameGrids from '../gameGrids';

export default React.createClass({
	getInitialState() {
		return {
			x: 1,
			y: 2,
			grid: gameGrids[0],
			screenWidth: gameGrids[0][0].length,
			screenHeight: gameGrids[0].length,
			score: 0,
			level: 1
		}
	},
	componentDidMount() {
		this.ctx = this.refs.canvas.getContext('2d');
		this.registerKeyboard();
		this.drawGrid();
		this.drawPac();
	},
	render() {
		const width = this.state.screenWidth * this.props.squareSize;
		const height = this.state.screenHeight * this.props.squareSize;
		return(
			<div>
				<canvas ref="canvas" id="myCanvas" width={width} height={height}/>
				<div>
					Score: {this.state.score} Level: {this.state.level}
				</div>
			</div>
		)
	},
	levelComplete(grid) {
		return grid.reduce((levelComplete, row) => {
			if (levelComplete === true) {
				let rowHasPellet = row.filter(cell => {
					return cell === 2;
				});
				if (rowHasPellet.length) return false;
			}
			return levelComplete;
		}, true);
	},
	willCollideWithBorder(state) {
		let x = state.x;
	  let y = state.y;
	  let screenHeight = this.state.screenHeight;
	  let screenWidth = this.state.screenWidth;
	  let pacOutOfBounds = x < 0 ||
	                       y < 0 ||
	                       x >= screenWidth ||
	                       y >= screenHeight;
	  return pacOutOfBounds
	},
	willCollideWithWall(state) {
		let x = state.x === undefined ? this.state.x : state.x;
		let y = state.y === undefined ? this.state.y : state.y;

		return this.state.grid[y][x] === 1;
	},
	draw() {
		this.clearScreen();
		this.drawGrid();
		this.drawPac();
	},
	resetStateForNewLevel(state) {
		state.grid = gameGrids[this.state.level];
		state.level = this.state.level + 1;
		state.x = 0;
		state.y = 0;
		return state;
	},
	movePacMan(nextState) {
		let state = nextState;
		state.x = state.x === undefined ? this.state.x : state.x;
		state.y = state.y === undefined ? this.state.y : state.y;

		if (!this.willCollideWithBorder(state) &&
				!this.willCollideWithWall(state)) {
			if (this.foundPellet(state)) {
				let grid = this.state.grid.map(a => {return a});
				grid[state.y][state.x] = 0;
				state.grid = grid;
				state.score = this.state.score + 1;
			}
			if (this.levelComplete(state.grid || this.state.grid)) {
				state = this.resetStateForNewLevel(state);
			}
			this.setState(state, this.draw);
		}
	},
	foundPellet(state) {
		return this.state.grid[state.y][state.x] === 2;
	},
	drawGrid() {
		let squareSize = this.props.squareSize;
		let ctx = this.ctx;
		ctx.fillStyle = '#000';
		this.state.grid.forEach((row, rowI) => {
			row.forEach((cell, colI) => {
				if (cell === 1) {
					this.drawWall(rowI, colI);
				} else if (cell === 2) {
					this.drawPellet(colI, rowI);
				}
			});
		});
	},
	drawWall(rowI, colI) {
		let squareSize = this.props.squareSize;
		let ctx = this.ctx;
		ctx.fillStyle = '#000';

		ctx.fillRect(colI * squareSize,
							 rowI * squareSize,
							 squareSize,
							 squareSize);
	},
	drawPac() {
		let x = this.state.x;
		let y = this.state.y;
		let radiusDivisor = 2;
		this.drawCircle(x, y, radiusDivisor);
	},
	drawPellet(x, y) {
		let radiusDivisor = 6;
		this.drawCircle(x, y, radiusDivisor);
	},
	clearScreen() {
		this.ctx.clearRect(0, 0, this.state.screenWidth, this.state.screenHeight)
		let screenPixelWidth = this.state.screenWidth * this.props.squareSize;
	  let screenPixelHeight = this.state.screenHeight * this.props.squareSize;

	  this.ctx.clearRect(0, 0, screenPixelWidth, screenPixelHeight)
	},
	drawCircle(x, y, rad) {
		let squareSize = this.props.squareSize;

		let pixelX = (x + 1/2) * squareSize;
		let pixelY = (y + 1/2) * squareSize;

		this.ctx.fillStyle = '#000';
		this.ctx.beginPath();
		this.ctx.arc(pixelX, pixelY, squareSize/rad, 0, Math.PI * 2, false);
		this.ctx.closePath();
		this.ctx.fill();
	},
	registerKeyboard() {
		keyboard({
			up: () => {
				this.movePacMan({y: this.state.y - 1});
			},
			down: () => {
				this.movePacMan({y: this.state.y + 1});
			},
			left: () => {
				this.movePacMan({x: this.state.x - 1});
			},
			right: () => {
				this.movePacMan({x: this.state.x + 1});
			}
		});
	}
});
