'use strict';

import React, { Component, PropTypes } from 'react';
import ComponentTwo from './ComponentTwo';

import '../scss/styles.scss';

class SomeComponent extends Component {
	state = {

	};

	static propTypes = {

	};

	static defaultProps = {

	};

	constructor(props){
		super(props);
	}

	componentWillMount(){

	}

	render(){
		return (
			<div>
				<span>Component</span>

				<ComponentTwo />
			</div>
		);
	}
}

export default SomeComponent;
