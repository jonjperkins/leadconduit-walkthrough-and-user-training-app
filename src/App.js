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
import Chapter7 from './Chapter7';
import Chapter8 from './Chapter8';
import Chapter9 from './Chapter9';
import Chapter10 from './Chapter10';
import Chapter11 from './Chapter11';
import Chapter12 from './Chapter12';
import Chapter13 from './Chapter13';
import Chapter14 from './Chapter14';
import Chapter15 from './Chapter15';
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
										<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/chapter7" label="Inbound Field Mapping"></CustomNavLink>
										<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/chapter8" label="Acceptance Criteria"></CustomNavLink>
										<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/chapter9" label="Posting Instructions"></CustomNavLink>
										<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/chapter10" label="Steps"></CustomNavLink>
										<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/chapter11" label="Marketplace Integrations & Enhancements"></CustomNavLink>
										<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/chapter12" label="Filters and Step Rules"></CustomNavLink>
										<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/chapter13" label="Lead Delivery"></CustomNavLink>
										<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/chapter14" label="Outbound Field Mapping"></CustomNavLink>
										<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/chapter15" label="Response Parsing"></CustomNavLink>

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
									<Route path='/chapter7' component={Chapter7}></Route>
									<Route path='/chapter8' component={Chapter8}></Route>
									<Route path='/chapter9' component={Chapter9}></Route>
									<Route path='/chapter10' component={Chapter10}></Route>	
									<Route path='/chapter11' component={Chapter11}></Route>
									<Route path='/chapter12' component={Chapter12}></Route>
									<Route path='/chapter13' component={Chapter13}></Route>		
									<Route path='/chapter14' component={Chapter14}></Route>							
									<Route path='/chapter15' component={Chapter15}></Route>	
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