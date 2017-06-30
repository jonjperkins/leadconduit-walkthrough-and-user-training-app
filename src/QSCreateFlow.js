import React, { Component } from 'react';
import './ChapterStyles.css';
import { Link } from 'react-router-dom';

class QSCreateFlow extends Component {
	constructor() {
		super();
		this.state = {
			expand_1: false,
			expand_2: false
		}
	}
	expand1() {
		this.setState({expand_1: !this.state.expand_1})
	}
	expand2() {
		this.setState({expand_2: !this.state.expand_2})
	}
	render() {
		return(
			<div className="sizer">
				<h1>Create Your Flow</h1>
					<div className="quickstart">
						<br/>
						<ol>
							<li>Sign-in to LeadConduit.</li>
							<h5> <strong onClick={this.expand1.bind(this)} className="more-button">More</strong></h5>
								<h5 className={this.state.expand_1 ? "show" : "hide"}>To log in and launch LeadConduit, navigate to
								<a href="sso.activeprospect.com" target="_blank"> sso.activeprospect.com</a>. For more information see 
								<a href="https://support.activeprospect.com/hc/en-us/articles/115002511123-Logging-In-Launching-Products" target="_blank"> this article</a>.</h5>
							<li>Click on the ‘Flows’ tab in LeadConduit. From here, you can click ‘Edit’ 
							on an existing flow, or <strong>create a new flow</strong> by clicking the ‘New Flow’ button 
							in the upper left corner.</li>
							<h5> <strong onClick={this.expand2.bind(this)} className="more-button">More</strong></h5>
							<p className={this.state.expand_2 ? "show" : "hide"}>
								<img src={require('../images/createnewflow.gif')} />
							</p>
						</ol>
						<ul>
							<li><strong>NOTE:</strong> Flows are where you configure the order of operations for processing your leads. 
							You can use as many flows as you need. Typically you'll want to create a new flow 
							(versus edit an exist flow) whenever you need a completely different order of operations 
							to process leads.</li>
						</ul>
						<div className="quickstart-buttons-div">
							<button className="quickstart-button" style={{ textDecoration: 'none' }} onClick={this.props.increaseStepCount}>Next</button>
					</div>				
				</div>
			</div>
		);
	}
}

export default QSCreateFlow;