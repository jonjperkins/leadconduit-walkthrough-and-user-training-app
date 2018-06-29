import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IconButton from './IconButton';
import ReactTooltip from 'react-tooltip';

class StepCriteria extends Component {
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
					<div className="arrow-wrapper">
						<div className="inner-arrow-wrapper">
							<div className="back-arrow">
								<p data-tip="Enhancements & Marketplace Integrations"><IconButton class_name="arrow" to="/non-wizard-enhancements" name="angle-left" /></p>
								<ReactTooltip place="bottom" type="dark" effect="float"/>
							</div>
							<div className="forward-arrow">
								<p data-tip="Lead Delivery"><IconButton class_name="arrow" to="/lead-delivery" name="angle-right" /></p>
								<ReactTooltip place="bottom" type="dark" effect="float"/>
							</div>
						</div>
					</div>
					<h1 className="title">Step Criteria</h1>
					<p>Configuring <a href="https://support.activeprospect.com/hc/en-us/articles/115001385643-LeadConduit-Rules" target="_blank">Step Criteria</a> on an Enhancement or Recipient step
					in your flow allows you to let some leads in and keep other leads out of a particular step. Having step criteria in place
					on certain steps allows you to, for example, route some leads to one Salesforce account and other leads to a different Salesforce account based on any piece of data submitted with that lead or appended by a prior Enhancement step. It also 
					allows you to send some leads to a data append/validation step and not others.</p>
					<p>Imagine a scenario where you want to send leads to a call center if you can validate that the line is connected. However, you only want to call leads in North Carolina. As a result,
					it's only worth validating the phone numbers for North Carolina leads because you won't be calling leads from other states and the connection status won't matter.. Here's how you would configure step criteria for the phone number validation enhancement step. </p>
					<p>First, <a href="http://leadconduit-tutorial.herokuapp.com/#/non-wizard-enhancements">add a Telesign enhancement step</a> to your flow. Open the step by clicking on the Telesign icon. Click the gray step criteria header and select the <strong>Add Rule</strong> button.
					Add a rule where <strong>state is equal to NC</strong>. </p> 
					<p data-tip="Click to restart"><img onClick={this.resetGif.bind(this)} className="gif-background" src={this.state.gifShowing ? require('../images/addstepcriteria1.gif') : require('../images/addstepcriteria2.gif')} alt="add step criteria" /></p>
					<ReactTooltip place="bottom" type="dark" effect="float"/>
					<p>Based on the above rules, only leads where <strong>state is equal to NC</strong> will enter the Telesign step for phone validation. All other leads won't enter this step.</p>

					<div className="arrow-wrapper">
						<div className="inner-arrow-wrapper">
							<div className="back-arrow">
								<p data-tip="Marketplace Integrations & Enhancements"><IconButton class_name="arrow" to="/non-wizard-enhancements" name="angle-left" /></p>
								<ReactTooltip place="bottom" type="dark" effect="float"/>
							</div>
							<div className="forward-arrow">
								<p data-tip="Lead Delivery"><IconButton class_name="arrow" to="/lead-delivery" name="angle-right" /></p>
								<ReactTooltip place="bottom" type="dark" effect="float"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default StepCriteria;