import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class InboundMappingPartners extends Component {
	componentDidMount () {
  		window.scrollTo(0, 0)
	}
	render() {
		return(
			<div className="ancestor">
				<div className="chapter-content-body">
					<h1 className="title">Inbound Mappings</h1>
					<p>When receiving leads from partners, you may run into a situation where the field you’re collecting 
					will be named differently in LeadConduit than how the vendor will actually send the parameter. A 
					prime example of this is a situation where (for whatever reason) your lead partner can only send a 
					lead’s email address in a parameter named <strong>email_address</strong>. If you used the standard field in LeadConduit 
					(which you should have!), then LeadConduit will be looking for an <strong>email</strong> parameter from your partner(s) 
					instead of <strong>email_address</strong>.</p>
	 				<p>This won’t break anything, but if you want to collect the email address associated with the <strong>email_address</strong> parameter 
	 				your partner is sending, you’ll need to perform inbound field mapping.</p>
					<img id="webform-example" src={require('../images/mappingdiagram.png')} />
					<p>To configure your inbound field mapping, navigate to your flow's <strong>Sources</strong> tab and find the source that needs this field mapping. 
					To the right, you will see a clickable link that says 'Add Mappings'. Click that link. You'll be presented with a screen that looks like this:</p>
					<img id="webform-example" src={require('../images/inboundmappingmodal.png')} />
					<p><strong>First</strong>, select a LeadConduit standard field from the list on the left. Here's a list of all the <a href="https://next.leadconduit.com/fields" target="_blank">Standard Fields in LeadConduit </a>
					 so you know what's available. If the field is not available in the list on the left, you need to add it to your flow first.</p>
					<p><strong>Next</strong>, type in the field name from the lead vendor into the right side, then press enter/return OR select the + button below with the 
					text "Insert <em>field_name</em> as source field" to complete the mapping.</p>
					<img id="webform-example" src={require('../images/addfieldmapping.gif')} />
					<p><strong style={{color: "red"}}>Warning!</strong> If you don't press enter/return OR select the + button below and just leave in the text, 
					LeadConduit will interpret that as text/string to be sent in every flow submission.</p>
					<img id="webform-example" src={require('../images/wronginbound.png')} />
					<img id="webform-example" src={require('../images/correctinbound.png')} />
					<p>Learn more about <a href="https://support.activeprospect.com/hc/en-us/articles/209564466-LeadConduit-Inbound-Field-Mapping">inbound field mapping </a>in our knowledge base.</p>
					<Link className="previous-button" style={{ textDecoration: 'none' }} to="/signingin">Back</Link>
					<Link className="next-button" style={{ textDecoration: 'none' }} to="/chapter2">Next</Link>			
				</div>
			</div>
		);
	}
}

export default InboundMappingPartners;
