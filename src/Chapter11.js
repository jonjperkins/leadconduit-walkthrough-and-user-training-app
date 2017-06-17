import React, { Component } from 'react';
import './ChapterStyles.css';
import { Link } from 'react-router-dom';

class Chapter11 extends Component {
	componentDidMount () {
  		window.scrollTo(0, 0)
	}
	render() {
		return(
			<div className="ancestor">
				<div className="chapter-content-body">
					<h1 className="title">Marketplace Integrations & Enhancements</h1>
					<p>Adding an enhancement step in your flow allows you to take the data sent into your flow and add 
					something to it or verify the information is accurate.</p>
					<p>Here are a just a few examples of enrichment data you can add to your leads in LeadConduit:</p>
					<ul>
						<li>Mortgage Information</li>
						<li>Average Credit Scores for a ZIP+4 Area</li>
						<li>Employee or Business Information</li>
						<li>Consumer & Household Information</li>
					</ul>
					<p>Here are a few examples of information you can verify using one of our marketplace integrations:</p>
					<ul>
						<li>Phone numbers</li>
						<li>Email addresses</li>
						<li>Mailing addresses</li>
					</ul>
					<p>For our tutorial, we'll walk through setting up enhancements to verify phone and email data. To see a 
					full list of available enhancement services, you can visit this page: 
					<a href="http://docs.leadconduit.com/" target="_blank">http://docs.leadconduit.com/</a>.</p>
					
					<p><h3><strong>Let’s add our first enhancement:</strong></h3></p>
					<p> Switch over to your 'Steps' tab in your flow and select the option to add an enhancement. This will 
					bring up a menu of options to choose from. Scroll down and select the Telesign option.</p>
					<img src={require('../images/telesign.gif')} />
					<p>You probably noticed that when we selected the bubble for Telesign, the section expanded and alerted 
					us to the pricing structure. It's important to take note of what using this service will cost you per lead. 
					But what if we don't want to send every lead to this enhancement?</p>
					<p>Let’s assume for this tutorial that we only want to call people who are 50+ years old. Therefore, if a 
					lead is less than 50 years old, there’s no reason for us to send that lead to phone validation because we 
					don’t plan on calling them anyway. We can configure rules on our enhancements to make sure we aren’t spending 
					money on enhancements when we don’t need them.</p>
					<p><h3><strong>Your turn!</strong></h3></p>
					<p>Now it's your turn to implement a step. In this section of the tutorial, you’ll implement the the email 
					verification step with Webbula.</p>
					<p>Whenever you’re using an enhancement integration for the first time, it’s best to visit our Knowledge 
					base for an explanation of how that integration works. Enhancements behave differently from each other, 
					so it’s important to understand what kind of responses each will return so that you can filter correctly.</p>
					<p>To implement the ‘Webbula CloudHygiene - Email Hygiene’ step, first take a look through our Knowledge Base 
					article <a href="https://support.activeprospect.com/hc/en-us/articles/204981955-Webbula-Email-Hygiene-Verification" target="_blank">here </a> 
					to get familiar with what kind of information Webbula will send back to us.  When you’re ready, 
					you can go ahead and add the Webbula step. If you get stuck, check out the video clip below for help.</p>
					<img src={require('../images/addwebbula.gif')} />
					
					<Link className="previous-button" style={{ textDecoration: 'none' }} to="/chapter10">Back</Link>
					<Link className="next-button" style={{ textDecoration: 'none' }} to="/chapter12">Next</Link>
				</div>
			</div>
		);
	}
}

export default Chapter11;