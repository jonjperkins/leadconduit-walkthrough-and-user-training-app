import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';


class Sidebar extends Component {
	render() {
		return (
			<div className="sidebar-div">
				{this.props.children}
			</div>
		);
	}
}

export default Sidebar;