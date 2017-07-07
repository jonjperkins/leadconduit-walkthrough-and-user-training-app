import React, { Component } from 'react';
import './ChapterStyles.css';
import { Link } from 'react-router-dom';

class TestingBasics extends Component {
	componentDidMount () {
  		window.scrollTo(0, 0)
	}
	render() {
		return(
			<div className="ancestor">
				<div className="chapter-content-body">
					<h1 className="title">Testing Basics</h1>
					<p>Once you've configured your flow, you need to test your flow. Why? Even the best flow 
					builders forget things from time to time. You should test your flow to make sure you didn't 
					configure anything that will allow undesirable leads to pass through your flow undetected.</p>
					<p>In the next section of this guide, you can use our testing tool to test your flow. Whether 
					you’re working with a web form you own, or receiving leads from a partner, it’s important to 
					test your flow yourself. The fact that a lead partner or web form can successfully send leads 
					to your flow doesn’t mean anything if your flow isn’t configured properly.</p>
					<p>Here’s an overview of the basic flow elements you should test every time:</p>
					<ol>
						<li><strong>Test your acceptance criteria</strong>. If you’ve set up acceptance criteria to 
						reject leads without valid email addresses, send a lead with an invalid email address and a 
						lead with a valid email address. Perhaps you’ve accidentally configured your acceptance 
						criteria to require that the email address is not blank. Invalid and blank email addresses 
						are two different things, and testing this acceptance criteria can give you the confidence to 
						know leads with invalid email addresses are not making it into your flow. It may also alert 
						you to the fact that you’d also like to prevent blank email addresses as well.</li>
						<li><strong>Test your filters</strong>. If you’ve configured filter logic to reject leads and 
						stop the flow based on information or responses you’re receiving from marketplace integrations, 
						enhancements, or deliveries, test this logic by sending leads to your flow that should and 
						shouldn’t cause these filters to reject a lead.</li>
						<li><strong>Test your rules</strong>. If you’ve configured rules that a lead must meet to 
						enter a particular step of your flow, test that rule much like you would test your filters.</li>
						<li><strong>Test your deliveries</strong>. Send leads to your flow that you believe should be 
						delivered successfully. Check the lead in your LeadConduit account, and then verify in the 
						delivery destination (e.g. MailChimp, Salesforce, etc.) that the data you’re trying to collect 
						is being collected in the correct format. There’s not much worse than starting to receive live 
						leads into a flow, only to realize that the place you’re collecting data isn’t receiving the 
						information the way you expected it to be formatted.</li>
						<li><strong>Test from end-to-end</strong>. Once you’ve tested your flow logic, test the entire 
						lifecycle of your leads from end-to-end. If you’re working with a lead partner, have them send 
						test leads to your flow. If you’re receiving leads from a web form you own, send leads from that 
						web form to ensure you can POST leads to your flow properly. Review these leads for the same 
						potential pitfalls listed above.</li>
					</ol>
					<p>In the next section, you’ll be able to send a test lead to your flow using our testing tool. The 
					testing tool allows you to click a link and view the details of your test lead in LeadConduit. When 
					testing in the wild, you can access lead details from a variety of entry points. However, the easiest 
					way to verify the status of your test leads is by accessing an individual lead from the <strong>Recent Leads</strong> 
					section on the main page of the flow you’re testing.</p>
					<img src={require('../images/recentleads.png')} />
					<Link className="previous-button" style={{ textDecoration: 'none' }} to="/chapter9">Back</Link>
					<Link className="next-button" style={{ textDecoration: 'none' }} to="/chapter11">Next</Link>
				</div>
			</div>
		);
	}
}

export default TestingBasics;