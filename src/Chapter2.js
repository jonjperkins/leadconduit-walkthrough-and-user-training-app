import React, { Component } from 'react';
import './ChapterStyles.css';

class Chapter2 extends Component {
	render() {
		return(
			<div className="ancestor">
				<div className="chapter-content-body">
					<h1 className="title">Flows</h1>
					<p>A LeadConduit flow is the 'piping' between web forms, enhancements, and delivery destinations. Data from multiple web forms can be sent to a LeadConduit flow, and the flow can then filter and enhance the data before piping the desired lead information to one or more delivery destinations.</p>
					<p>LeadConduit flows give you the power to decide which data gets sent to your system and whether you'd like to enhance that data using virtually any web service available to you. As a result, LeadConduit is incredibly flexible. </p>
					<p>Once we're done with this tutorial, you'll have a template for building your own flows and the tools necessary to harness the flexibility and power of LeadConduit for your business.</p>
					<p>Now that you're excited (right?), let's dive in and start building our first flow!</p>					
				</div>
			</div>
		);
	}
}

export default Chapter2;