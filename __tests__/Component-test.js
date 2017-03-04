'use strict';

jest.disableAutomock();

import React from 'react';
import { findDOMNode } from 'react-dom';
import { createRenderer, Simulate, renderIntoDocument } from 'react-addons-test-utils';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Component from '../src/component/js/Component';

describe('Suggestion', () => {
	it('should render', () => {
		const renderer = createRenderer();

		renderer.render(
			<Component />
		);

		const component = renderer.getRenderOutput();

		expect(component.type).toBe('div');
	});
});

describe('Suggestion snapshot', () => {
	it('should render', () => {
		const component = renderer.create(
			<Component />
		).toJSON();

		expect(component).toMatchSnapshot();
	});
});
