import React, { Component } from 'react';
import './Test.css';
import {FormControl, Button} from 'react-bootstrap';
import UrlSearch from './UrlSearch';


class WebScraper extends Component {
	constructor() {
		super();
		this.state = {
			posting_url: "",
			response_styling: "",
			response: [],
			match_object: [],
			url_search: true,
			fields_to_add: false,
			inbound_mappings: false,
			error_message: '',
			regex_matches: ''
		}
		this.handleUpdatePostingUrl = this.handleUpdatePostingUrl.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleMatchFields = this.handleMatchFields.bind(this);
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
				if (array_of_fields[0] === '') {
					this.setState({error_message: "The URL you submitted did not return any input fields. Please check your URL and try again."})
					return false;
				}
				this.handleMatchFields();
			})
		});
	}
	handleMatchFields(){
		//var candidates = ['first_name', 'last_name', 'email', 'company.name', 'postal_code', 'account', 'account_type', 'pass', 'phone_1', 'phone_2', 'tos', 'browser', 'location', 'type', 'gender', 'address_1', 'address_2']
		var original_state_array = this.state.response
		var phone_count = []
		var address_count = []
		var standard_fields = ['first_name', 'last_name', 'email', 'company.name', 'postal_code', 'account', 'account_type', 'pass', 'phone_1', 'phone_2', 'tos', 'browser', 'location', 'type', 'gender', 'address_1', 'address_2']
		var array_for_regex_step =[]
		var used_standard_fields = []
		var final_array = []

		// * CHECK FOR EXACT MATCHES AND PRIORITY MATCHES * //

		original_state_array.map(function(input_item, final_index) {
			input_item = input_item.toLowerCase()
			standard_fields.map(function(standard_field, reg_index) {
				if ((standard_field === input_item) && (final_array.indexOf(input_item) === -1)) {
					final_array.splice(final_index, 0, standard_field);
					array_for_regex_step.splice(final_index, 0, '')
					if (input_item === 'phone_1') {
						phone_count.push('phone_1');
						used_standard_fields.push('phone_1')
					}
					if (input_item === 'phone_2') {
						phone_count.push('phone_2');
						used_standard_fields.push('phone_2')
					}
					if (input_item === 'phone_3') {
						phone_count.push('phone_3');
						used_standard_fields.push('phone_3')
					}
					if (input_item === 'address_1') {
						address_count.push('address_1')
						used_standard_fields.push('address_1')
					}
					if (input_item === 'address_2') {
						address_count.push('address_2')
						used_standard_fields.push('address_2')
					}
				}
				// else if (((input_item === 'apt') || (input_item === 'apartment') || (input_item === 'apartment_number') || (input_item === 'apt_no') || (input_item === 'apartment_no') || (input_item === 'apt_number') || (input_item === 'apartmentnumber') || (input_item === 'apt_num') || (input_item === 'apt.') || (input_item === 'ste') || (input_item === 'suite') || (input_item === 'ste.')) && used_standard_fields.indexOf('address_2') === -1) {
				// 	final_array.splice(final_index, 0, 'address_2');
				// 	array_for_regex_step.splice(final_index, 0, '');
				// 	address_count.push('address_2');
				// 	used_standard_fields.push('address_2');
				// }
				else {
					if (final_array.indexOf(input_item) === -1 && array_for_regex_step.indexOf(input_item) === -1 && standard_field !== input_item) {
						array_for_regex_step.splice(final_index, 0, input_item)
						final_array.splice(final_index, 0, '');
					}
				}

			})
		});

		console.log('final_array: ' + final_array);
		console.log('regex_array: ' + array_for_regex_step);

		// * CHECK FOR REGEX AND 2ND PRIORITY MATCHES * //

		var final_array = array_for_regex_step.map(function(item, index) {
			console.log('phone count: ' + phone_count.length)
			item = item.toLowerCase()
			if (item === ''){
				used_standard_fields.push(item);
				return final_array[index];
			}
			if ((item === "fname") || (item === "firstname") || ( item === 'first.name') || (item === 'first-name') || (item === 'first_name')) {
				item = 'first_name'
				if (final_array.indexOf(item) >= 0) {
					return 'custom_field'
				} else {
					used_standard_fields.push(item);
					return 'first_name'		
				}
			}
			if ((item === 'lname') || (item === 'lastname') || (item === 'last.name') || (item === 'last-name') || (item === 'last_name')) {
				item = 'last_name'
				if (final_array.indexOf(item) >= 0) {
					return 'custom_field'
				} else {
					used_standard_fields.push(item);
					return 'last_name'
				}
			}
			if ((item === 'email') || (item === 'emailaddress') || (item === 'email.address') || (item === 'email_address') || (item === 'email-address') || (item === 'e-mail-address') || (item === 'e-mail_address') || (item === 'e-mail') || (item === 'e_mail')) {
				item = 'email'
				if (final_array.indexOf(item) >= 0) {
					return 'custom_field'
				} else {
					used_standard_fields.push(item);
					return 'email'
				}
			}
			if ((/(zip|zipcode|postalcode|postcode|postal)/.test(item)) || (item === 'zip') || (item === 'zipcode') || (item === 'zip_code') || (item === 'zip.code') || (item === 'zip-code') || (item === 'postcode') || (item === 'postalcode') || (item === 'postal.code')) {
				item = 'postal_code'
				if (final_array.indexOf(item) >= 0) {
					return 'custom_field'
				} else {
					used_standard_fields.push(item);
					return 'postal_code'
				}
			}
			// if (/(zip|zipcode|postalcode|postcode|postal)/.test(item)) {
   //  			item = 'postal_code'
   //  			if (final_array.indexOf(item)) {
			// 		return 'custom_field'
			// 	} else {
			// 		return 'Postal Code'
			// 	}
   //  		}
    		if (/(phone)/.test(item)) {
    			if (phone_count.length < 1 && final_array.indexOf('phone_1') === -1) {
    				phone_count.push('phone_1')
    				used_standard_fields.push(item);
    				return item = 'phone_1'
    			} else if (phone_count.length < 2 && final_array.indexOf('phone_2') === -1) {
    				phone_count.push('phone_2')
    				used_standard_fields.push(item);
    				return item = 'phone_2'
    			} else if (phone_count.length < 3 && final_array.indexOf('phone_3') === -1) {
    				phone_count.push('phone_3')
    				used_standard_fields.push(item);
    				return item = 'phone_3'
    			} else {
    			return item = 'custom_field'
    			}
    		}
    		if (/(gender)/.test(item)) {
    			item = 'gender'
    			if (used_standard_fields.indexOf(item) >= 0) {
					return 'custom_field'
				} else {
					used_standard_fields.push(item);
					return 'gender'
				}
    			

    		}

			if (((item === 'apt') || (item === 'apartment') || (item === 'apartment_number') || (item === 'apt_no') || (item === 'apartment_no') || (item === 'apt_number') || (item === 'apartmentnumber') || (item === 'apt_num') || (item === 'apt.') || (item === 'ste') || (item === 'suite') || (item === 'ste.')) && (address_count.length > 1) ) {
				item = 'address_2'
				if (used_standard_fields.indexOf(item) > -1) {
					return 'custom_field'
				} else {
					used_standard_fields.push(item);
					return 'address_2'	
				}
			} 
    		
    		if (/(address)/.test(item) && !/(email)/.test(item)) {
    			//check to make sure it didn't get put in with the matching step, then check if address_count length
    			if (used_standard_fields.indexOf('address_1') === -1 && final_array.indexOf('address_1') === -1 ) {
    				address_count.push('address_1')
    				used_standard_fields.push('address_1');
    				return item = 'address_1'
    			} 
    			if (used_standard_fields.indexOf('address_2') === -1 && final_array.indexOf('address_2') === -1 ) {
    				address_count.push('address_2')
    				used_standard_fields.push('address_2');
    				return item = 'address_2'
    			}
    			else {
    				return item = 'custom_field'
    			}
    			
    		}

    		// can't currently collect trustedform with GET req
    		if (/(xxTrustedFormCertUrl)/.test(item)) {
    			used_standard_fields.push(item);
    			return item = 'trustedform_cert_url'
    		}

    		if (/(age)/.test(item) && !/(page)/.test(item)) {
    			item = 'age'
    			if (used_standard_fields.indexOf(item) >= 0) {
					return 'custom_field'
				} else {
					used_standard_fields.push(item);
					return 'age'
				}
    		}
    		else {
    			return 'custom_field';
    		}

    		
		});
		console.log('ADDRESS count ' + address_count)
		console.log('PHHONE count: ' + phone_count)
		console.log('regex matches: ' + final_array);
		this.setState({regex_matches: final_array})

// * THIS IS WHERE WE CREATE THE FINAL OBJECT FOR DISPLAY IN THE UI *

		var response = this.state.response.length
		var match_result = {}
		for (var i = 0; i < response; i++) {
		    match_result[this.state.response[i]] = final_array[i];
		}
		this.setState({match_object: match_result})
		console.log(this.state.match_object)
		this.setState({url_search: false, fields_to_add: true})
	}
	backToSearchUrl() {
		this.setState({url_search: true, fields_to_add: false, inbound_mappings: false, error_message: ''})
	}
	forwardToInboundMappings() {
		this.setState({fields_to_add: false, inbound_mappings: true, url_search: false})
	}
	backToFields() {
		this.setState({fields_to_add: true, inbound_mappings: false, url_searach: false})
	}
	render() {
		return(
			
				<div className="field-finder-content-body">
					{ this.state.fields_to_add
						? <div>
							<div className="field-mapping-toggle">
								<Button className="field-mapping-button" bsStyle="primary" onClick={this.forwardToInboundMappings.bind(this)}>Show Mappings</Button>
						  		<h5 className="startover" onClick={this.backToSearchUrl.bind(this)}>Start Over</h5>
						  	</div>
						  	<h1>Add These Fields</h1>
						  </div>

						  
						: ''
					}
					{ this.state.inbound_mappings
						? <div>
							<div className="field-mapping-toggle">
								<Button className="field-mapping-button" bsStyle="primary" onClick={this.backToFields.bind(this)}>Show Fields</Button>
								<h5 className="startover" onClick={this.backToSearchUrl.bind(this)}>Start Over</h5>
							</div>
							<h1>Add These Inbound Mappings</h1>
							<h6>What are <a href="https://support.activeprospect.com/hc/en-us/articles/209564466-LeadConduit-Inbound-Field-Mapping" target="_blank">inbound field mappings</a>?</h6>
						  	<br/>
						  </div>
						: ''
					}
					{ this.state.url_search 
						?   <div className="outer">
								<UrlSearch 
									error_message={this.state.error_message}
									onClick={this.handleSubmit.bind(this)}
									onChange={this.handleUpdatePostingUrl.bind(this)}
									posting_url={this.state.posting_url} />
							</div>
						: <div></div>
					}
					
					
						 
							{/* <ul className="fields_ul">
 								{this.state.response.map(function(item, index){
   									return <li className="fields" key={index}>{item}</li>
 								})}
							</ul>
					
						<div>
						  { this.state.response.length > 0 ? 
						  	<Button bsStyle="primary center-block" bsSize="large" onClick={this.handleFuzzFilter}>Click to find matches in LC</Button> : <p></p>
						  }
						</div>*/}
						
						
							
								{Object.entries(this.state.match_object).map(([key, value]) => {
									console.log('match object length: ' + this.state.response.length);
									if (this.state.fields_to_add === true && this.state.response[0] === '') {
										return 	<div className="outer-results">
													<div className="response">
														<h2>No results to display.</h2>
													</div>
												</div>
									}
									if ( this.state.fields_to_add === true ) {
										return 	<div className="fields-div" key={key}>
										   			<div className="leadconduit-standard-field"><span className="leadconduit-standard-color">{value}</span></div>
										   		</div>
										}
									if  ( this.state.inbound_mappings === true && (value !== key) ) {
										return  <div className="fields-div" key={key}>
											<div className="set">Set</div>
								   			<div className="leadconduit-field">{value}</div>
								   			<div className="input-field"><span className="source-field">{key}</span></div>
								   		</div>
									}
								})}
							
					
				</div>
			
		);
	}
}

export default WebScraper;