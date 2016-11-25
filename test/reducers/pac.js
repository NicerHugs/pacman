import {expect} from 'chai';

import pacReducer from '../../app/scripts/reducers/pac';

describe('pac reducer', () => {
	let pac;

	beforeEach(() => {
		pac = pacReducer(undefined, {})
	});

	it('should have a position property that is an object', () => {
		expect(pac).to.have.property('position');
		expect(pac.position).to.be.an.object;
	});

	it('should have an x and y coordinate that is a number', () => {
		expect(pac.position).to.have.property('x');
		expect(pac.position).to.have.property('y');
		expect(pac.position.x).to.be.a.number;
		expect(pac.position.y).to.be.a.number;
	});
});
