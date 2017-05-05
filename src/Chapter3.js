import React, { Component } from 'react';
import './ChapterStyles.css';

class Chapter3 extends Component {
	render() {
		return(
			<div>
				<div className="content-header">
					<h1>a. Fields</h1>
				</div>
				<div className="content-body">
					<p>Each field has a particular value (or values) associated with it. These field/value pairs are usually sent to LeadConduit looking something like this:</p>
 					<p className="highlighted"> first_name: 'John', last_name: 'Prospect', city: 'Austin'</p>
 					<p>When you're setting up fields for your flow, you're never just picking values out of thin air. These fields must match up perfectly with the fields your (or someone else's) web forms will be sending to your LeadConduit flow. </p>

				</div>
			</div>
		);
	}
}

export default Chapter3;