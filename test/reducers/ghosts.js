import {expect} from 'chai';

import ghostsReducer from '../../app/scripts/reducers/ghosts';

describe('ghosts reducer', () => {
	let ghosts;

	beforeEach(() => {
		ghosts = ghostsReducer(undefined, {})
	});

	it('should be an array', () => {
		expect(ghosts).to.be.an.array;
	});

	it('should have a numeric x and y coordinate for each ghost', () => {
		ghosts.forEach(ghost => {
			expect(ghost.position).to.have.property('x');
			expect(ghost.position).to.have.property('y');
			expect(ghost.position.x).to.be.a.number;
			expect(ghost.position.y).to.be.a.number;
		});
	});

	it('should have a hex color value for each ghost', () => {
		ghosts.forEach(ghost => {
			expect(ghost).to.have.property('color');
			expect(ghost.color).to.be.a.string;
			expect(ghost.color.match(/^#([a-fA-F0-9]{3}$|[a-fA-F0-9]{6}$)/)).to.be.ok;
		});
	});
});
