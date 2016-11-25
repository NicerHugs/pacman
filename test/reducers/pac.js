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

	it('should have an gridX and gridY coordinate that is a number', () => {
		expect(pac.position).to.have.property('gridX');
		expect(pac.position).to.have.property('gridY');
		expect(pac.position.gridX).to.be.a.number;
		expect(pac.position.gridY).to.be.a.number;
	});
});
