import React, { Component } from 'react';
import './ChapterStyles.css';
import { Link } from 'react-router-dom';

class Chapter5 extends Component {
	componentDidMount () {
  		window.scrollTo(0, 0)
	}
	render() {
		return(
			<div className="ancestor">
				<div className="chapter-content-body">
					<h1 className="title">Fields and Form Parameters</h1>
					<p> Configuring your flow fields to collect the parameters sent from your 
					web form to LeadConduit requires you to be exact.</p>
	 				<p>Remember the parameters our web form will send to LeadConduit:</p>
	 				1. first_name<br/>
					2. l_name<br/>
					3. email<br/>
					4. phone_1<br/>
					5. age<br/>
					6. sports_team<br/><br/>
					<p>In LeadConduit, it’s important to understand what the Name and ID columns mean. </p>
					<img src={require('../images/ids_and_labels.png')} />	
					<p>The colored items in the Name column represents the values associated with each parameter sent to us 
					from our web form. The values attached to these field names will vary based on the data received 
					(e.g. First Name will always have a different value attached, based on the first name of the user).  
					You can think of these Names as the capsules that contain information specific to each lead. We’ll use these 
					Name fields later on when we want to send our data out to be <strong>enhanced</strong> and <strong>delivered</strong>.</p>
					<p>The ID column tells us what parameters LeadConduit is looking for. These IDs need to match up with what our form will be sending us.</p>
					<p>Let’s compare our form parameters to the flow fields ID column:</p>
					<img src={require('../images/field_param_compare.png')} />
					<p>Looking at the ID column above, we can see that 'sports_team_apis' doesn't match up with the 'sports_team' field name our source will send us. 
					Nor does 'last_name' match up with 'l_name'.</p>
					<p>There are two ways to fix this mismatch:</p>
					<p><strong>1) Change the form.</strong> If the form input name changed from 'sports_team' to 'sports_team_apis', that name would match up perfectly 
					with our field ID. The same goes for changing 'l_name' to 'last_name' on the form.</p>
					<p><strong>2)</strong> If we don't have access to the web forms sending us data, or we simply can not/do not want to change the form, we can perform what's 
					called 'inbound field mapping' for a source in our flow.</p>
					<p>For the purposes of this tutorial, we'll use inbound mapping to fix our problem. But before we can do that, we need to set up our lead sources.</p>
					<Link className="previous-button" style={{ textDecoration: 'none' }} to="/chapter4">Back</Link>
					<Link className="next-button" style={{ textDecoration: 'none' }} to="/chapter6">Next</Link>
				</div>
			</div>
		);
	}
}

export default Chapter5;