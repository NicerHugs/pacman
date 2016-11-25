import drawCircle from './circle';

export function drawPellet(ctx, gridSize, x, y) {
	drawCircle(ctx, gridSize, x, y, 10)
}

export function drawSuperPellet(ctx, gridSize, x, y) {
	drawCircle(ctx, gridSize, x, y, 4, '#f00')
}
