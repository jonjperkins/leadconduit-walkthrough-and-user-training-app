import React, { Component } from 'react';

class Restart extends Component {
	render() {
		return(
			<div className={this.props.isSourceWizard ? 'hidden' : 'ancestor'}>
				<div className="chapter-content-body">
					<div className="wizard-outer">
						<div className="wizard-inner">
							<div className="wizard-content">
								<h1>Getting Started Wizard.</h1>
								<h4>Click the button below to reconfigure your experience.</h4>
								<button className="wizard-yes-button" style={{ textDecoration: 'none' }} onClick={this.props.handleBegin}>Start</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Restart;