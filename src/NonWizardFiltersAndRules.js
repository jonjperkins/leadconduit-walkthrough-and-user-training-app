import React, { Component } from 'react';
import './ChapterStyles.css';
import { Link } from 'react-router-dom';

class NonWizardFiltersAndRules extends Component {
	componentDidMount () {
  		window.scrollTo(0, 0)
	}
	render() {
		return(
			<div className="ancestor">
				<div className="chapter-content-body">
					<h1 className="title">Filters and Step Rules</h1>
					<p><strong>Filters</strong> function differently than step rules in that they help make a decision about whether 
					or not the lead will be marked a success or a failure once the lead successfully enters your flow. 
					Filters can use any piece of lead data, including data we add, or append, to your lead using one 
					of the available integrations.</p>
					<p>Most often, users want to reject leads that have an invalid phone number and an invalid email address. 
					We’ll use a rule and a filter to accomplish this in our flow.</p>
					<p>Once our lead goes through the Telesign step, we’ll have a some newly appended information we can use to 
					make decisions about our lead. In this tutorial, if a lead passes through our Telesign step and it’s 
					determined to be a ‘good’ number, we’ll end up accepting the lead whether or not the Webbula outcome is 
					successful since we know the number is good.</p>
					<p>So let’s set up a rule where only leads with ‘bad’ numbers are allowed enter the Webbula email verification 
					step. What’s a ‘bad’ number you might ask? Telesign will respond with failure if the phone number is a pager, 
					pay phone, invalid, voicemail, or a restricted number (check out our Knowlege Base for more info on 
					<a href="https://support.activeprospect.com/hc/en-us/articles/208124963-TeleSign-Using-Phone-Validation-in-LeadConduit"> Telesign</a>). 
					For any lead where the response from Telesign is ‘Failure’, that lead should enter the Webbula step so we can 
					verify email the address (given that we know we cannot call the lead).</p>
					<img className="img-background" src={require('../images/webbularules.gif')} />
					<p>At this point, a lead has entered the Telesign step, or both the Telesign and Webbula steps. We are ready to make a final determination 
					on the fate of this lead. We’ll do this by adding a filter. </p>
					<img className="img-background" className="img-background" src={require('../images/filter.gif')} />
					<p>Here’s a snapshot of how our filter will look.</p>
					<img className="img-background" src={require('../images/finalenhancementfilter.png')} />
					<p>We’ve had to use a good bit of logic to set this all up. Here’s how it works:</p>
					<ol>
						<li>A lead enters our flow after meeting all of the acceptance criteria.</li>
						<li>Once in the flow, all leads will enter the <strong>Telesign</strong> step.</li>
						<li><strong>Webbula</strong></li>
							<ul>
								<li><strong>If</strong> Telesign responds with ‘Failure’ after evaluating a lead’s phone number, that lead must enter the 
								Webbula step to have it’s email evaluated. This is the rule we set up.</li>
								<li><strong>If</strong> Telesign responds with anything other than ‘Failure’, we’ll consider that phone number to be good 
								and consider this lead ultimately successful since we only need an email address <strong>or</strong> phone number. This lead 
								won’t enter the Webbula step at all.</li>
							</ul>
						<li>The <strong>Filter</strong> looks to see if the Webbula outcome is ‘Success’ or ‘Failure’. If it’s a failure, the filter will stop the 
						flow and reject the lead. <strong>The logic here is that only leads with ‘bad’ phone number will enter the Webbula step, so if the 
						Webbula outcome is ‘Failure’, then we know this is a bad lead because phone number <em>and</em> email are bad.</strong></li>
					</ol>
					<Link className="previous-button" style={{ textDecoration: 'none' }} to="/non-wizard-enhancements">Back</Link>
					<Link className="next-button" style={{ textDecoration: 'none' }} to="/lead-delivery">Next</Link>
				</div>
			</div>
		);
	}
}

export default NonWizardFiltersAndRules;