import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class IsThisAWebform extends Component {
	render() {
		return(
			<div className="ancestor">
				<div className="chapter-content-body">
					<div className="wizard-outer">
						<div className="wizard-inner">
							<div className="wizard-content">
								<h1 className="wizard-spacer">Welcome to the LeadConduit Getting Started Guide.</h1>
								<h1>Lead Source.</h1>
								<h4>Is the source of your leads a <strong>webform</strong>?</h4>
								<button className="wizard-yes-button" style={{ textDecoration: 'none' }} onClick={this.props.handleWebformYes}>Yes</button>
								<Link to="/IntroAndFlowCreation"><button className="wizard-no-button" style={{ textDecoration: 'none' }} onClick={this.props.handleWebformNo}>No</button></Link>
								<button className="wizard-back-button" style={{ textDecoration: 'none' }} onClick={this.props.handleStartOver}>Back</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default IsThisAWebform;