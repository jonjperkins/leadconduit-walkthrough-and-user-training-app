import React, { Component } from 'react';
import './ChapterStyles.css';
import { Link } from 'react-router-dom';

class Chapter8 extends Component {
	componentDidMount () {
  		window.scrollTo(0, 0)
	}
	render() {
		return(
			<div className="ancestor">
				<div className="chapter-content-body">
					<h1 className="title">Acceptance Criteria</h1>
					<p>The next subject we'll discuss regarding sources will get us into the core of LeadConduit - <em>deciding what kind of leads we will or won't accept</em>.</p>
					<p>Source rules, or Acceptance Criteria, are source-specific (as you would probably expect). To the right of where we created inbound mappings for our 
					source earlier, select 'Add Rules'.</p>
					<img src={require('../images/addrulesinbound.png')} />
					<p>You'll be taken to a page where you can begin configuring your acceptance criteria.</p>
					<p>Source rules function to restrict entrance to our flow. Only leads with specific values in specific fields will have permission to enter. 
					When we create a source rule, we effectively say that a lead <em>MUST</em> have this data. Otherwise, we don't want it.</p>
					<p><strong>For the purposes of our tutorial, we only want to accept leads where:</strong></p>
					<ul>
						<li>Age is <strong>greater than or equal to</strong> 18</li>
						<li>First name is not blank <strong>OR</strong> last name is not blank</li>
						<li>Sports team <strong>is included in</strong> the following list:</li>
							<ul>
								<li>'Chicago Bulls'</li>
								<li>'Chicago Cubs'</li>
								<li>'Dallas Cowboys'</li>
								<li>'Chicago White Sox'</li>
								<li>'Dallas Mavericks'</li>
							</ul>
						<li>4. Phone_1 <strong>OR</strong> email is not blank</li>
					</ul>
					<p>This list suggests that we're only interested in leads where we know the first or last name of the lead (so we can address them by 'first name' or Mr/Mrs 'last name'), 
					the lead is old enough to consent to a contract (we're trying to sell them something), the lead is a fan of Chicago or Dallas-based sports teams, and we have a phone number 
					or an email (we just need to have at least one way to get in touch with each lead). </p>
					<p>Here's how we'd set that up:</p>
					<img src={require('../images/addrules2.gif')} />
					<p><strong>*PRO-TIP:</strong> Don't forget to save your work! <strong>*</strong></p>
					<p>And here's how our final source rules will look:</p>
					<img src={require('../images/acceptancecriteria.png')} />
					<p>In order for a lead to pass through the initial source rules to the flow's steps, it must pass 'ALL' or 'ANY' (depending on what you select) of the rules set up for the source. 
					Within the larger rule, you can set up smaller rule sets which will give you a lot of power in determining what leads should make it into your flow's steps. If you take a closer look, 
					you'll see that's exactly what we've done in our flow.</p>
					<img src={require('../images/acceptancerulesets.png')} />
					<p>Notice the purple sections above. These are rule sets. For each rule set, LeadConduit looks to see if 'ANY' or 'ALL' (depending on what you select) of the rules are true. In this case, 
					we'll accept a lead into our flow's steps if it has at least a first name OR last name, and a phone number OR email - assuming all other rules pass as well.</p>
					<p>You should use source rules when you never want to accept a lead without a certain characteristic (e.g. first name is not blank, age is greater than 18). We'll talk about filters in the 
					'Steps' section, but for now, you just need to know that it’s a best practice to use source rules in a situation where you never want to accept a lead without a certain characteristic.</p>
					<p>Unlike filters, Acceptance Criteria will appear on your posting docs so your sources know exactly what you will and will not accept with your lead data. Sources can also test the response 
					they’ll receive from LeadConduit based on the Acceptance Criteria. Filters will not appear in the posting docs, and will not apply to the interactive example at the bottom of the docs. </p>
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

export default Chapter8;