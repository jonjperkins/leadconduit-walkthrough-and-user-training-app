import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class IntroAndFlowCreation extends Component {
	componentDidMount () {
  		window.scrollTo(0, 0)
  		
	}
	render() {
		return(
			<div className="ancestor">
				<div className="chapter-content-body">
					<h1 className="title">Intro and Flow Creation</h1>
					<p> The LeadConduit platform is a real-time data integration hub used to build sophisticated lead flows 
						to meet the unique needs of your business. Lead flows allow you to capture, enhance, filter and deliver 
						leads to any combination of systems according to custom logic you define. You can imagine a flow looking 
						something like this:</p>
					<img className="img-background" src={require('../images/flowdiagram.png')} />
	 				<p>In LeadConduit, a lead’s life-cycle begins at capture and ends with delivery to the system of your 
	 				choice - but only if that lead is qualified.</p>
	 				<p><strong>Capture:</strong> Whether it’s from an internal form or a 3rd party lead vendor, LeadConduit captures leads 
	 				automatically from all your lead sources for centralized processing.</p>			
					<p><strong>Enhance:</strong> Once you’ve captured a lead, you can use LeadConduit to get additional information on your leads using 
					any 3rd party data service. Verify, score, or append additional information to your leads with best of breed providers.</p>
					<p><strong>Filter:</strong> Use the enhanced data to block or route leads using rules-based logic. LeadConduit provides a real-time response 
					to the lead source informing them if the lead was rejected, along with a reason why.</p>
					<p><strong>Deliver:</strong> Integrate leads into your CRM, ESP, Marketing Automation, or custom system. Leads can be routed to multiple 
					systems or parties based on your requirements.</p>
					<p><strong>Report:</strong> Gain insights into your marketing funnel and statistics. Share with partners for easy reconciliation.</p>
	 				<br />
	 				<h2> Create Your Flow </h2>
	 				<p>LeadConduit can do a lot, and the first step towards harnessing its power is <a href="https://support.activeprospect.com/hc/en-us/articles/115002511123-Logging-In-Launching-Products" target="_blank">signing-in</a>. 
	 				Once you’re signed-in, launch the LeadConduit app and select the ‘Flows’ button from the navigation bar.</p>
					<img className="img-background" src={require('../images/flow_button.png')} />
					<p>Select the ‘New Flow’ button and you’ll be taken to flow editor page for this new flow. Give your flow a name, and press the ‘Save’ button. </p>
					<img className="img-background" src={require('../images/createandnameflow.gif')} />
					<p>You've just created your first flow - <em>great job!</em></p>
					<p>Whenever you make changes to your LeadConduit flow, you will need to <strong>save</strong> those changes to prevent them from being lost when you navigate away from 
					the flow you're working on. You can save your flow by clicking the 'Save' button in the upper right-hand corner of the screen. If the ‘Save’ button 
					isn’t clickable, then there haven’t been any changes made to your flow since your last save.</p>
					<Link className="next-button" style={{ textDecoration: 'none' }} to="/sources-partners">Next</Link>
				</div>
			</div>
		);
	}
}

export default IntroAndFlowCreation;
