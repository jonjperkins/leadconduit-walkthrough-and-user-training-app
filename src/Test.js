import React, { Component } from 'react';
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
	}
	render() {
		return(
			<div>
				<div className="content-header">
					<h1>Test Your Flow</h1>
				</div>
				<div className="content-body">
					<div className="outer">
						<div className="form-style-6">
							<form action={this.state.posting_url} method="POST">
								<div id="red"><strong>Posting URL:</strong></div>
								<input name="postingUrl" className="input" type="text" placeholder="Paste your Posting URL here!" required onChange={this.handleUpdatePostingUrl}></input>
								<hr />
								First Name:
								<input name="first_name" className="input" type="text" onChange={this.handleUpdateFirstName}></input>
								Last Name: 
								<input name="l_name" className="input" type="text" onChange={this.handleUpdateLastName}></input>
								Email: 
								<input name="email" className="input" type="text" onChange={this.handleUpdateEmail}></input>
								Phone Number:
								<input name="phone_1" className="input" type="number" onChange={this.handleUpdatePhone}></input>
								Age:
								<input name="age" className="input" type="number" onChange={this.handleUpdateAge}></input>
								Favorite Sports Team:
								<input name="sports_team" className="input" type="text" onChange={this.handleUpdateSportsTeam}></input>
							</form>
							<button onClick={this.handleSubmit} className="submit-button button disable">Submit</button>
							<hr />
							<div className="lc_response">Response from LeadConduit:</div>
								<div id="response_box">
									<div className={this.state.response_styling}>{this.state.response_message}</div>
								</div><br/>
								{ this.state.leadconduit_event_id.length > 0 && 
									<div> Click here to see this lead in LeadConduit:<a href={ `https://next.leadconduit.com/events/${this.state.leadconduit_event_id}` } target="_blank">My Lead</a></div>	
								}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Test;