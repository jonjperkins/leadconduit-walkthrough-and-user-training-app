import React, { Component } from 'react';
import { Col, Row, Form, FormGroup, FormControl, Button, Grid} from 'react-bootstrap';
import './Test.css';

class Test extends Component {
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
			response_styling: ""
		}
		this.handleUpdatePostingUrl = this.handleUpdatePostingUrl.bind(this);
		this.handleUpdateFirstName = this.handleUpdateFirstName.bind(this);
		this.handleUpdateLastName = this.handleUpdateLastName.bind(this);
		this.handleUpdateEmail = this.handleUpdateEmail.bind(this);
		this.handleUpdatePhone = this.handleUpdatePhone.bind(this);
		this.handleUpdateAge = this.handleUpdateAge.bind(this);
		this.handleUpdateSportsTeam = this.handleUpdateSportsTeam.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
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
	handleSubmit(data){
		var request = new Request(this.state.posting_url, {
			method: 'POST', 
			headers: new Headers({
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			}),
			body: JSON.stringify({
				first_name: this.state.first_name,
				l_name: this.state.l_name,
				email: this.state.email,
				phone_1: this.state.phone_1,
				age: this.state.age,
				sports_team: this.state.sports_team
			})
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
			if (response.status >= 400) {
				response.json().then(json => {
				this.setState({ response: "Error" })
				})
			}
		});
		window.scrollTo(0, 0)
	}
	render() {
		return(
			<div className="content-body">	
					<div className="outer-results">	
						<div className="response">Response from LeadConduit:
							{ this.state.response_message.length > 0 && 
								<div className={this.state.response_styling}>
									{ this.state.response_styling === 'bad_lead' 
										? <div className="outcome"><span className="fail_text"><span id='outcome'>Failure</span>: {this.state.response_message}</span></div>
										: <div className="outcome"><span id='outcome'>Success</span></div>
									}
								</div>
							}
							<div>
								{ this.state.leadconduit_event_id.length > 0 && 
									<div className="lc_link"> Click here to see this lead in LeadConduit: <a href={ `https://next.leadconduit.com/events/${this.state.leadconduit_event_id}` } target="_blank"><span id={this.state.response_styling}>My Lead</span></a></div>	
								}
							</div>
						</div>	
					</div>
					<div className="outer">
						<div className="inner">
						<Form action={this.state.posting_url} method='POST'>
							<FormGroup>
							
								<div id="red"><strong>Posting URL:</strong></div>
								<FormControl name="postingUrl" className="input" type="text" autoFocus placeholder="Paste your Posting URL here!" required onChange={this.handleUpdatePostingUrl}></FormControl>
								<h6>Find the Posting URL in your <a href="https://support.activeprospect.com/hc/en-us/articles/115002225566-Finding-and-Using-Posting-Instructions" target="_blank">posting instructions</a>.</h6>
								<hr />
								First Name:
								<FormControl name="first_name" className="input" type="text" onChange={this.handleUpdateFirstName}></FormControl>
								Last Name: 
								<FormControl name="l_name" className="input" type="text" onChange={this.handleUpdateLastName}></FormControl>
								Email: 
								<FormControl name="email" className="input" type="text" onChange={this.handleUpdateEmail}></FormControl>
								Phone Number:
								<FormControl name="phone_1" className="input" type="number" onChange={this.handleUpdatePhone}></FormControl>
								Age:
								<FormControl name="age" className="input" type="number" onChange={this.handleUpdateAge}></FormControl>
								Favorite Sports Team:
								<FormControl name="sports_team" className="input" type="text" onChange={this.handleUpdateSportsTeam}></FormControl>
							<br />
							<Button bsStyle="primary center-block" bsSize="large" onClick={this.handleSubmit} disabled={!this.state.posting_url}>Submit</Button>
							</FormGroup>
						</Form>
						</div>	
					</div>
				
			</div>
		);
	}
}

export default Test;