import {expect} from 'chai';
import jsdom from 'mocha-jsdom';

import store from '../../../app/scripts/store'

import gameSessionReducer from '../../../app/scripts/reducers/gameSession';

describe('gameSession reducer after TOGGLE_GAME_LOOP action', () => {
	jsdom();

	let gameSession;
	let gameSession1;
	let gameSession2;

	beforeEach(() => {
		gameSession = gameSessionReducer(undefined, {})
		gameSession1 = gameSessionReducer(gameSession, {type: 'TOGGLE_GAME_LOOP'})
		gameSession2 = gameSessionReducer(gameSession1, {type: 'TOGGLE_GAME_LOOP'})
	});

	it('should have a gameover property that is an boolean', () => {
		expect(gameSession1).to.have.property('gameover');
		expect(gameSession1.gameover).to.be.a.boolean;
	});

	it('should have a gridSize property that is a number', () => {
		expect(gameSession1).to.have.property('gridSize');
		expect(gameSession1.gridSize).to.be.a.number;
	});

	it('should have a levelIndex property that is a number', () => {
		expect(gameSession1).to.have.property('levelIndex');
		expect(gameSession1.levelIndex).to.be.a.number;
	});

	it('should have a currentScore property that is a number', () => {
		expect(gameSession1).to.have.property('currentScore');
		expect(gameSession1.currentScore).to.be.a.number;
	});

	it('should have a currentLives property that is a number', () => {
		expect(gameSession1).to.have.property('currentLives');
		expect(gameSession1.currentLives).to.be.a.number;
	});

	it('should have a gameLoop property that changes from null to number and back', () => {
		expect(gameSession).to.have.property('gameLoop');	expect(gameSession.gameLoop).to.be.null;
		expect(gameSession1).to.have.property('gameLoop');	expect(gameSession1.gameLoop).to.be.a.number;
		expect(gameSession2).to.have.property('gameLoop');	expect(gameSession2.gameLoop).to.be.null;
	});

	it('should have a timer property that is a number', () => {
		expect(gameSession1).to.have.property('timer');
		expect(gameSession1.timer).to.be.a.number;
	});

	it('should have a currentGrid property that is an array', () => {
		expect(gameSession1).to.have.property('currentGrid');
		expect(gameSession1.currentGrid).to.be.an.array;
	});
});
