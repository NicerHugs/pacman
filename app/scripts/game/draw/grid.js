import drawWall from './wall';
import {drawPellet, drawSuperPellet} from './pellet';

export default function(ctx, gridSize, grid){
	grid.forEach((row, gridY) => {
		row.forEach((cell, gridX) => {
			if (cell === 1) {
				drawWall(ctx, gridSize, gridX, gridY);
			} else if (cell === 2) {
				drawPellet(ctx, gridSize, gridX, gridY);
			} else if (cell === 3) {
				drawSuperPellet(ctx, gridSize, gridX, gridY);
			}
		})
	});
};
