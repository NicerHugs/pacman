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
});
