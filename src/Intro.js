import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ChapterStyles.css';

class Intro extends Component {
	render() {
		return(
			<div className="ancestor">
				<div className="chapter-content-body">
				<h1 className="title">Meet LeadConduit</h1>
				<p> The LeadConduit platform is a real-time data integration hub used to build sophisticated lead 
				flows to meet the unique needs of your business. Lead flows allow you to capture, enhance, filter 
				and deliver leads to any combination of systems according to custom logic you define. You can imagine 
				a flow looking something like this:</p>
				<img src={require('../images/flowdiagram.png')} />
 				<p>In LeadConduit, a lead’s life-cycle begins at capture and ends with delivery to the system of your 
 				choice - but only if that lead is qualified.</p>
 				<p><strong>Capture:</strong> Whether it’s from an internal form or a 3rd party lead vendor, LeadConduit captures leads 
 				automatically from all your lead sources for centralized processing. </p>			
				<p><strong>Enhance:</strong> Once you’ve captured a lead, you can use LeadConduit to get additional information on your leads using 
				any 3rd party data service. Verify, score, or append additional information to your leads with best of breed providers.</p>
				<p><strong>Filter:</strong> Use the enhanced data to block or route leads using rules-based logic. LeadConduit provides a real-time response 
				to the lead source informing them if the lead was rejected, along with a reason why.</p>
				<p><strong>Deliver:</strong> Integrate leads into your CRM, ESP, Marketing Automation, or custom system. Leads can be routed to multiple 
				systems or parties based on your requirements.</p>
				<p><strong>Report:</strong> Gain insights into your marketing funnel and statistics. Share with partners for easy reconciliation.</p>
				<p>LeadConduit can do a lot. But knowing what it can do is vastly different from knowing how to do it. This tutorial will help you build 
				your very first flow. By the time we’re done, you’ll be able to build just about any flow you could imagine.</p>
				<br/>
				<p><strong>Our Scenario:</strong></p>
				<ul>
					<li> In this tutorial, we’ll set up a flow to collect information from an internal web form. In the real world, this would be a web form you’ve set up yourself. </li>
					<br/>
					<ul>
						<li>NOTE: A good many LeadConduit users receive leads from 3rd party vendors who have their own web forms that can post to your LeadConduit flow. In that 
						scenario, you would send posting instructions to these vendors showing them how to post to your flow.</li>
					</ul>
					<br/>
					<li>We’ll collect information from this form and enhance the data with Telesign (phone validation) and Webbula (email validation) steps.</li>
					<br/>
					<li>We’ll filter our leads, and make sure only the qualified leads make it to our delivery destination. It’s okay if you aren’t currently 
					using a CRM or database (Salesforce, Velocify, etc.) to collect these leads! We’ll use a mock delivery destination in this tutorial that will 
					give you the skills to set up your own deliveries going forward.</li>
					<br/>
					<li>Lastly, we’ll show you how to test your flow and report on your leads. </li>
				</ul> <br/>
				<p>Let’s start by taking a look at how to sign-in. </p>
				<Link className="next-button" style={{ textDecoration: 'none' }} to="/signingin">Next</Link>
				</div>
			</div>
		);
	}
}

export default Intro;