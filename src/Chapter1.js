import React, { Component } from 'react';
import './ChapterStyles.css';
import { Link } from 'react-router-dom';

class Chapter1 extends Component {
	render() {
		return(
			<div className="ancestor">
				<div className="chapter-content-body">
				<h1 className="title">The Homepage</h1>
				<p> Once you’ve successfully signed-in to LeadConduit, you'll be taken to your homepage at 
				<a href="https://next.leadconduit.com" target="_blank"> next.leadconduit.com</a>. The homepage provides you with an overview of your flow activity, 
				as well as a navigation bar with important links to access your flows, libraries, 
				events, and reports.</p>
 				<p><strong> Homepage overview</strong></p>
				1. Navbar<br/>
				2. Quickview of Flow Statistics - Organized by Source<br/>
				3. Pie Chart of Lead Activity within the Selected Timeframe<br/>
				4. Bar Graph of Lead Activity within the Last 7 Days<br/>
				5. Most Recently Received Leads across all flows<br/>
				6. Live Chat<br/>
				<img src={require('../images/homepage.png')} />	
				<Link className="previous-button" style={{ textDecoration: 'none' }} to="/signingin">Back</Link>
				<Link className="next-button" style={{ textDecoration: 'none' }} to="/chapter2">Next</Link>			
				</div>
			</div>
		);
	}
}

export default Chapter1;