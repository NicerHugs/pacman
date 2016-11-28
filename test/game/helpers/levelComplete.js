import {expect} from 'chai';

import levelComplete from '../../../app/scripts/game/helpers/levelComplete';

describe('levelComplete game helper function', () => {
	it('should exist', () => {
		expect(levelComplete).to.exist;
	});

	it('should be a function', () => {
		expect(levelComplete).to.be.a('function');
	});

	it('should return true if there are no 2 or 3\'s in a grid', () => {
		let grid = [[0]]
		expect(levelComplete(grid)).to.be.true;
		grid = [[1,0], [1,0]];
		expect(levelComplete(grid)).to.be.true;
	});

	it('should return false if there is even 1 2 or 3 in a grid', () => {
		let grid = [[2]]
		expect(levelComplete(grid)).to.be.false;
		grid = [[1,0], [2,0]];
		expect(levelComplete(grid)).to.be.false;
	});
});
