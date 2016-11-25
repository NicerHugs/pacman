export default function(ctx, gridSize, x, y) {
	ctx.fillStyle = '#000';
  ctx.fillRect(x * gridSize, y * gridSize, gridSize, gridSize);
}
