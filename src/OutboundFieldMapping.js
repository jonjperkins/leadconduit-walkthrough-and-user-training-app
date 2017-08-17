import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IconButton from './IconButton';
import ReactTooltip from 'react-tooltip';

class OutboundFieldMapping extends Component {
	constructor() {
		super();
		this.state = {
			gifShowing: true
		}
	}
	resetGif() {
		this.setState({gifShowing: !this.state.gifShowing})
		console.log(this.state.gifShowing);
	}
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
								<p data-tip="Lead Delivery"><IconButton class_name="arrow" to="/lead-delivery" name="angle-left" /></p>
								<ReactTooltip place="bottom" type="dark" effect="float"/>
							</div>
							<div className="forward-arrow">
								<p data-tip="Response Parsing"><IconButton class_name="arrow" to="/response-parsing" name="angle-right" /></p>
								<ReactTooltip place="bottom" type="dark" effect="float"/>
							</div>
						</div>
					</div>
					<h1 className="title">Outbound Field Mapping</h1>
					<p>Outbound field mapping is nearly the same process as the inbound mapping discussed earlier 
					in this guide. You’re configuring your flow to communicate effectively with an outside party. 
					However, it differs in a couple significant ways.</p>
					<p>Instead of mapping fields so that your flow can accept parameter values from your lead partner, 
					outbound mapping is concerned with ensuring you’re able to send fields from your flow to a destination 
					successfully. If a destination expects to receive a value in a field called <strong>fname</strong>, but you’re sending 
					that value in a parameter called <strong>first_name</strong>, that lead will not be delivered successfully because there’s 
					essentially a breakdown in expectations and communication. <strong>Also</strong>, if a field isn’t mapped for outbound 
					delivery (whether automatically or manually) it won’t be sent from your flow at all.</p>
					<p> LeadConduit, outbound field mapping is not always required to send your data successfully. Depending on the 
					type of delivery integration you’re using, you may not need to map any values at all. For example, if your 
					lead partner sends you data for <strong>First Name</strong> along with an email address, the MailChimp step will automatically 
					send the value for First Name as long as you’re using the LeadConduit standard field for <strong>First Name</strong>. </p>
					<p>How do you know which fields are automatically passed along and which ones aren’t? You’ll need to visit 
					our <a href="http://docs.leadconduit.com/integrations" target="_blank">integration docs</a> and find the relevant destination. 
					Not sure how to read these docs? Visit <a href="https://support.activeprospect.com/hc/en-us/articles/205133075-Integrations-Associated-Fields" target="_blank">this</a> knowledge 
					base article for an excellent explanation of our integrations and associated fields.</p>
					<p>Successfully configuring your lead delivery requires that you understand which fields you’re collecting are being 
					delivered automatically for you, and which you need to explicitly map.</p>
					<h2>Automatically Mapped Fields</h2>
					<p>As mentioned in the paragraphs above, you’ll need to review the <a href="http://docs.leadconduit.com/integrations" target="_blank">integration docs</a> 
					and <a href="https://support.activeprospect.com/hc/en-us/articles/205133075-Integrations-Associated-Fields" target="_blank">this</a> article to 
					understand which fields are automatically mapped, and to ensure that you’re using standard fields to facilitate this process.</p> 
					
					<h2>Manually Mapped Fields</h2>
					<p>Manual mapping is necessary when the integration you’re using does not automatically map fields for you, or you’re trying 
					to send a LeadConduit <strong>custom field</strong> to a destination. In either of these situations, outbound field mapping is crucial for 
					delivering data successfully. Below, we’ll discuss a few scenarios where outbound field mapping is necessary to send 
					the correct data.</p>
					
