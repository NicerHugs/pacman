import drawGrid from './draw/grid';
import drawBodies from './draw/bodies';

export default function(ctx, gridSize, grid, bodies) {
	ctx.clearRect(0,0, ctx.canvas.height, ctx.canvas.width);
	drawGrid(ctx, gridSize, grid);
	drawBodies(ctx, gridSize, bodies);
}
