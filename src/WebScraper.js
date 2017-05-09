import React, { Component } from 'react';
import './Test.css';

class WebScraper extends Component {
	constructor() {
		super();
		this.state = {
			posting_url: "",
			response_styling: "",
			response: []
		}
		this.handleUpdatePostingUrl = this.handleUpdatePostingUrl.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleUpdatePostingUrl(event) {
		this.setState({ posting_url: event.target.value });
	}
	handleSubmit(data){
		var request = new Request('http://localhost:8080/', {
			method: 'POST',
			headers: new Headers({
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}),
			body: JSON.stringify({ get_url: this.state.posting_url})
		});
		fetch(request)
		.then((response) => {
			response.text().then(text => {
				var array_of_fields = text.split(',');
				this.setState({ response: array_of_fields })
				console.log(array_of_fields);
				console.log(typeof array_of_fields);
			})
		});
	}
	render() {
		return(
			<div>
				<div className="content-header">
					<h1>Field Finder</h1>
				</div>
				<div className="content-body">
					<div className="outer">
						<div className="form-style-6">
							<form>
								<div id="red"><strong>Posting URL:</strong></div>
								<input name="postingUrl" className="input" type="text" placeholder="Paste your Posting URL here!" required onChange={this.handleUpdatePostingUrl}></input>
							</form>
							<button onClick={this.handleSubmit} className="submit-button button disable">Submit</button>
						<div>   
							<ul>
     							{this.state.response.map(function(item, index){
       								return <li key={index}>{item}</li>
     							})}
   							</ul>
						</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default WebScraper;