import drawGrid from './draw/grid';

export default function(ctx, gridSize, grid, bodies) {
	ctx.clearRect(0,0, ctx.canvas.height, ctx.canvas.width);
	drawGrid(ctx, gridSize, grid);
}
