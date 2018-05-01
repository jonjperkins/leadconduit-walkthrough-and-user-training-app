import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
var FontAwesome = require('react-fontawesome');

class IconButton extends Component {
	removeToolTip() {
		ReactTooltip.hide()
	}
	render() {
		return(
				<Link to={this.props.to}>
					<FontAwesome onClick={this.removeToolTip.bind(this)} title={this.props.title} name={this.props.name} size="3x" className={this.props.class_name}/>
				</Link>
		);
	}
}

export default IconButton;