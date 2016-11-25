import drawWall from './draw/wall';

export default function(ctx, gridSize, grid, bodies) {
	ctx.clearRect(0,0, ctx.canvas.height, ctx.canvas.width);
	grid.forEach((row, y) => {
		row.forEach((cell, x) => {
			if (cell === 1) {
				drawWall(ctx, gridSize, x, y);
			};
		})
	});
}
