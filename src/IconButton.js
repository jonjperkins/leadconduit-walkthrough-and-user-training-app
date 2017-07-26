import React, { Component } from 'react';
import { Link } from 'react-router-dom';
var FontAwesome = require('react-fontawesome');

class IconButton extends Component {
	render() {
		return(
				<Link to={this.props.to}>
					<FontAwesome name={this.props.name} size="3x" className={this.props.class_name}/>
				</Link>
		);
	}
}

export default IconButton;