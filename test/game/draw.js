import {expect} from 'chai';
import {spy} from 'sinon';

import draw from '../../app/scripts/game/draw';
import drawWall from '../../app/scripts/game/draw/wall';

describe('the draw function', () => {
	let ctx = {
		canvas: {height: 50, width: 50},
		clearRect() {},
		fillRect() {},
		beginPath() {},
		arc() {},
		fill() {},
		closePath() {}
	};
	let ctx1, ctx2;
	const bodies = {pac: {position: {}}, ghosts: []};

	beforeEach(() => {
		ctx1 = Object.assign({}, ctx);
		ctx2 = Object.assign({}, ctx, {canvas: {height: 30, width: 80}});
	});

	it('should clear the canvas passed in', () => {
		ctx1.clearRect = spy();
		draw(ctx1, 50, [], bodies);
		expect(ctx1.clearRect.calledOnce).to.be.true;
		expect(ctx1.clearRect.calledWith(0,0,50,50)).to.be.true;

		ctx2.clearRect = spy();
		draw(ctx2, 50, [], bodies);
		expect(ctx2.clearRect.calledOnce).to.be.true;
		expect(ctx2.clearRect.calledWith(0,0,80,30)).to.be.true;
	});

	it('should call fillRect for each 1 in the grid', () => {
		ctx1.fillRect = spy();
		draw(ctx1, 30, [[1,3,2],[1,2,2],[3,1,1]], bodies);
		expect(ctx1.fillRect.callCount).to.equal(4);

		ctx2.fillRect = spy();
		draw(ctx2, 30, [[0,3,2],[0,2,2],[3,1,1]], bodies);
		expect(ctx2.fillRect.callCount).to.equal(2);
	});

	it('should call fillRect with the correct args', () => {
		ctx1.fillRect = spy();
		draw(ctx1, 30, [[1]], bodies);
		expect(ctx1.fillRect.callCount).to.equal(1);
		expect(ctx1.fillRect.calledWith(0,0,30,30)).to.be.true;

		ctx2.fillRect = spy();
		draw(ctx2, 40, [[2,1,2],[0,2,1],[3,1,2]], bodies);
		expect(ctx2.fillRect.calledWith(40,80,40,40)).to.be.true;
		expect(ctx2.fillRect.calledWith(40,0,40,40)).to.be.true;
		expect(ctx2.fillRect.calledWith(80,40,40,40)).to.be.true;
	});
});
