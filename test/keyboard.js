import {expect} from 'chai';
import sinon from 'sinon';
import jsdom from 'mocha-jsdom';

import keyboard from '../app/scripts/keyboard';

describe('keyboard module', () => {

	jsdom({globalize: true});

	let cb;

	beforeEach(() => {
		cb = sinon.spy();
		keyboard({
			'space': cb,
			'up': cb,
			'down': cb,
			'right': cb,
			'left': cb
		})
	});

	it('should exist', () => {
		expect(keyboard).to.exist;
	});

	it('should be a function', () => {
		expect(keyboard).to.be.a('function');
	});

	it('should listen for space events', () => {
		let e = new window.Event('keydown');
		e.key = ' ';
	  window.dispatchEvent(e);
		expect(cb.calledOnce).to.be.true;
	});

	it('should listen for right arrow events', () => {
		let e = new window.Event('keydown');
		e.key = 'arrowright';
	  window.dispatchEvent(e);
		expect(cb.calledOnce).to.be.true;
	});

	it('should listen for left arrow events', () => {
		let e = new window.Event('keydown');
		e.key = 'arrowleft';
	  window.dispatchEvent(e);
		expect(cb.calledOnce).to.be.true;
	});

	it('should listen for up arrow events', () => {
		let e = new window.Event('keydown');
		e.key = 'arrowup';
	  window.dispatchEvent(e);
		expect(cb.calledOnce).to.be.true;
	});

	it('should listen for down arrow events', () => {
		let e = new window.Event('keydown');
		e.key = 'arrowdown';
	  window.dispatchEvent(e);
		expect(cb.calledOnce).to.be.true;
	});

});
