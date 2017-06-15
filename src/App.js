import React, { Component } from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Homepage from './Homepage';
import SigningIn from './SigningIn';
import Intro from './Intro';
import Chapter1 from './Chapter1';
import Chapter2 from './Chapter2';
import Chapter3 from './Chapter3';
import Chapter4 from './Chapter4';
import Chapter5 from './Chapter5';
import Chapter6 from './Chapter6';
import Test from './Test';
import WebScraper from './WebScraper';
import './App.css';
import CustomNavLink from './CustomNavLink';
import 'babel-polyfill';

class App extends Component {
	constructor() {
		super();
		this.state = {
			isActive: false
		}
	}
	sidebarToggle() {
		var active = !this.state.isActive;
		this.setState({ isActive: active });
	}
	sidebarClose() {
		this.setState({ isActive: false });
	}
  	render() {
  		return (
			<div>
				<div>
					<Header onClick={this.sidebarToggle.bind(this)} value={this.state.isActive} />
				</div>
				<div id='wrapper'>
					<HashRouter>
						<div className='wrapper-ancestor'>
							<div className={this.state.isActive ? 'active-sidebar-small-screen' : 'sidebar-wrapper'}>
								<div className="sidebar-content">
									<Sidebar>
										<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/intro" label="Meet LeadConduit"></CustomNavLink>
										<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/signingin" label="Signing In"></CustomNavLink>
										<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/chapter1" label="The Homepage"></CustomNavLink>
										<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/chapter2" label="Flows"></CustomNavLink> 
										<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/chapter3" label="Create Your Flow"></CustomNavLink>
										<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/chapter4" label="Fields"></CustomNavLink>
										<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/chapter5" label="Fields and Form Parameters"></CustomNavLink>
										<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/chapter6" label="Lead Sources"></CustomNavLink>
										<br/>
										<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/test" label="Test Your Flow"></CustomNavLink> 
										<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/webscraper" label="Field Finder"></CustomNavLink> 
									</Sidebar>
								</div>
							</div>
							<div id='page-content-wrapper'>
								<div className="app-content-body">
									<Route path='/' exact true component={Homepage}></Route>
									<Route path='/intro' component={Intro}></Route>
									<Route path='/signingin' component={SigningIn}></Route>
									<Route path='/chapter1' component={Chapter1}></Route>
									<Route path='/chapter2' component={Chapter2}></Route>
									<Route path='/chapter3' component={Chapter3}></Route>
									<Route path='/chapter4' component={Chapter4}></Route>
									<Route path='/chapter5' component={Chapter5}></Route>
									<Route path='/chapter6' component={Chapter6}></Route>
									<Route path='/test' component={Test}></Route>
									<Route path='/webscraper' component={WebScraper}></Route>
								</div>	
							</div>
						</div>
					</HashRouter>
				</div>				
			</div>
		);
  	}
};

export default App;