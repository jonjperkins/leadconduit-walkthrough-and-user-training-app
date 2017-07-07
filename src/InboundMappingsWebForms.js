import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class InboundMappingsWebForms extends Component {
	componentDidMount () {
  		window.scrollTo(0, 0)
	}
	render() {
		return(
			<div className="ancestor">
				<div className="chapter-content-body">
					<h1 className="title">Inbound Field Mappings</h1>
					<p>When you use the web form wizard to set up your source, you won’t need to worry about inbound 
					field mapping because LeadConduit maps your form’s fields automatically!</p>
					<p>This section will help you understand why inbound field mapping is important in case you ever 
					need to perform this sort of mapping yourself or make some adjustments in the future.</p>
					<p>When discussing fields earlier, we mentioned that your web form and LeadConduit need to be able 
					to communicate effectively. If the web form is using different input names to collect and send values 
					to your flow via HTTP parameters than the fields LeadConduit has set up in the flow, there will be a 
					breakdown in communication and your lead data will be sent, but never collected in your flow. Here’s 
					a visual representation of a hypothetical form and flow field configuration.</p>
					<img id="webform-example" src={require('../images/fieldcomparison.png')} />
					<p>The gray box represents the web form, and the orange box represents LeadConduit’s flow fields. The 
					yellow arrows represent the HTTP parameters your web form will send to your flow. The green checks 
					on the LeadConduit flow represent where the form is able to communicate successfully with your flow 
					because the form’s input name (which becomes an HTTP parameter when the user submits the form) matches 
					up EXACTLY with the field name LeadConduit is using to store the value associated with each parameter.</p>
					<p>The red X’s indicate that there is a breakdown in communication. Although the form is sending 
					values that we can understand, LeadConduit does not understand what your form is trying to send. Inbound 
					field mapping remedies this mismatch by essentially saying, ‘OK, when you see this particular web form 
					send <strong>l_name</strong>, you should consider that to be <strong>last_name</strong> (the LeadConduit 
					standard field).</p>
					<p>To configure your inbound field mapping, navigate to your flow's Sources tab and find the source 
					that needs this field mapping. To the right, you will see a clickable link that says 'Add Mappings'. Click 
					that link. </p>
					<img id="webform-example" src={require('../images/inboundmappingmodal.png')} />
					<p><strong>First</strong>, select a LeadConduit standard field from the list on the left. Here's a list of all 
					the <a href="https://next.leadconduit.com/fields">Standard Fields</a> in LeadConduit so you know 
					what's available. If the field is not available in the list on the left, you need to add it to your flow first.</p>
					<p><strong>Next</strong>, type in the field name from the lead vendor into the right side, then press enter/return OR select the + button below with the text "Insert <em>field_name</em> as source field" to complete the mapping.</p>
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

export default InboundMappingsWebForms;
