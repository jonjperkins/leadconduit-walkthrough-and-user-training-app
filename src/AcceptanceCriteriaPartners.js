import React, { Component } from 'react';
import './ChapterStyles.css';
import { Link } from 'react-router-dom';

class AcceptanceCriteriaPartners extends Component {
	componentDidMount () {
  		window.scrollTo(0, 0)
	}
	render() {
		return(
			<div className="ancestor">
				<div className="chapter-content-body">
					<h1 className="title">Acceptance Criteria</h1>
					<p>Acceptance Criteria functions as a gatekeeper for your flow. If a lead comes in and does not meet the 
					proper criteria it will be rejected, never entering your flow steps. Like inbound field mappings, Acceptance 
					Criteria is source-specific - so you can set separate rules for each source if you like. </p>
					<p>To the right of where we created inbound mappings for our source earlier, select <strong>Add Rules</strong>.</p>
					<img src={require('../images/addrulesinbound.png')} />
					<p>You'll be taken to a page where you can begin configuring your acceptance criteria. When you create a 
					source rule, you’re effectively saying that a lead MUST have this data. Otherwise, we don't want it.</p>
					<p>For example, we only want to accept leads where:</p>
					<ol>
						<li><strong>Age</strong> is greater than or equal to 18</li>
						<li><strong>First name</strong> is not blank OR <strong>last name</strong> is not blank</li>
						<li><strong>State</strong> is included in the following list:</li>
							<ul>
								<li>'TX'</li>
								<li>'SC'</li>
								<li>'NC'</li>
							</ul>
						<li><strong>Phone_1</strong> OR <strong>email</strong> is not blank</li>
					</ol>
					<p>Here's how we'd set that up:</p>
					<img src={require('../images/setacceptancecriteria.gif')} />
					<p>Don't forget to <strong>save</strong> your work!</p>
					<p>If you set up the previous rules correctly, here's how your final acceptance criteria rules would look:</p>
					<img src={require('../images/finalacceptancecriteria.png')} />
					<p>In order for a lead to pass through the initial source rules to the flow's steps, it must pass <strong>ALL</strong> or <strong>ANY</strong> (depending on what you select) of the rules set up for the source. 
					Within the larger rule, you can set up smaller rule sets which will give you a lot of power in determining what leads should make it into your flow's steps.</p>
					<img src={require('../images/acceptancerulesets.png')} />
					<p>Notice the purple sections above. These are rule sets. For each rule set, LeadConduit looks to see if <strong>ANY</strong> or <strong>ALL </strong> 
					(depending on what you select) of the rules are true. In this case, we'll accept a lead into our flow's steps if it has 
					at least a first name <strong>OR</strong> last name, <strong>and</strong> a phone number <strong>OR</strong> email - assuming all other rules pass as well.</p>
					<p>Acceptance Criteria will appear on your posting docs so your sources know exactly what you will and will not accept with your lead data. 
					Sources can also test the response they’ll receive from LeadConduit based on the Acceptance Criteria. Filters will not appear in the 
					posting instructions (discussed in the next section), and will not apply to the interactive example at the bottom of the docs. </p>
					<p>If you want to dive deeper and learn more about acceptance criteria, take a look at these Knowledge Base articles</p> 
					<ul>
						<li><a href="https://support.activeprospect.com/hc/en-us/articles/115001385643-LeadConduit-Rules" target="_blank">LeadConduit Rules</a></li>
						<li><a href="https://support.activeprospect.com/hc/en-us/articles/211164783-LeadConduit-Acceptance-Criteria" target="_blank">Acceptance Criteria</a></li>
					</ul>
					<Link className="previous-button" style={{ textDecoration: 'none' }} to="/chapter7">Back</Link>
					<Link className="next-button" style={{ textDecoration: 'none' }} to="/chapter9">Next</Link>
				</div>
			</div>
		);
	}
}

export default AcceptanceCriteriaPartners;