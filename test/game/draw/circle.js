import {expect} from 'chai';
import {spy} from 'sinon';

import drawCircle from '../../../app/scripts/game/draw/circle';

describe('the draw circle function', () => {
	let ctx;

	beforeEach(() => {
		ctx = {
			canvas: {height: 50, width: 50},
			beginPath: spy(),
			fill: spy(),
			arc: spy(),
			closePath: spy()
		};
	});

	it('should begin a path', () => {
		drawCircle(ctx, 40, 1, 2, 2);
		expect(ctx.beginPath.calledOnce).to.be.true;
	});

	it('should create an arc with the correct arguments', () => {
		drawCircle(ctx, 40, 1, 3, 2);
		drawCircle(ctx, 20, 5, 2, 10);
		expect(ctx.arc.calledTwice).to.be.true;
		expect(ctx.arc.calledWith(60, 140, 20, 0, Math.PI * 2, false)).to.be.true
		expect(ctx.arc.calledWith(110, 50, 2, 0, Math.PI * 2, false)).to.be.true
	});

	it('should accept an optional color', () => {
		drawCircle(ctx, 40, 1, 3, 2);
		expect(ctx.fillStyle).to.equal('#000');
		drawCircle(ctx, 40, 1, 3, 2, '#fff');
		expect(ctx.fillStyle).to.equal('#fff');
	});
});
