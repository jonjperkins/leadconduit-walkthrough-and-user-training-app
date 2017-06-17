import React, { Component } from 'react';
import './ChapterStyles.css';
import { Link } from 'react-router-dom';

class Chapter9 extends Component {
	componentDidMount () {
  		window.scrollTo(0, 0)
	}
	render() {
		return(
			<div className="ancestor">
				<div className="chapter-content-body">
					<h1 className="title">Posting Instructions</h1>
					<p>When you create a flow and need a way to tell people how to send your lead data to your flow - send them the posting instructions.</p>
					<p>Posting instructions are source-specific and can be accessed on your flow's homepage. To get there, save your work and close out of the 
					flow editor. This will take you to the flow homepage. , Click the 'Posting Instructions' button in the upper right corner, and select the relevant source. 
					You'll be taken directly to the posting instructions page for that source in a new tab.</p>
					<p>These posting instructions will stay up-to-date in real time as changes are made to your flow, and will always live at their unique URL. 
					These do not require a login to access, and can be shared with your lead sources as necessary.</p>
					<img src={require('../images/accessingpostinginstructions.gif')} />
					<p>We won't talk about everything in the posting instructions, but here's a quick overview of what you can find inside:</p>
					<ul>
						<li>The ability for sources to directly upload leads to your flow via .csv files</li>
						<li>The Posting URL used to submit leads in real time</li>
						<li>Field labels and HTTP parameters</li>
						<li>An explanation of the server responses</li>
						<li>Interactive examples of how to post successfully</li>
					</ul>
					<p>Unlike filters, Acceptance Criteria will appear on your posting docs so your sources know exactly what you will and will not accept with your lead data. </p>
					<p>By using inbound field mappings to map the flow fields to the form parameters earlier, our posting documents automatically note that you can post data to two 
					different form parameters,  like 'last_name' OR 'l_name'. We’ll always prefer the LeadConduit standard parameter, but the mappings will allow you to post to either. 
					Take a look.</p>
					<p>Sources can also test the response they’ll receive from LeadConduit based on the Acceptance Criteria. Filters will not appear in the posting docs, and will not 
					apply to the interactive example at the bottom of the docs.</p>
					<img src={require('../images/postinginstructionsmappings.png')} />
					<p>Sources can also test the response they’ll receive from LeadConduit based on the Acceptance Criteria. Filters will not appear in the posting docs, and will not 
					apply to the interactive example at the bottom of the docs.</p>
					<Link className="previous-button" style={{ textDecoration: 'none' }} to="/chapter8">Back</Link>
					<Link className="next-button" style={{ textDecoration: 'none' }} to="/chapter10">Next</Link>
				</div>
			</div>
		);
	}
}

export default Chapter9;