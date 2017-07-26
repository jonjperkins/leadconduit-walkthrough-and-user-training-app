import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IconButton from './IconButton';

class TestingBasics extends Component {
	componentDidMount () {
  		window.scrollTo(0, 0)
	}
	render() {
		return(
			<div className="ancestor">
				<div className="chapter-content-body">
					<div className="arrow-wrapper">
						<div className="inner-arrow-wrapper">
							<div className="back-arrow">
								<IconButton title="Previous: Response Parsing" class_name="arrow" to="/response-parsing" name="angle-left" />
							</div>
							<div className="forward-arrow">
								<IconButton title="Next: Testing Tool" class_name="arrow" to="/testing-tool" name="angle-right" />
							</div>
						</div>
					</div>
					<h1 className="title">Testing Basics</h1>
					<h2>Testing Overview</h2>
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
					<p>The easiest way to verify the status of your test leads is by accessing an individual lead from 
					the Recent Leads section on the main page of the flow you’re testing.</p>
					<img className="img-background" src={require('../images/recentleads.png')} alt="Recent Leads" />
					<br />
					<h2>Flow Testing Tool</h2>
					<p>The LeadConduit Guide’s flow testing tool allows you to send test leads to one of your flows. In 
					order to use the tool, you’ll need to collect some information.</p>
					<ol>
						<li> The <strong>API key</strong> associated with your ActiveProspect account.</li>
						<ul>
							<li>Navigate to <a href="https://sso.activeprospect.com/account">https://sso.activeprospect.com/account</a>, and 
							click the Account Settings button in the upper right corner.</li>
						</ul>
						<li>The <strong>Posting URL</strong> for the flow you'd like to test.</li>
						<ul>
							<li>Visit this page to learn how to find your posting instructions: <a href="https://support.activeprospect.com/hc/en-us/articles/115002225566-Finding-and-Using-Posting-Instructions">https://support.activeprospect.com/hc/en-us/articles/115002225566-Finding-and-Using-Posting-Instructions</a>.</li>  
						</ul>
					</ol>
					<p>The tool will prompt you to enter this information, and the data will persist until you navigate away from or 
					refresh the flow testing tool page. If you return to the tool, you’ll need to re-enter the required information 
					which you can use for the duration of your time on the page.</p>
					<p>Once you enter the required information, you’ll be presented with a web form that represents all available fields 
					in your flow. Fill out that form with the information you’d like to test, and click the <strong>Submit</strong> button. At the top of 
					the page, you’ll see the color-coded outcome of your submission, as well as <strong>a link to the test lead in LeadConduit</strong>.  Effective 
					problem solving in LeadConduit requires the ability to understand a lead event page, so we suggest clicking the test lead link to view the 
					lifecycle of your lead through your flow.</p>
					<Link className="previous-button" style={{ textDecoration: 'none' }} to="/response-parsing">Back</Link>
					<Link className="next-button" style={{ textDecoration: 'none' }} to="/testing-tool">Next</Link>
				</div>
			</div>
		);
	}
}

export default TestingBasics;