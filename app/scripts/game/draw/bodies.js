import drawCircle from './circle';

export default function(ctx, gridSize, bodies) {
	const pac = bodies.pac,
				ghosts = bodies.ghosts;
	drawCircle(ctx, gridSize, pac.position.x, pac.position.y, 2.3, '#ff0');
	ghosts.forEach(ghost => {
		drawCircle(ctx, gridSize, ghost.position.x, ghost.position.y, 2.3, ghost.color);
	});
};
