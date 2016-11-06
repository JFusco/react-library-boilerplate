'use strict';

jest.disableAutomock();

import React from 'react';
import { findDOMNode } from 'react-dom';
import { createRenderer, Simulate, renderIntoDocument } from 'react-addons-test-utils';
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
