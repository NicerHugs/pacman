import React from 'react';

import store from '../store';

export default React.createClass({
	render() {
		return (
			<div className="modal-dialogue">
				<form>
					<h3>{this.props.won ? 'You Win!' : 'GameOver'}</h3>
					<h4>Final Score: {this.props.score}</h4>
					<input
						type="button"
						onClick={store.dispatch.bind(store, {type:'RESET_GAME'})}
						value="reset game"/>
				</form>
			</div>
		)
	}
})
