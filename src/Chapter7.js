import React, { Component } from 'react';
import './ChapterStyles.css';
import { Link } from 'react-router-dom';

class Chapter7 extends Component {
	componentDidMount () {
  		window.scrollTo(0, 0)
	}
	render() {
		return(
			<div className="ancestor">
				<div className="chapter-content-body">
					<h1 className="title">Inbound Field Mapping</h1>
					<p>In order to fix the field mismatch problem, we'll need to create two inbound field mappings. As we mentioned before, 
					we know our source, 'My Example Source', will be sending values for last name and sports team via these parameter names: 
					'l_name' and 'sports_team'. If we don't map the field IDs in our flow to accept these parameter names, we'll never be able 
					to retrieve the associated values because our flow will be looking for the wrong parameter. Here's a visualization of how 
					things currently stand between our web form parameters and our flow fields:</p>
					<img src={require('../images/fieldcomparison.png')} />
					<p>You can see that our flow is able to collect the values for 'first_name', 'age', ‘email’, and ‘phone_1’ just fine, but 
					our flow can't collect the value for 'l_name' because it's expecting 'last_name', nor can our flow collect the value for 
					'sports_team' because it's expecting 'sports_team_apis'. </p>
					<p>When we create inbound field mappings, we're basically saying, "Ok, so I know the field names are different, but if the 
					web form sends my flow 'l_name', I want my flow to consider it to be 'last_name'." We accomplish this with 
					<a href="https://support.activeprospect.com/hc/en-us/articles/209564466-LeadConduit-Inbound-Field-Mapping" target="_blank"> inbound mappings</a>.</p>
					<p>On your flow's 'Sources' tab, find our newly created source. To the right, you will see a clickable link that says 'Add Mappings'. 
					Click that link.</p>
					<img src={require('../images/addnewmappings.png')} />
					<p>A screen will pop up where you can add the flow field name you'd like to match up with the source field name:</p>
					<img src={require('../images/mappingexplanation.png')} />
					<p>Now let's go ahead and connect the dots between the web form and our flow for these two fields.</p>
					<img src={require('../images/addmappings.gif')} />
					<p>The flow field box includes a drop-down menu where you can select from all of the available fields in your LeadConduit flow. 
					This is a helpful way to remember which box refers to your flow fields and which box refers to the parameter you're trying to map. </p>
					<p><strong>* PRO-TIP:</strong> Make sure you press 'Enter' or click the 'Insert [field name] as a source field' selection. You'll know you've done this correctly if the field name you've chosen gets surrounded by color. <strong>*</strong></p>
					<Link className="previous-button" style={{ textDecoration: 'none' }} to="/chapter6">Back</Link>
					<Link className="next-button" style={{ textDecoration: 'none' }} to="/chapter8">Next</Link>
				</div>
			</div>
		);
	}
}

export default Chapter7;