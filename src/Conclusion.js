import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IconButton from './IconButton';
import ReactTooltip from 'react-tooltip';

class Conclusion extends Component {
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
								<a data-tip="Knowledge Base"><IconButton class_name="arrow" to="/knowledge-base" name="angle-left" /></a>
								<ReactTooltip place="bottom" type="dark" effect="float"/>
							</div>
						</div>
					</div>
					<h1 className="title">Conclusion</h1>
					<p>Congratulations! You completed the Getting Started Guide - impressive! But before you go, we want to make 
					sure you’re aware of the resources available to you going forward.</p>
					<h2>Support</h2>
					<ol>
						<li>Your ActiveProspect team is available to support you weekdays from 8:00 a.m. to 5:00 p.m. 
						U.S. Central Time (excluding holidays).</li>
						<li>Creating a profile for the <a href="https://support.activeprospect.com/hc/en-us">ActiveProspect Support Portal</a> is 
						simple and provides you access to all current and previous Support Requests you’ve submitted.</li>
						<li>You can also email support@activeprospect.com to start a support request. You will receive a response the same business day.</li>
					</ol>
					<br />
					<h2>Knowledge Base</h2>
					<ol>
						<li>There’s a wealth of information available to you in the <a href="https://support.activeprospect.com/hc/en-us">Knowledge Base</a>, including 
						how-to articles, general concepts, detailed questions & answers, and documented best practices. We’re continually adding to the Help 
						Center, so we encourage you to look there first.</li>
						<li>If you can’t find what you’re looking for Ask Support.</li>
					</ol>
					<br/>
					<h2>Chat</h2>
					<ol>
						<li>Access our support team during business hours using the chat app directly in LeadConduit, and 
						we’ll do our best to help you problem-solve on the go. </li>
					</ol>
					<br/>
					<h2>Status Update</h2>
					<ol>
						<li>Maintenance and downtime are posted on our <a href="http://status.activeprospect.com/">status page</a>. Be sure 
						to sign up for automatic email or text notifications.</li>
					</ol>
					<br/>
					<h2>Product Updates</h2>
					<ol>
						<li>New product features, best practices, and other tips and tricks are shared periodically. Be sure to sign 
						up at this bottom of <a href="https://activeprospect.com/">this page</a> to receive emails.</li>
					</ol>

					<Link className="previous-button" style={{ textDecoration: 'none' }} to="/knowledge-base">Back</Link>
				</div>
			</div>
		);
	}
}

export default Conclusion;