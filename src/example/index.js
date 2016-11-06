'use strict';

import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import SomeComponent from '../component/js/Component';

class App extends Component {
	render () {
		return (
			<div className="container">
				<h1>react-component</h1>
				<p>Below are a few implementations of the component, for more options and events please see the <a href="https://github.com/JFusco/react-library-boilerplate/blob/master/README.md#options">README</a> file documentation</p>

				<h2>Tests</h2>
				<p>View coverage report <a href="https://jfusco.github.io/react-library-boilerplate/coverage/lcov-report/index.html">here</a></p>

				<div className="example">
					<h2>Default foo</h2>
					<p>No properties are required to make this component work.</p>

					{/* Component */}
					<div className="example__component-wrapper">
						<SomeComponent />
					</div>

					<pre>
						{`<SomeComponent />`}
					</pre>
				</div>
			</div>
		);
	}
}

render(<App />, document.getElementById('application'));
