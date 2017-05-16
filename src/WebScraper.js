import React, { Component } from 'react';
import './Test.css';
import {score} from 'fuzzaldrin';
const Fuse = require("fuse.js");


class WebScraper extends Component {
	constructor() {
		super();
		this.state = {
			posting_url: "",
			response_styling: "",
			response: [],
			match_object: []
		}
		this.handleUpdatePostingUrl = this.handleUpdatePostingUrl.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleFuzzFilter = this.handleFuzzFilter.bind(this);
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
	handleFuzzFilter(){
		var candidates = ['first_name', 'last_name', 'email', 'company.name', 'postal_code', 'account', 'account_type', 'pass', 'phone_1', 'phone_2', 'tos', 'browser', 'location', 'type', 'gender', 'address_1', 'address_2']
		var original_state_array = this.state.response
		var phone_count = []
		var address_count = []

		var initial_match_array = original_state_array.map(function(item) {
			console.log('phone count: ' + phone_count.length)
			item = item.toLowerCase()
			if ((item === "fname") || (item === "firstname") || ( item === 'first.name') || (item === 'first-name') || (item === 'first_name')) {
				return item = 'first_name'
			}
			if ((item === 'lname') || (item === 'lastname') || (item === 'last.name') || (item === 'last-name')) {
				return item = 'last_name'
			}
			if ((item === 'email') || (item === 'emailaddress') || (item === 'email.address') || (item === 'email_address')) {
				return item = 'email'
			}
			if ((item === 'zip') || (item === 'zipcode') || (item === 'zip_code') || (item === 'zip.code') || (item === 'zip-code') || (item === 'postcode') || (item === 'postalcode') || (item === 'postal.code')) {
				return item = 'postal_code'
			}
			if (/(zip|zipcode|postalcode|postcode)/.test(item)) {
    			return item = 'postal_code'
    		}
    		if (/(phone)/.test(item)) {
    			if (phone_count.length < 1) {
    				phone_count.push('phone_1')
    				return item = 'phone_1'
    			} else if (phone_count.length < 2) {
    				phone_count.push('phone_2')
    				return item = 'phone_2'
    			} 
    			return item = undefined
    			
    		}
    		if (/(gender)/.test(item)) {
    			return item = 'gender'

    		}

			if ((item === 'apt') || (item === 'apartment') || (item === 'apt.') || (item === 'ste') || (item === 'suite') || (item === 'ste.') && address_count.length > 1) {
				address_count.push('address_2')
				return item = 'address 2'
			} 
    		
    		if (/(address)/.test(item)) {
    			if (address_count.length < 1) {
    				address_count.push('address_1')
    				return item = 'address_1'
    			} else if (address_count.length < 2 ) {
    				address_count.push('address_2')
    				return item = 'address_2'
    			} 
    			return item = undefined
    			
    		}
    		// if (address_count.length > 1) {
    		// 	if ((item === 'apt') || (item === 'apartment') || (item === 'apt.') || (item === 'ste') || (item === 'suite') || (item === 'ste.')) {
    		// 		address_count.push('address_2')
    		// 		return item = 'address 2'
    		// 	} 
    		// }

    		return undefined
			
		});
		console.log('initial match array: ' + initial_match_array);

		// var results = initial_match_array.map(function(item) {
		// 	var candidates = ['first_name', 'last_name', 'email', 'company.name', 'postal_code', 'account', 'account_type', 'pass', 'phone_1', 'phone_2', 'tos', 'browser', 'location', 'type']
		// 	var fuzzed = score(candidates, item);
		// 	console.log(fuzzed)
		// 	return fuzzed[0];
		// });
		// console.log('fuzz matches:');
		// console.log(results);

		var fuse_results = initial_match_array.map(function(item, index) {
			if (item === undefined) {
				var fuse_candidates = [{"field_name": "company_main_phone"},{"field_name": "first_name"}, {"field_name": "last_name"}, {"field_name": "email"}, {"field_name": "company.name"}, {"field_name": "postal_code"}, {"field_name": "account"}, {"field_name": "account_type"}, {"field_name": "pass"}, {"field_name": "phone_1"}, {"field_name": "phone_2"}, {"field_name": "tos"}, {"field_name": "browser"}, {"field_name": "location"}, {"field_name": "type"}]
				var options = {
					shouldSort: true,
		  			threshold: 0.5,
		  			location: 0,
		  			distance: 100,
		  			maxPatternLength: 32,
		  			minMatchCharLength: 1,
		  			keys: [
		  				"field_name"
		  			]
				};
				var fuse = new Fuse(fuse_candidates, options)
				console.log('before search: ')
				console.log(original_state_array[index])
				var fuse_search = fuse.search(original_state_array[index])
				if (item !== undefined) {
					item = fuse_search[0].field_name
				} else {
					item = 'custom_field'
				}

			}
			return item
				
		})
		console.log('fuse results' + fuse_results);

		var response = this.state.response.length
		var match_result = {}
		for (var i = 0; i < response; i++) {
		    match_result[this.state.response[i]] = fuse_results[i];
		}
		this.setState({match_object: match_result})
		console.log(this.state.match_object)



	// 	console.log('fuse match too:');
	// 	console.log(match_result);

	}
	/*handleFuzzFilter(){
		var candidates = ['first_name', 'last_name', 'email', 'company.name', 'postal_code', 'account', 'account_type', 'pass', 'phone_1', 'phone_2', 'tos', 'browser', 'location', 'type']
		var options = {
			shouldSort: true,
		  	threshold: 0.6,
		  	location: 0,
		  	distance: 100,
		  	maxPatternLength: 32,
		  	minMatchCharLength: 1
		}
		var fuse = new Fuse(candidates, options)
		var results = this.state.response.map(function(item) {
			var fuzzed = fuse.search(item);
			return fuzzed[0];
		});
		console.log(results);
	}*/
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
							<button onClick={this.handleSubmit} className="disable submit-button button">Submit</button>
							<div>   
								<ul className="fields_ul">
     								{this.state.response.map(function(item, index){
       									return <li className="fields" key={index}>{item}</li>
     								})}
   								</ul>
							</div>
							<div>
							  { this.state.response.length > 0 ? 
							  	<button onClick={this.handleFuzzFilter}>Click to find matches in LC</button> : <p></p>
							  }
							</div>
							<div> 
							{ Object.keys(this.state.match_object).length > 0 && 
								<p>LeadConduit Field Suggestions</p>
							}
								<ul className='fields_ul'>
									{Object.entries(this.state.match_object).map(([key, value]) => {
										return <li className="fields" key={key}>{key} -> LeadConduit field: {value}</li>
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