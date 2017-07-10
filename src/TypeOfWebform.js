import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ChapterStyles.css';

class TypeOfWebform extends Component {
	render() {
		return(
			<div className="ancestor">
				<div className="chapter-content-body">
					<div className="wizard-outer">
						<div className="wizard-inner">
							<div className="wizard-content">
								<h1 className="wizard-spacer">Welcome to the LeadConduit Getting Started Guide.</h1>
								<h1>Webform Type.</h1>
								<h4>Are you using <strong>Unbounce</strong> to host your form?</h4>
								<Link to="/IntroAndFlowCreation"><button className="wizard-yes-button" onClick={this.props.handleUnbounceUser} style={{ textDecoration: 'none' }}>Yes</button></Link>
								<Link to="/IntroAndFlowCreation"><button className="wizard-no-button" onClick={this.props.handleNonUnbounceUser}>No</button></Link>
								<button className="wizard-back-button" style={{ textDecoration: 'none' }} onClick={this.props.handleBegin}>Back</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default TypeOfWebform;