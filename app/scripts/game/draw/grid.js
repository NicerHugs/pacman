import drawWall from './wall';
import {drawPellet, drawSuperPellet} from './pellet';

export default function(ctx, gridSize, grid){
	grid.forEach((row, y) => {
		row.forEach((cell, x) => {
			if (cell === 1) {
				drawWall(ctx, gridSize, x, y);
			} else if (cell === 2) {
				drawPellet(ctx, gridSize, x, y);
			} else if (cell === 3) {
				drawSuperPellet(ctx, gridSize, x, y);
			}
		})
	});
};
