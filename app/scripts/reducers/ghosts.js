const initialState = [
	{
		position: {gridX: 16, gridY: 10},
		color: '#BB00BB'
	}, {
		position: {gridX: 13, gridY: 10},
		color: '#008F00'
	}, {
		position: {gridX: 14, gridY: 10},
		color: '#026AA7'
	}
]

function ghosts(state = initialState, action) {
	switch (action.type) {
		default:
			return state;
	}
}

export default ghosts;
