import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IconButton from './IconButton';
import ReactTooltip from 'react-tooltip';

class NonWizardFiltersAndRules extends Component {
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
								<p data-tip="Enhancements"><IconButton class_name="arrow" to="/non-wizard-enhancements" name="angle-left" /></p>
								<ReactTooltip place="bottom" type="dark" effect="float"/>
							</div>
							<div className="forward-arrow">
								<p data-tip="Step Criteria"><IconButton class_name="arrow" to="/step-criteria" name="angle-right" /></p>
								<ReactTooltip place="bottom" type="dark" effect="float"/>
							</div>
						</div>
					</div>
					<h1 className="title">Filters</h1>
					<p><a href="https://support.activeprospect.com/hc/en-us/articles/115001382483-LeadConduit-Filters" target="_blank">Filters</a> allow you to reject leads after they pass the configured 
					<a href="http://leadconduit-tutorial.herokuapp.com/#/acceptance-criteria" target="_blank"> acceptance criteria</a> and 
					enter your lead flow. Filters can use any piece of lead data (including appended data) to make real-time decisions about whether or not to reject a lead.</p>
					<p>A typical use case for filters is rejecting leads with bad phone numbers. In this example, we'll use <a href="https://support.activeprospect.com/hc/en-us/articles/208124963-TeleSign-Phone-Validation" target="_blank">Telesign</a> to see if a phone number is 'reachable' or not. 
					If it's not, we'll use a filter to reject that lead.</p>
					<p>Once you've <a href="http://leadconduit-tutorial.herokuapp.com/#/non-wizard-enhancements" target="_blank">added a Telesign step</a> to your flow, add a filter below this step to catch bad phone numbers.</p>
					<p data-tip="Click to restart"><img onClick={this.resetGif.bind(this)} className="gif-background" src={this.state.gifShowing ? require('../images/telesignfilter.gif') : require('../images/telesignfilter2.gif')} alt="Webbula Rules" /></p>
					<ReactTooltip place="bottom" type="dark" effect="float"/>
					<p>Take a closer look at this filter.</p>
					<img className="img-background" src={require('../images/telesignfilter.png')} alt="Flow Button" />
					<p>The Telesign step occurs before the filter. As a result, the filter has access to all the data appended by Telesign, including the outcome. Telesign returns a 'failure' outcome when a phone is not reachable.
					It doesn't make sense to call 'unreachable' phone numbers, so this lead should be rejected. As a result, the filter is configured to stop processing the flow and return a failure response to the source when the Telesign live outcome is anything but a success.</p>
					<p>Keep in mind that a filter can reject a lead based on any piece of data you like. In the example below, the filter is configured to reject leads where the risk level is 'high' instead of the outcome.</p>
					<img className="img-background" src={require('../images/telesignfilterhighrisk.png')} alt="Flow Button" />
					<div className="arrow-wrapper">
						<div className="inner-arrow-wrapper">
							<div className="back-arrow">
								<p data-tip="Enhancements"><IconButton class_name="arrow" to="/non-wizard-enhancements" name="angle-left" /></p>
								<ReactTooltip place="bottom" type="dark" effect="float"/>
							</div>
							<div className="forward-arrow">
								<p data-tip="Step Criteria"><IconButton class_name="arrow" to="/step-criteria" name="angle-right" /></p>
								<ReactTooltip place="bottom" type="dark" effect="float"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default NonWizardFiltersAndRules;