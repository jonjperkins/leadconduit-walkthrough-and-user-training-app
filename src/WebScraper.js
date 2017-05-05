import React, { Component } from 'react';
import './Test.css';

class WebScraper extends Component {
	constructor() {
		super();
		this.state = {
			posting_url: "",
			response_styling: "",
			response: ""
		}
		this.handleUpdatePostingUrl = this.handleUpdatePostingUrl.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleUpdatePostingUrl(event) {
		this.setState({ posting_url: event.target.value });
	}
	handleSubmit(data){
		var request = new Request(this.state.posting_url, {
			method: 'GET',
			headers: new Headers({
				'Accept': 'text/html',
			})
		});
		fetch(request)
		.then((response) => {
			response.text().then(text => {
				this.setState({ response: text })
				console.log(text);
				console.log("hello");
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
							<form action={this.state.posting_url} method="POST">
								<div id="red"><strong>Posting URL:</strong></div>
								<input name="postingUrl" className="input" type="text" placeholder="Paste your Posting URL here!" required onChange={this.handleUpdatePostingUrl}></input>
							</form>
							<button onClick={this.handleSubmit} className="submit-button button disable">Submit</button>
						<div>{this.state.response}</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default WebScraper;