import {expect} from 'chai';
import {shallow} from 'enzyme';

import React from 'react';

import PacMan from '../../app/scripts/components/PacMan';

describe('PacMan component', () => {
	let pacMan;

	beforeEach(() => {
		pacMan = shallow(<PacMan/>);
	});

	it('should exist', () => {
		expect(PacMan).to.exist;
	});

	it('should be a react component', () => {
		expect(PacMan.prototype.isReactComponent).to.be.ok;
	});

	it('should render a single canvas element with class "pac-canvas"', () => {
		expect(pacMan).to.have.exactly(1).descendants('canvas#pac-canvas');
	});

	it('should render the canvas to the proper size', () => {
		pacMan.setState({currentGrid: [[1]], gridSize: 50})
		expect(pacMan.find('canvas')).to.have.attr('width').equal('50');
		expect(pacMan.find('canvas')).to.have.attr('height').equal('50');
		pacMan.setState({currentGrid: [[1,2,1,2],[1,2,1,1]], gridSize: 20})
		expect(pacMan.find('canvas')).to.have.attr('width').equal('80');
		expect(pacMan.find('canvas')).to.have.attr('height').equal('40');
	});

	it('should display the current lives', () => {
		expect(pacMan).to.include.text('Lives: 3');
		pacMan.setState({'currentLives': 1});
		expect(pacMan).to.include.text('Lives: 1');
	});

	it('should display the current score', () => {
		expect(pacMan).to.include.text('Score: 0');
		pacMan.setState({'currentScore': 58});
		expect(pacMan).to.include.text('Score: 58');
	});

	it('should display the current level, which is the levelIndex + 1', () => {
		expect(pacMan).to.include.text('Level: 1');
		pacMan.setState({'levelIndex': 58});
		expect(pacMan).to.include.text('Level: 59');
	});

	it('should display the timer, which is the timer / 60', () => {
		expect(pacMan).to.include.text('Timer: ');
		pacMan.setState({'timer': 528});
		expect(pacMan).to.include.text('Timer: 9');
		pacMan.setState({'timer': 8});
		expect(pacMan).to.include.text('Timer: 1');
	});

	it('should tell the user how to start/pause the game', () => {
		expect(pacMan).to.include.text('Press the spacebar to start the game');
		pacMan.setState({'gameLoop': 58});
		expect(pacMan).to.include.text('Press the spacebar to pause the game');
		pacMan.setState({'gameLoop': null});
		expect(pacMan).to.include.text('Press the spacebar to start the game');
	});
});
