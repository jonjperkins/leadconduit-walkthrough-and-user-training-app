import React, { Component } from 'react';

class Header extends Component {
	handleSidebarToggle() {
		this.props.onClick();
	}	
	render() {
		return (
			<nav>
				<div className='fixed-nav-bar'>
					<img id='ap-logo' src={require('../images/logo.png')} alt="Logo" />
					{!this.props.hideMenuButton 
						? <button onClick={this.handleSidebarToggle.bind(this)} className={this.props.value ? "close-menu-button" : "menu-button"}>
							{ this.props.value ? 'X' : 'MENU' }
						</button>
						: ''
					}	
				</div>
			</nav>
		)
	}

}

export default Header;