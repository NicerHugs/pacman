export default function(ctx, gridSize, gridX, gridY) {
	ctx.fillStyle = '#CC0000';
  ctx.fillRect(gridX * gridSize, gridY * gridSize, gridSize, gridSize);
}
