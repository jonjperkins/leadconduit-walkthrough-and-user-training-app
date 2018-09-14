import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IconButton from './IconButton';
import ReactTooltip from 'react-tooltip'

class Overview extends Component {
	constructor() {
		super();
		this.state = {
			gifShowing: true
		}
	}
	resetGif() {
		this.setState({gifShowing: !this.state.gifShowing})
		console.log(this.state.gifShowing);
	}
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		return(
			<div className="ancestor">
				<div className="chapter-content-body">
					<h1 className="title">Overview</h1>
					<h2><strong>Introduction</strong></h2>
					<p>The Overview section of our Getting Started Guide gives you a six-step, high-level overview of the actions you should take to get your first flow up and running. If you need more detail, select any of the links listed under the Getting Started Guide header in the navigation bar to the left or click any of the links provided in the sections below.</p>
					<h2><strong>Step 1:</strong> Create a New Flow</h2>
					<p>Create your first flow by visiting the <strong>Flows</strong> page and clicking the <strong>Create New Flow</strong> button.</p>
					<img className="img-background" src={require('../images/CreateFlowOverview.png')} alt="Flow Button" />
					<img className="img-background" src={require('../images/CreateFlowButtonOverview.png')} alt="Flow Button" />
					<h2><strong>Step 2:</strong> Add Fields</h2>
					<p><strong><a href="http://leadconduit-tutorial.herokuapp.com/#/fields">Fields</a></strong> capture and house the lead data sent to your LeadConduit flow by web forms and lead vendors. Add a field for every piece of data you 
					plan to collect in this flow by clicking the <strong>Add/Edit Fields</strong> button.
					</p>
					<p data-tip="Click to restart"><img onClick={this.resetGif.bind(this)} className="gif-background" src={this.state.gifShowing ? require("../images/addfieldsoverview.gif") : require("../images/addfieldsoverview2.gif")} alt="Overview Fields" /></p>
							<ReactTooltip place="bottom" type="dark" effect="float"/>
					<h2><strong>Step 3:</strong> Add Sources</h2>
					<p><strong><a href="http://leadconduit-tutorial.herokuapp.com/#/sources">Sources</a></strong> represent a lead vendor or web form that sends lead data to your LeadConduit flow. You should add a source for every web form or lead vendor 
					sending leads to your flow. Add sources by clicking the <strong>Add Source</strong> button. Need to add a source that isn't listed in the dropdown? Create a <strong><a href="https://support.activeprospect.com/hc/en-us/articles/202062469-LeadConduit-Adding-a-Source" target="_blank">custom source</a></strong>. 
					Want to connect a web form as a source? Use our <strong><a href="https://support.activeprospect.com/hc/en-us/articles/202062469-LeadConduit-Adding-a-Source">web form wizard</a></strong>.  
					</p>
					<p data-tip="Click to restart"><img onClick={this.resetGif.bind(this)} className="gif-background" src={this.state.gifShowing ? require("../images/addsourcesoverview.gif") : require("../images/addsourcesoverview2.gif")} alt="Overview Fields" /></p>
							<ReactTooltip place="bottom" type="dark" effect="float"/>
					<h2><strong>Step 4:</strong> Add Steps</h2>
					<p>In LeadConduit, Steps are where the magic happens. Once a Source has successfully posted a lead into your flow using the fields you've selected, that lead begins it's journey through your steps. There are three types of Steps for processing a lead in LeadConduit: Enhancements, Recipients, and Filters. 
					</p>
					<img className="img-background" src={require('../images/StepsOverview.png')} alt="Flow Button" />
					<h4>Add an Enhancement</h4>
					<p><strong><a href="http://leadconduit-tutorial.herokuapp.com/#/non-wizard-enhancements">Enhancements</a></strong> give you the power to append additional data to your leads and ensure the submitted lead data is accurate. </p>
					<br />
					<h4>Add a Recipient</h4>
					<p>Recipients allow you to deliver your leads and enhancement data to a variety of systems (CRM, ESP, et.) or to other accounts. Use rules and/or volume caps to define which leads go to which recipients.</p>
					<p>Need to deliver leads to a recipient not listed in our integrations? Check out our <strong><a href="http://leadconduit-tutorial.herokuapp.com/#/lead-delivery">Lead Delivery</a></strong>, <strong><a href="http://leadconduit-tutorial.herokuapp.com/#/outbound-field-mapping">Outbound Field Mapping</a></strong>, 
					and <strong><a href="http://leadconduit-tutorial.herokuapp.com/#/response-parsing">Response Parsing</a></strong> sections to learn more.</p>
					<br />
					<h4>Add Filters</h4>
					<p><strong><a href="http://leadconduit-tutorial.herokuapp.com/#/non-wizard-filters-and-rules">Filters</a></strong> allow you to stop unwanted leads from ever entering your database. Use filters to provide a real-time response to your sources for leads that you don't want.</p>
					<br />
					<h2><strong>Step 5: </strong>Test Your Flow</h2>
					<p>Use our <strong><a href="http://leadconduit-tutorial.herokuapp.com/#/testing-tool">testing tool</a></strong> to test out your new flow.</p>
					<br />
					<h2><strong>Step 6: </strong>Share Your Submission Docs</h2>
					<p><strong><a href="http://leadconduit-tutorial.herokuapp.com/#/submission-docs">Submission Docs</a></strong> provide each source with a Posting URL, a list of fields, and a list of <strong><a href="http://leadconduit-tutorial.herokuapp.com/#/acceptance-criteria">Acceptance Criteria</a></strong> for posting successfully to your flow.</p>
				</div>
			</div>
		);
	}
}

export default Overview;