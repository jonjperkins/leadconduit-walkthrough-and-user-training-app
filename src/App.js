import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Chapter1 from './Chapter1';
import Chapter2 from './Chapter2';
import Test from './Test';
import WebScraper from './WebScraper';
import './App.css';

class App extends Component {
  render() {
  	return (
		<div>
			<div>
				<Header />
			</div>
			<div id='wrapper'>
				<BrowserRouter>
					<div>
						<div id='sidebar-wrapper'>
							<div className="sidebar-content">
								<Sidebar>
									<div>
										<li><Link to='/chapter1'>1. The Homepage</Link></li>
										<li><Link to='/chapter2'>2. Flows</Link></li>
										<br/>
										<li><Link to='/test'><strong>Test Your Flow</strong></Link></li>
										<li><Link to='/webscraper'><strong>Field Finder</strong></Link></li>
									</div>		
								</Sidebar>
							</div>
						</div>
						<div id='page-content-wrapper'>
							<div>
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