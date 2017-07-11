import React, { Component } from 'react';
import { Col, Row, Form, FormGroup, FormControl, ControlLabel, Button, Grid} from 'react-bootstrap';
import TestFormResponse from './TestFormResponse';
import './Test.css';
var ReactDOM = require('react-dom');


class TestingTool extends Component {
	constructor() {
		super();
		this.state = {
			posting_url: "",
			first_name: "",
			l_name: "",
			email: "",
			phone_1: "",
			age: "",
			sports_team: "",
			response_message: "",
			leadconduit_event_id: "",
			response_styling: "",
			username: "",
			api_key: "",
			field_pairs: {},
			form_submission_body: {}
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
	}
	handleFetchInputFields() {
		var request = new Request('http://localhost:8080/test-tool', {
			method: 'POST',
			headers: new Headers({
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}),
			body: JSON.stringify({ posting_url: this.state.posting_url, username: this.state.username, api_key: this.state.api_key })
		});
		fetch(request)
		.then((response) => {
			response.text().then(text => {
				var stringified_fields_object = text.split(',');
				var field_pairs = JSON.parse(stringified_fields_object)
				console.log(field_pairs);
				this.setState({ field_pairs: field_pairs})
				if (field_pairs.length === 0) {
					this.setState({error_message: "The URL you submitted did not return any fields. Please check your URL and try again."})
					return false;
				}
			})
		});
	}
	handleUpdatePostingUrl(event) {
		this.setState({ posting_url: event.target.value });
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
	createFormSubmissionBody() {
		var dynamic_fields = ReactDOM.findDOMNode(this.form)
		console.log(dynamic_fields.value);
		console.log(dynamic_fields.length);
		var form_submission_body = {}
		for (var i = 0; i < dynamic_fields.length; i++) {
			var name = dynamic_fields[i].name;
			var value = dynamic_fields[i].value;
			console.log("name: " + name + " , " + "value: " + value);
			if (value === undefined) {
				form_submission_body[name] = ''
			}
			else {
			form_submission_body[name] = value
			}	
			console.log(form_submission_body)
		}
		/*const dynamic_form = this.form;
		console.log(dynamic_form);
		var form_data = {};
		for (var i = 0; i < dynamic_form.length; i++) {
			console.log(dynamic_form[i].name)
			form_data[dynamic_form[i].name] = [dynamic_form[i].value]
		}
		console.log(form_data);
		this.setState({ form_submission_body: form_data});*/
	
	
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
					this.setState({response_message: "Oops. Something went wrong. Please make sure you\'re pasting your LeadConduit flow's Posting Url in its entirety.", response_styling: "bad_lead"})
				}
			});
			window.scrollTo(0, 0)
		}
	render() {
		return(
			<div className="content-body">	
					<div className="outer-results">	
						<TestFormResponse 
							response_message={this.state.response_message} 
							response_styling={this.state.response_styling}	
							leadconduit_event_id={this.state.leadconduit_event_id} />
					</div>
					<div className="outer margin-booster">
						<div className="inner">
						<Form>
							<FormGroup>
								<div>
								Username:
								<FormControl name="username" className="input" type="text" placeholder="The email address associated with your LeadConduit account." required onChange={this.handleUpdateUsername}></FormControl>
								API Key:
								<FormControl name="api_key" className="input" type="text" placeholder="Your API key." required onChange={this.handleUpdateAPIKey}></FormControl>
								<h6>Visit <a href="https://sso.activeprospect.com/account" target="_blank">sso.activeprospect.com/account</a> and click the <strong>Account Settings</strong> button in the upper right corner of the page to find your API key.</h6>
								<div id="red"><strong>Posting URL:</strong></div>
								<FormControl name="postingUrl" className="input" type="text" placeholder="The posting URL of the flow you want to test." required onChange={this.handleUpdatePostingUrl}></FormControl>
								<Button bsStyle="default" bsSize="medium" onClick={this.handleFetchInputFields}>Grab Input Fields</Button>
								</div>
								<h6>Find the Posting URL in your <a href="https://support.activeprospect.com/hc/en-us/articles/115002225566-Finding-and-Using-Posting-Instructions" target="_blank">posting instructions</a>.</h6>
								<hr />
							<br />
							</FormGroup>
						</Form>
						</div>	
					</div>
					<form ref={(form) => this.form = form}>
						<div className="outer-results">
							<div className="response">
							{Object.entries(this.state.field_pairs).map(([key, value]) => {
									
									return 	<FormGroup key={key}>
												<ControlLabel>{key}</ControlLabel>
												<FormControl name={value} className="input"></FormControl>	
											</FormGroup>
													
							})}
							</div>
						</div>
					</form>
					<Button bsStyle="Primary" bsSize="large" onClick={this.createFormSubmissionBody.bind(this)} />
				
			</div>
		);
	}
}

export default TestingTool;