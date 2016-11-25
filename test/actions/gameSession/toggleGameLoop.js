import {expect} from 'chai';
import jsdom from 'mocha-jsdom';

import store from '../../../app/scripts/store'

import gameSessionReducer from '../../../app/scripts/reducers/gameSession';

describe('gameSession reducer after TOGGLE_GAME_LOOP action', () => {
	jsdom();

	let gameSession;
	let gameSession1 = {};
	let gameSession2= {};

	beforeEach(() => {
		gameSession = gameSessionReducer(undefined, {})
	});

	afterEach(() => {
		if (gameSession1.hasOwnProperty('gameLoop') && gameSession1.gameLoop !== null) {
			window.clearInterval(gameSession1.gameLoop);
		} else if (gameSession2.hasOwnProperty('gameLoop') && gameSession2.gameLoop !==null) {
			window.clearInterval(gameSession2.gameLoop)
		}
	});

	it('should have a gameLoop property that changes from null to number and back', () => {
		expect(gameSession).to.have.property('gameLoop');	expect(gameSession.gameLoop).to.be.null;

		gameSession1 = gameSessionReducer(gameSession, {type: 'TOGGLE_GAME_LOOP'});
		expect(gameSession1).to.have.property('gameLoop');	expect(gameSession1.gameLoop).to.be.a.number;

		gameSession2 = gameSessionReducer(gameSession1, {type: 'TOGGLE_GAME_LOOP'});
		expect(gameSession2).to.have.property('gameLoop');
		expect(gameSession2.gameLoop).to.be.null;
	});
});
