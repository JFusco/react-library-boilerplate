'use strict';

import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import SomeComponent from './js/Component';

class App extends Component {
	render () {
		return (
			<div>

				{/* Component */}
				<SomeComponent />
			</div>
		);
	}
}

render(<App />, document.getElementById('application'));
