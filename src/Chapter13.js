import React, { Component } from 'react';
import './ChapterStyles.css';
import { Link } from 'react-router-dom';

class Chapter13 extends Component {
	componentDidMount () {
  		window.scrollTo(0, 0)
	}
	render() {
		return(
			<div className="ancestor">
				<div className="chapter-content-body">
					<h1 className="title">Lead Delivery</h1>
					<p>Now that your flow has filtered and enhanced your leads, it's time to deliver them somewhere! 
					In this tutorial, we'll deliver our leads to:</p>
					<ul>
						<li>An email address</li>
						<li>A URL endpoint</li>
					</ul>
					<p>There are many delivery options in LeadConduit; <a href="https://support.activeprospect.com/hc/en-us/categories/200350369-LeadConduit" target="_blank">
					take a look</a> to see additional outbound integrations 
					you might use, including batch file delivery and more advanced delivery formatting options.</p>
					<br/>
					<h3>Email Delivery</h3>
					<p>Let's start out by delivering these leads to your email address. On the 'Steps' page, click the 'Add Delivery' button. 
					Scroll down and select the 'Email Delivery' option.</p>
					<img src={require('../images/email_delivery.gif')} />
					<p>Select the 'Edit Field Mappings' button and enter the email address where you'd like the leads delivered. Comma-separate multiple addresses if 
					more than one person wants to receive these leads. If you add another mapping, you'll be able to further configure your email address with things l
					ike a subject' and a 'Sender Name'. </p>
					<img src={require('../images/emailrequirements.png')} />
					<p>As long as you provide an email address, LeadConduit will send successful leads (leads not rejected and marked as failures by a filter prior to 
					the delivery step in the flow) to that address with all of the information collected during the lead’s journey through the flow.</p>
					<p><strong>*PRO-TIP:</strong> Remember to save your work! <strong>*</strong></p>
					<br/>
					<h3>Delivery to a URL endpoint</h3>
					<p>If you don't feel confident in your understanding of URLs - not to worry. All you need to know is that a URL describes where on the internet a 
					certain web resource lives. For example, https://www.google.com is where the google search bar lives. When you hear URL, you can think “web address”.</p>
					<p>For this tutorial, we'll be sending our leads to a fake URL destination. We’re sending this to a fake url destination I’ve set up because you may not 
					have anywhere to deliver your leads at this point. Once you decide where you’d like to deliver your leads (Salesforce, Velocify, etc.), you can use this 
					guide and our Knowledge Base article on deliveries to configure your delivery step.</p>
					<p>For this tutorial, here's the url we’ll be delivering to:</p>
					<br/>
					<h5><em>http://www.mocky.io/v2/5900f11b1200000317c7b71f</em></h5>
					<br/>
					<p>To get started click the 'Add a Delivery' button again. Scroll to the very bottom and create a custom delivery. Give it a name, select a type of 
					'CRM' and click 'Save and add to flow'.</p>
					<img src={require('../images/createcustomdelivery.gif')} />
					<p>Perfect! We're well on our way.</p>
					<p>Next, we'll need to select our integration. This part can be tricky if you don't have much experience with HTTP. But not to worry, there are  a finite amount 
					of ways to send data to an endpoint, and we've covered each of them in our 
					<a href="https://support.activeprospect.com/hc/en-us/sections/201013939-LeadConduit-Flows" target="_blank">LeadConduit knowledge base</a>.</p>
					<p>For this tutorial, all you need to know is that we're going to make a form POST to our fake CRM. So, we'll select that integration option. </p>
					<img src={require('../images/deliveryintegrationselection.png')} />
					<p>Next, we'll begin setting up our delivery. Click the 'Add Field Mappings' button, and this is what you should see:</p>
					<img src={require('../images/initialoutboundmapping.png')} />
					<p>Brilliant! You've already:</p>
					<ol>
						<li>Created a delivery destination, <em>and</em></li>
						<li>Told this destination where it should send your lead data</li>
					</ol>
					<p>In the paraphrased words of Bon Jovi, 'You're halfway there.'</p>
					<Link className="previous-button" style={{ textDecoration: 'none' }} to="/chapter12">Back</Link>
					<Link className="next-button" style={{ textDecoration: 'none' }} to="/chapter14">Next</Link>
				</div>
			</div>
		);
	}
}

export default Chapter13;