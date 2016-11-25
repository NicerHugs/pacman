import {expect} from 'chai';

import store from '../../app/scripts/store'

import gameSessionReducer from '../../app/scripts/reducers/gameSession';

describe('gameSession reducer', () => {

	let gameSession;

	beforeEach(() => {
		gameSession = gameSessionReducer(undefined, {})
	});

	it('should have a gameover property that is an boolean', () => {
		expect(gameSession).to.have.property('gameover');
		expect(gameSession.gameover).to.be.a.boolean;
	});

	it('should have a gridSize property that is a number', () => {
		expect(gameSession).to.have.property('gridSize');
		expect(gameSession.gridSize).to.be.a.number;
	});

	it('should have a levelIndex property that is a number', () => {
		expect(gameSession).to.have.property('levelIndex');
		expect(gameSession.levelIndex).to.be.a.number;
	});

	it('should have a currentScore property that is a number', () => {
		expect(gameSession).to.have.property('currentScore');
		expect(gameSession.currentScore).to.be.a.number;
	});

	it('should have a currentLives property that is a number', () => {
		expect(gameSession).to.have.property('currentLives');
		expect(gameSession.currentLives).to.be.a.number;
	});

	it('should have a gameLoop property that defaults to null', () => {
		expect(gameSession).to.have.property('gameLoop');	expect(gameSession.gameLoop).to.be.a.null;
	});

	it('should have a timer property that is a number', () => {
		expect(gameSession).to.have.property('timer');
		expect(gameSession.timer).to.be.a.number;
	});

	it('should have a currentGrid property that is an array', () => {
		expect(gameSession).to.have.property('currentGrid');
		expect(gameSession.currentGrid).to.be.an.array;
	});
});
