import React, { Component } from 'react';


class TestFormResponse extends Component {
	render() {
		return (
			<div className="response">Response from LeadConduit:
				{ this.props.response_message.length > 0 && 
					<div className={this.props.response_styling}>
						{ this.props.response_styling === 'bad_lead' 
							? <div className="outcome"><span className="fail_text"><span id='outcome'>Failure</span>: {this.props.response_message}</span></div>
							: <div className="outcome"><span id='outcome'>Success</span></div>
						}
					</div>
				}
				<div>
					{ this.props.leadconduit_event_id.length > 0 && 
						<div className="lc_link"> Click here to see this lead in LeadConduit: <a href={ `https://next.leadconduit.com/events/${this.props.leadconduit_event_id}` } target="_blank"><span id={this.props.response_styling}>My Lead</span></a></div>	
					}
				</div>
			</div>
		);
	};
}

export default TestFormResponse;