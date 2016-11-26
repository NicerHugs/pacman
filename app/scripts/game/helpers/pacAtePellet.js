export default function(pac, grid, gridSize) {
	const {x, y} = pac.position,
				gridX = x/gridSize,
				gridY = y/gridSize,
				row = grid[gridY];
	if (row) {
		let cell = row[gridX];
		if (cell === 2 || cell === 3) {
			let type = cell === 2 ? 'pellet' : 'superPellet';
			return {coords: {gridX, gridY}, type};
		}
	}
};
