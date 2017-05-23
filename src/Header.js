import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class Header extends Component {
	render() {
		return (
			<nav>
				<div className='fixed-nav-bar'>
					<img id='ap-logo' src={require('../images/logo.png')} />
				</div>
			</nav>
		)
	}

}

export default Header;