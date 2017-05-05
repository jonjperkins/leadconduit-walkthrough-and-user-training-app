import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class Header extends Component {
	render() {
		return (
			<nav>
				<div className='fixed-nav-bar'>
					<img id='ap-logo' src='https://activeprospect.com/wp-content/themes/activeprospect/assets/images/activeprospect-logo.svg' />
				</div>
			</nav>
		)
	}

}

export default Header;