import React from 'react';

import store from '../store';

export default React.createClass({
	render() {
		return (
			<div className="modal-dialogue">
				<form>
					<h3>Game Over</h3>
					<input
						type="button"
						onClick={store.dispatch.bind(store, {type:'RESET_GAME'})}
						value="reset game"/>
				</form>
			</div>
		)
	}
})
