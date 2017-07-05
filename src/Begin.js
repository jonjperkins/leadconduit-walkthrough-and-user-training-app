import React, { Component } from 'react';

class Begin extends Component {
	render() {
		return(
			<div className="ancestor">
				<div className="chapter-content-body">
					<div className="wizard-outer">
						<div className="wizard-inner">
							<div className="wizard-content">
								<h1>Welcome to the LeadConduit Getting Started Guide.</h1>
								<h4>We'll begin by asking one or two questions so we can customize your experience.</h4>
								<button className="wizard-yes-button" style={{ textDecoration: 'none' }} onClick={this.props.handleBegin}>Begin</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Begin;