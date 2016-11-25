import drawCircle from './circle';

export function drawPellet(ctx, gridSize, gridX, gridY) {
	drawCircle(ctx, gridSize, gridX * gridSize, gridY * gridSize, 10, '#7AF759')
}

export function drawSuperPellet(ctx, gridSize, gridX, gridY) {
	drawCircle(ctx, gridSize, gridX * gridSize, gridY * gridSize, 4, '#3BFAE3')
}
