const initialState = [
	{
		position: {x: 16, y: 10},
		color: '#BB00BB'
	}, {
		position: {x: 13, y: 10},
		color: '#008F00'
	}, {
		position: {x: 14, y: 10},
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
