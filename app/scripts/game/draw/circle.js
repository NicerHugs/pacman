export default function(ctx, gridSize, x, y, rad, color) {
	let pixelX = x * gridSize + gridSize/2;
	let pixelY = y * gridSize + gridSize/2;

	ctx.fillStyle = color || '#000';
	ctx.beginPath();
	ctx.arc(pixelX, pixelY, gridSize/rad, 0, Math.PI * 2, false);
	ctx.closePath();
	ctx.fill();
};
