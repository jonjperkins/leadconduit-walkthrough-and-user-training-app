import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IconButton from './IconButton';
import ReactTooltip from 'react-tooltip';

class ResponseParsing extends Component {
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
								<a data-tip="Outbound Field Mapping"><IconButton class_name="arrow" to="/outbound-field-mapping" name="angle-left" /></a>
								<ReactTooltip place="bottom" type="dark" effect="float"/>
							</div>
							<div className="forward-arrow">
								<a data-tip="Testing Basics"><IconButton class_name="arrow" to="/testing-basics" name="angle-right" /></a>
								<ReactTooltip place="bottom" type="dark" effect="float"/>
							</div>
						</div>
					</div>
					<h1 className="title">Response Parsing</h1>
					<p> The purpose of response parsing is to equip your flow to determine whether or not a lead 
					made it safely to its destination(s). Sending the lead is one thing, but making sure the 
					delivery was successful is another. LeadConduit gives you the power to quickly and easily 
					understand which leads were successful and which were not once you take the necessary steps 
					to set this up.</p>
					<p>This section of the guide is perhaps the most technical, but for many ever lead delivery 
					destination it’s absolutely critical. The good news is if you’re using a delivery integration 
					to deliver your leads - the work has already been done for you! Standard and rich integrations 
					already have response parsing implemented on the backend, so if you’ve followed along with this 
					guide and setup the appropriate filters for those deliveries - you’re good to go.</p>

					<h2>Integrated Deliveries</h2>
					<p>For integrated deliveries, you simply need to set up a filter after the delivery step to catch 
					any leads that weren’t successful. This will help you report on these leads later on. Select the 
					<strong> MailChimp Outcome</strong> field from the flow fields dropdown menu on the far left input 
					box. Set the operator to <strong>is not equal to</strong>, and choose <strong>success</strong> in 
					the rightmost input box. Finally, select the <strong>MailChimp Reason</strong> field value as the 
					message LeadConduit will respond with if the filter catches any failures, errors, or skips - any thing that's not a success.</p>
					<img className="img-background" src={require('../images/velocifyfilter.png')} alt="Velocify Filter 2" />

					<h2>Custom Deliveries</h2>
					<p>Our knowledge base has a superb article on <a href="https://support.activeprospect.com/hc/en-us/articles/217517686-LeadConduit-Response-Parsing" target="_blank">response parsing</a>.
					It’s worth checking out before you get started here.</p>
					<p>Whenever you send information to a destination, the server (which is basically just the place that 
					houses all the info we're sending) will return a response to your LeadConduit flow. The server sends 
					status codes (which we'll ignore for now), but it also sends messages that are human readable like 
					'Success' or 'Accepted'. LeadConduit can search for these words to determine whether or not the lead 
					was successfully sent and accepted.</p>
					<p>You can set up response parsing in your flow by expanding the delivery step you’re interested in 
					setting up. Click the down-arrow button on the recipient box. Scroll down and select <strong>Outcome Search Term</strong>. 
					This is where we configure what LeadConduit should look for to determine whether or not a lead was 
					successfully delivered. </p>
					<p>When you’re sending data to a destination, most organizations will provide you with posting instructions 
					that include a description of what a successful or unsuccessful response will look like.</p>
					<p>The mock destination from the previous section sends a message in the response body that simply 
					says <strong>“Success”: true</strong> for successfully delivered leads. This poses a little problem for 
					us. We can’t just tell LeadConduit to look for <strong>Success</strong> because that would catch 
					responses like <strong>“Success”: false</strong> which isn’t a successful delivery at all. We 
					probably shouldn’t just search for true either, because true by itself has no context.</p>
					<p><strong>Note</strong>:When you set your outcome search term, it searches the entire body of the 
					response to see if what you’ve chosen is anywhere in the body of the response message.</p>
					<p>For this example, set your Outcome Search Term to look for: <strong>“Success”: true</strong>. If LeadConduit 
					sees this in the response (word for word and letter for letter - case sensitive), we’ll know the 
					lead was delivered successfully.</p>
					<img className="img-background" src={require('../images/responseparsing.png')} alt="Response Parsing" />
					<p>Once the parsing is configured, LeadConduit will look for this message in each attempted lead delivery. 
					<em>If and only if</em> <strong>“Success”: true</strong> is found anywhere in the response message, LeadConduit 
					will consider the <strong>delivery outcome</strong> to be a <strong>Success</strong>.</p>
					<p>The final configuration involves setting up a filter to catch any leads that are not marked as a success.</p>
					<img className="img-background" src={require('../images/customdeliveryfilter.png')} alt="Custom Delivery Filter 2"/>
					<p>With the response parsing and companion filter in place, LeadConduit now knows how to detect and fail leads 
					that are not successfully delivered to your custom destination.</p>
					<p><strong>Note</strong>: You’ll want to take another look at this article so that you can also configure 
					your response parsing to capture the text of any failure or error messages.</p>
					<Link className="previous-button" style={{ textDecoration: 'none' }} to="/outbound-field-mapping">Back</Link>
					<Link className="next-button" style={{ textDecoration: 'none' }} to="/testing-basics">Next</Link>
				</div>
			</div>
		);
	}
}

export default ResponseParsing;