export default function(ctx, gridSize, x, y) {
	ctx.fillStyle = '#CC0000';
  ctx.fillRect(x * gridSize, y * gridSize, gridSize, gridSize);
}
