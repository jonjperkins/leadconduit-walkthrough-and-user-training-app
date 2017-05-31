import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Chapter1 from './Chapter1';
import Chapter2 from './Chapter2';
import Test from './Test';
import WebScraper from './WebScraper';
import './App.css';
import CustomNavLink from './CustomNavLink';

class App extends Component {
constructor() {
	super();
	this.state = {
		sidebar_wrapper: ""
	}
  }
  render() {
  	return (
		<div>
			<div>
				<Header />
			</div>
			<div id='wrapper'>
				<BrowserRouter>
					<div className='wrapper-ancestor'>
						<div id='sidebar-wrapper'>
							<div className="sidebar-content">
								<Sidebar>
										<CustomNavLink activeClassName='activePage' to="/chapter1" label="Homepage"></CustomNavLink>
										<CustomNavLink activeClassName='activePage' to="/chapter2" label="Flows"></CustomNavLink> 
										
										<br/>
										<CustomNavLink activeClassName='activePage' to="/test" label="Test Your Flow"></CustomNavLink> 
										<CustomNavLink activeClassName='activePage' to="/webscraper" label="Field Finder"></CustomNavLink> 
								</Sidebar>
							</div>
						</div>
						<div id='page-content-wrapper'>
							<div className="app-content-body">
								<Route path='/chapter1' component={Chapter1}></Route>
								<Route path='/chapter2' component={Chapter2}></Route>
								<Route path='/test' component={Test}></Route>
								<Route path='/webscraper' component={WebScraper}></Route>
							</div>	
						</div>
					</div>
				</BrowserRouter>
			</div>				
		</div>
	);
  }
};

export default App;