import {expect} from 'chai';
import jsdom from 'mocha-jsdom';

import store from '../../../app/scripts/store'

import gameSessionReducer from '../../../app/scripts/reducers/gameSession';

describe('gameSession reducer after MODIFY_COUNTERS action', () => {
	jsdom();

	let gameSession;
	let gameSession1;

	beforeEach(() => {
		gameSession = gameSessionReducer(undefined, {});
	});

	it('should have no effect if gameLoop is not running', () => {
		gameSession1 = gameSessionReducer(gameSession, {type: 'MODIFY_COUNTERS'});
		expect(gameSession).to.deep.equal(gameSession1);
	});

	it ('should decrease the timer by 1 if the game loop has a value', () => {
		gameSession1 = gameSessionReducer(Object.assign({}, gameSession, {gameLoop: 0}), {type: 'MODIFY_COUNTERS'});
		expect(gameSession1.timer).to.equal(gameSession.timer - 1);
	});

	it ('should gameover if the timer is 0', () => {
		gameSession1 = gameSessionReducer(Object.assign({}, gameSession, {gameLoop: 0, timer: 0}), {type: 'MODIFY_COUNTERS'});
		expect(gameSession1.timer).to.equal(0);
		expect(gameSession1.gameover).to.be.true;
		expect(gameSession1.gameLoop).to.be.null;
	});
});
