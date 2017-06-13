import React, { Component } from 'react';
import './Test.css';
import {FormControl, Button} from 'react-bootstrap';

class UrlSearch extends Component {
	handleSubmit () {
		this.props.onClick();
	}
	componentDidMount () {
		console.log('url search component mounted');
	}
	render() {
		return(

			<div className="form-finder-inner">
				<form>
					<div><strong>Web Form URL:</strong></div>
					<FormControl name="postingUrl" className="input" style={{ marginBottom: "10px" }} type="text" placeholder="Paste your web form's URL here" value={this.props.posting_url}required onChange={this.props.onChange}></FormControl>
				</form>
				{ this.props.error_message  
					? <h5 className="input-search-results">{this.props.error_message}</h5>
					:''
				}
				<Button bsStyle="primary center-block" bsSize="large" onClick={this.handleSubmit.bind(this)} disabled={!this.props.posting_url}>Submit</Button>
			</div>
		)
	}
};

export default UrlSearch;
