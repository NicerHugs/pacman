import drawCircle from './circle';

export default function(ctx, gridSize, bodies) {
	const pac = bodies.pac,
				ghosts = bodies.ghosts;
	drawCircle(ctx, gridSize, pac.position.gridX, pac.position.gridY, 2.3, '#ff0');
	ghosts.forEach(ghost => {
		drawCircle(ctx, gridSize, ghost.position.gridX, ghost.position.gridY, 2.3, ghost.color);
	});
};
