export default [
	{
		grid: [
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			[1,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,1],
			[1,3,1,1,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,2,1,1,2,1,1,1,1,1,3,1],
			[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
			[1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1],
			[0,0,0,1,2,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,2,1,0,0,0],
			[1,1,1,1,2,1,1,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,1,1,2,1,1,1,1],
			[0,0,0,0,2,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,2,0,0,0,0],
			[1,1,1,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,1,1,1],
			[0,0,0,1,2,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,2,1,0,0,0],
			[0,0,0,1,2,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,2,1,0,0,0],
			[1,1,1,1,2,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,2,1,1,1,1],
			[0,0,0,0,2,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,2,0,0,0,0],
			[1,1,1,1,2,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,2,1,1,1,1],
			[0,0,0,1,2,2,2,2,2,2,2,0,0,0,1,1,0,0,0,2,2,2,2,2,2,2,1,0,0,0],
			[1,1,1,1,2,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2,1,1,1,1,1,2,1,1,1,1],
			[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
			[1,2,1,1,1,1,2,1,1,1,1,1,1,2,1,1,2,1,1,1,1,1,1,2,1,1,1,1,2,1],
			[1,2,1,1,1,1,2,1,1,2,2,2,2,2,1,1,2,2,2,2,2,1,1,2,1,1,1,1,2,1],
			[1,3,1,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,2,1,1,1,1,3,1],
			[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		],

		pacStartPosition: {gridX: 1, gridY: 1},
		ghostsStartPosition: {grixX: 4, gridY: 2}
	}, {
		grid: [
			[1,1,1,1,1,1],
			[1,0,0,0,0,1],
			[1,0,0,0,0,1],
			[1,1,1,1,1,1]
		],
		pacStartPosition: {gridX: 2, gridY: 2},
		ghostsStartPosition: {grixX: 4, gridY: 2}
	},
];
