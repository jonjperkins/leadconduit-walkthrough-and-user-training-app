import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SourcePartners extends Component {
	render() {
		return(
			<div className="ancestor">
				<div className="chapter-content-body">
					<h1 className="title">Fields</h1>
					<p>At the most basic level, sources simply represent where your leads come from. Sources typically 
					refer to a webform you own, or a partner who is generating leads and sending them into your flow.</p>
	 				<p>Setting up sources for a particular flow allows you to organize your work. Instead of all leads 
	 				coming into your flow from a single default source, setting up sources allows you to track and report 
	 				on the health and success of a particular source of leads. If a source is sending a significant number 
	 				of bad leads to your flow, you need to know that. Figuring out where the bad leads are coming from can 
	 				be a headache if you don't set up your sources properly.</p>
	 				<br/>
	 				<h2>Configure Your Source</h2>
	 				<p>If you just created your flow, you should be on the 'Fields' tab. To work with our sources, we'll 
	 				need to navigate to our 'Sources' tab.</p>
	 				<img src={require('../images/sourcetab.gif')} />
					<Link className="previous-button" style={{ textDecoration: 'none' }} to="/signingin">Back</Link>
					<Link className="next-button" style={{ textDecoration: 'none' }} to="/chapter2">Next</Link>			
				</div>
			</div>
		);
	}
}

export default SourcePartners;
