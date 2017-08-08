import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import TestFormResponse from './TestFormResponse';
import IconButton from './IconButton';
import ReactTooltip from 'react-tooltip';
var ReactDOM = require('react-dom');


class TestingTool extends Component {
	constructor() {
		super();
		this.state = {
			posting_url: "",
			response_message: "",
			leadconduit_event_id: "",
			response_styling: "",
			api_key: "",
			field_pairs: {},
			form_submission_body: '',
			step_1: true,
			step_2: false,
			posting_url_errors: '',
			errors: '',
			flow_name: ''
		}

		this.handleUpdatePostingUrl = this.handleUpdatePostingUrl.bind(this);
		this.handleUpdateFirstName = this.handleUpdateFirstName.bind(this);
		this.handleUpdateLastName = this.handleUpdateLastName.bind(this);
		this.handleUpdateEmail = this.handleUpdateEmail.bind(this);
		this.handleUpdatePhone = this.handleUpdatePhone.bind(this);
		this.handleUpdateAge = this.handleUpdateAge.bind(this);
		this.handleUpdateSportsTeam = this.handleUpdateSportsTeam.bind(this);
		this.handleUpdateUsername = this.handleUpdateUsername.bind(this); 
		this.handleUpdateAPIKey = this.handleUpdateAPIKey.bind(this);
		this.handleFetchInputFields = this.handleFetchInputFields.bind(this);
		this.handleFetchFlowName = this.handleFetchFlowName.bind(this);
	}
	componentDidMount() {
		this.handleFetchInputFields();
		this.handleFetchFlowName();
		this.setState({ posting_url: 'https://app.leadconduit.com/flows/' + this.props.match.params.flow + '/sources/' + this.props.match.params.source + '/submit' })
		this.props.vendorSource
	}
	handleFetchInputFields() {
		var request = new Request('http://leadconduit-node-server.herokuapp.com/test-tool', {
			method: 'POST',
			headers: new Headers({
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}),
			body: JSON.stringify({ posting_url: 'https://app.leadconduit.com/flows/' + this.props.match.params.flow + '/' + this.props.match.params.source, api_key: this.props.match.params.key })
		});
		fetch(request)
		.then((response) => {
			response.text().then(text => {
				var stringified_fields_object = text.split(',');
				var field_pairs = JSON.parse(stringified_fields_object)
				this.setState({ field_pairs: field_pairs})
				console.log(this.state.field_pairs.response)
				
				if (this.state.field_pairs.response === "none" ) {
					this.setState({ step_1: true, step_2: false, field_pairs: {}, errors: "Please submit a valid API key."  })
				} else {
					this.setState({ step_1: false, step_2: true })
				}
				
			});
		});
		console.log('fetch input fields has run')
		this.handleFetchFlowName();
	}
	handleFetchFlowName() {
		var request = new Request('http://leadconduit-node-server.herokuapp.com/flow-name', {
			method: 'POST',
			headers: new Headers({
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}),
			body: JSON.stringify({ posting_url: 'https://app.leadconduit.com/flows/' + this.props.match.params.flow + '/sources/' + this.props.match.params.source, api_key: this.props.match.params.key })
		});
		fetch(request)
		.then((response) => {
			response.text().then(text => {
				this.setState({ flow_name: text})
				//var flow_name = JSON.parse(stringified_fields_object)
				//.log('flow name: ' + flow_name)
				//.setState({ flow_name: flow_name})
				//console.log(this.state.flow_name)
							
			});
		});
		console.log('fetch flow name has run')
	}
	handleUpdatePostingUrl(event) {
		if (/(^https:\/\/app\.leadconduit\.com\/flows\/.*\/sources\/.*\/submit$)/.test(event.target.value)) {
			this.setState({ posting_url: event.target.value });
			this.setState({ posting_url_errors: ''});
		} else {
			this.setState({ posting_url_errors: 'Please copy and paste your posting url exactly as it appears on your posting instructions.'});
		}
	}
	handleUpdateFirstName(event) {
		this.setState({ first_name: event.target.value });
	}
	handleUpdateLastName(event) {
		this.setState({ l_name: event.target.value });
	}
	handleUpdateEmail(event) {
		this.setState({ email: event.target.value });
	}
	handleUpdatePhone(event) {
		this.setState({ phone_1: event.target.value });
	}
	handleUpdateAge(event) {
		this.setState({ age: event.target.value });
	}
	handleUpdateSportsTeam(event) {
		this.setState({ sports_team: event.target.value });
	}
	handleUpdateUsername(event) {
		this.setState({ username: event.target.value });
	}
	handleUpdateAPIKey(event) {
		this.setState({ api_key: event.target.value });
	}
	goToStep2() {
		this.setState({ step_1: false, step_2: true, step_3: false })
	}
	createFormSubmissionBody() {
		var dynamic_fields = ReactDOM.findDOMNode(this.form)
		var form_submission_body = {}
		for (var i = 0; i < dynamic_fields.length; i++) {
			var name = dynamic_fields[i].name;
			var value = dynamic_fields[i].value;
			if (value === undefined) {
				form_submission_body[name] = ''
			}
			else {
			form_submission_body[name] = value
			}	
		}
		var request = new Request(this.state.posting_url, {
			method: 'POST', 
			headers: new Headers({
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			}),
			body: JSON.stringify(form_submission_body)
		});
		fetch(request)
		.then((response) => {
			if (response.ok) {
				response.json().then(json => {
					if (json.outcome.toString() === "failure") {
						this.setState({ response_message: json.reason, response_styling: "bad_lead", leadconduit_event_id: json.lead.id })
					}
					else {
						this.setState({ response_message: json.outcome, response_styling: "good_lead", leadconduit_event_id: json.lead.id })
					}
				})
			}
			else {
				this.setState({response_message: "Oops. Something went wrong. Please make sure you're pasting your LeadConduit flow's Posting Url in its entirety.", response_styling: "bad_lead"})
			}
		});
		window.scrollTo(0, 0)
		}
	render() {
		return(
			<div className="ancestor">
				<div className="chapter-content-body">
					<div className="test-form">
						{this.state.response_message &&
							<TestFormResponse 
								response_message={this.state.response_message} 
								response_styling={this.state.response_styling}	
								leadconduit_event_id={this.state.leadconduit_event_id} />
						}
						{!this.state.response_message &&
							<div>
								<br />
								<h1 className="test-flow-header">Send a test lead.</h1>
								<h4>The response from your LeadConduit flow will appear here after you click submit below.</h4>
							</div>
						}
						<div className="outer-test-tool">
							<form className="button-margin" ref={(form) => this.form = form}>
								<div className="field-response">
									<h5 style={{color: "#f58025"}}>Flow name:</h5>
									<h3 className="test-form-sub-title"><strong>{this.state.flow_name}</strong></h3>
									<hr />
									{Object.entries(this.state.field_pairs).map(([key, value]) => {
											
											return 	<FormGroup key={key}>
														<ControlLabel>{key}</ControlLabel>
														<FormControl name={value} className="input"></FormControl>	
													</FormGroup>
															
									})}
									
								</div>
							</form>
							<Button bsStyle="primary center-block button-margin" bsSize="large" onClick={this.createFormSubmissionBody.bind(this)}>Submit</Button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default TestingTool;