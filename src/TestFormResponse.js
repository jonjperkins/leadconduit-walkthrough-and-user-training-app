import React, { Component } from 'react';


class TestFormResponse extends Component {
	render() {
		return (
			<div>
				{ this.props.response_message.length > 0 && 
					<div className={this.props.response_styling}>
						{ this.props.response_styling === 'bad_lead' 
							? <div><span id='bad_outcome'>Failure</span> <div id="error_message">Reason: {this.props.response_message}</div></div>
							: <div><span id='good_outcome'>Success</span></div>
						}
					</div>
				}
				<div>
					{ this.props.leadconduit_event_id.length > 0 && 
						<div className="lc_link"> Click <a href={ `https://next.leadconduit.com/events/${this.props.leadconduit_event_id}` } target="_blank"><span id={this.props.response_styling}>here</span></a> to see this lead in LeadConduit.</div>	
					}
				</div>
			</div>
		);
	};
}

export default TestFormResponse;