import React, { Component } from 'react';
import './ChapterStyles.css';

class Chapter1 extends Component {
	render() {
		return(
			<div>
				<div className="content-header">
					<h1>1. The Homepage</h1>
				</div>
				<div className="content-body">
				<p> When you sign-in to your LeadConduit account, you'll be taken to your homepage at next.leadconduit.com. The homepage provides you with an overview of your flow activity, as well as a navigation bar with important links to access your flows, libraries, events, and reports.</p>
 				<p><strong> Homepage overview</strong></p>
				1. Navbar<br/>
				2. Quickview of Flow Statistics - Organized by Source<br/>
				3. Pie Chart of Lead Activity within the Selected Timeframe<br/>
				4. Bar Graph of Lead Activity within the Last 7 Days<br/>
				5. Most Recently Received Leads across all flows<br/>
				6. Live Chat<br/>
				<img src={require('../images/homepage.png')} />
				<p>The homepage is a great place to quickly check on your lead activity. It's also where you'll find the link to create and edit your flows. </p>
				<img src={require('../images/accessflows.png')} />
				</div>
			</div>
		);
	}
}

export default Chapter1;