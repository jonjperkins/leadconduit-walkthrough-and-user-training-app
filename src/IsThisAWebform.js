import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

class IsThisAWebform extends Component {
	constructor() {
		super();
		this.state = {
			nonWebformDescription: false,
			webformDescription: false
		}
	}
	// Toggling with !this.state.value won't work for hovering if mouse starts inside of the button, so the hide/show methods are explicit
	showNonWebformDescription() {
		this.setState({nonWebformDescription: true})
	}
	hideNonWebformDescription() {
		this.setState({nonWebformDescription: false})
	}
	showWebformDescription() {
		this.setState({webformDescription: true})
	}
	hideWebformDescription() {
		this.setState({webformDescription: false})
	}
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
								<button className="wizard-yes-button" style={{ textDecoration: 'none' }} onClick={this.props.handleWebformYes} onMouseEnter={this.showWebformDescription.bind(this)} onMouseLeave={this.hideWebformDescription.bind(this)}>Yes</button>
								<Link to="/IntroAndFlowCreation"><button className="wizard-no-button" style={{ textDecoration: 'none' }} onClick={this.props.handleWebformNo} onMouseEnter={this.showNonWebformDescription.bind(this)} onMouseLeave={this.hideNonWebformDescription.bind(this)}>No</button></Link>
								<button className="wizard-back-button" style={{ textDecoration: 'none' }} onClick={this.props.handleStartOver}>Back</button>
								<div>
									<p className={this.state.nonWebformDescription ? "wizard-tooltip-text" : "hidden"}>Select <strong>no</strong> if you plan to receive leads from a third party. This includes leads from partners, vendors, publishers, and other systems besides web forms.</p>
									<p className={this.state.webformDescription ? "wizard-tooltip-text" : "hidden"}>Select <strong>yes</strong> if you plan to generate leads from a web form you own and send those leads directly to LeadConduit.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default IsThisAWebform;