					<h3>Custom Fields</h3>
					<p><strong>Scenario</strong>: The integration you’re using sends the LeadConduit standard field <strong>First Name</strong> (id of first_name), but
					you’re using a custom field with an id of <strong>fname</strong>.</p>
					<p>Since you’re using a custom field, you’ll need to manually map the value you want to send. Start by clicking 
					on the gray header of the delivery step you want to map. Click the <strong>Edit Field Mappings</strong> button. 
					Find the custom field value you want to send to the destination and correctly insert it into the left-side box 
					of the mapping. A correct insertion is signified by a colored box surrounding your field. This often requires 
					you to press enter or click on the field name from the dropdown list.</p>
					<p>Next, select the box or drop down arrow on the right-side. Find the integration field name you want to map this 
					value to, and select it. </p>
					<p data-tip="Click to restart"><img onClick={this.resetGif.bind(this)} className="gif-background" src={this.state.gifShowing ? require('../images/customfieldintegration.gif') : require('../images/customfieldintegrationfalse.gif')} alt="Custom Field Integration" /></p>
					<ReactTooltip place="bottom" type="dark" effect="float"/>
					<h3>Custom Input Variables</h3>
					<p><strong>Scenario</strong>: You would like to utilize one of the custom input variables in the integration.</p>
					<p><strong>Custom input variables</strong> represent fields at the delivery destination that you may send data 
					to if you like. These fields already exist in the destination system, but they aren’t LeadConduit standard fields, 
					so you’ll need to map a LeadConduit field (custom or standard) to this value.</p>
					<p>For example, if your lead partner is sending you a value that want to pass along to MailChimp and use as a MailChimp status 
					(e.g. subscribed, unsubscribed), you’ll need to consult the <a href="http://docs.leadconduit.com/integrations" target="_blank">integration docs </a> 
					first to confirm that the integration can accept this value. Then, you can map the value just like you did in the section above. 
					In this example, your lead partner is sending a value for <strong>status</strong> that you want to send to the MailChimp status field.</p>
					<img className="img-background" src={require('../images/custominputvariables.png')} alt="Custom Input Vars" />
					
					<h3>Hardcoded Values</h3>
					<p><strong>Scenario</strong>: You’re using an outbound delivery integration and you’d like to hardcode a value in place of using 
					one of the integrated standard fields. </p>
					<p><strong>Hardcoding</strong> a value is a technique that allows you to send the same value every time, for each lead. For 
					example, if the integration you’re using automatically sends the value for a field named <strong>company</strong>, but you’d like to 
					make sure that value is always <strong>Acme</strong> instead of passing along whatever value your lead partner sends, you need 
					to hardcode this Acme value in your outbound mapping.</p>
					<p>When hardcoding a value, you want to make sure that you are <strong>not</strong> seeing the colored background that you normally 
					want to see. The colored background really represents the value associated with that field which we don’t want to 
					pass along in this scenario. So a successful mapping looks like this:</p>
					<img className="img-background" src={require('../images/hardcodedintegrationvalue.png')} alt="Hardcode Values" />
					
					<h3>System Variables and Appended Data</h3>
					<p>System variables are a type of data that only exist once a lead enters into a LeadConduit flow. The 
					best example of this is a field named <strong>Submission Timestamp</strong>. This field represents the 
					moment when the lead was first posted to the flow. This sort of value must be mapped manually.</p>
					<p>Appended Data must also be mapped manually.</p>
					
					<h2>Conclusion</h2>
					<p>There are a variety of situations that require manually mapping the fields for the destination where you want to 
					send your leads. Get more familiar with <a href="https://support.activeprospect.com/hc/en-us/articles/216009923-LeadConduit-Outbound-Field-Mapping" target="_blank">outbound field mapping </a>
					by taking a look at the linked article in our knowledge base.</p>
					<Link className="previous-button" style={{ textDecoration: 'none' }} to="/lead-delivery">Back</Link>
					<Link className="next-button" style={{ textDecoration: 'none' }} to="/response-parsing">Next</Link>			
				</div>
			</div>
		);
	}
}

export default OutboundFieldMapping;
