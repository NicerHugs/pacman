export default function(grid) {
	let rowsWithPellets = grid.filter(row => {
		if (row.filter(cell => {
			return cell === 2 || cell === 3;
		}).length) return true;
		else return false;
	});
	if (rowsWithPellets.length) return false;
	else return true;
}
