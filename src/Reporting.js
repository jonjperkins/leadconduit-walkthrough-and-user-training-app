import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Reporting extends Component {
	componentDidMount () {
  		window.scrollTo(0, 0)
	}
	render() {
		return(
			<div className="ancestor">
				<div className="chapter-content-body">
					<h1 className="title">Reporting</h1>
					<p> Your flow's reporting tab allows you to create public-facing reports you can share with 
					lead sources. These reports live at unique URLs and will stay up-to-date in real time: no 
					logins, no exporting. Reports can be created individually using the <strong>New Report</strong> button or 
					in a batch using the <strong>New Batch of Reports</strong> button.</p>
					<p>To create a report, navigate to the reports tab on your flow's homepage. Fill out the relevant 
					information you want for the report. For example, here's how you would create a report of all failed 
					leads for a particular source:</p>
					<img className="img-background" src={require('../images/reports.gif')} alt="Reports" />
					<p>The reporting tab gives you the information you requested, as well as filtering features like the ability 
					to adjust the time frame you'd like to include in your report.</p>
					<img className="img-background" src={require('../images/failreports.png')} alt="Fail Reports" />
					<p>The Failure Details section has three columns.</p>
					<ol>
						<li><strong>Reason</strong>: What the server response body says about why your lead failed.</li>
						<li><strong>Failures</strong>: The total number of failures for a particular reason.</li>
						<li><strong>Percentage of Failures</strong>: The percentage of failures each reason represents in the 
						context of all failed leads.</li>
					</ol>
					<img className="img-background" src={require('../images/failure_details.png')} alt="Fail Details" />
					<p>The Lead Details section provides you with information for each individual lead:</p>
					<ol>
						<li>Date and Time</li>
						<li>LeadConduit ID</li>
						<li>Outcome</li>
						<li>Reason</li>
					</ol>
					<img className="img-background" src={require('../images/lead_outcome_info.png')} alt="Lead Details" />
					<p>If you'd like to make changes to an already created report, you can edit your report from the 'Reports' main 
					menu. Also, if you’ve shared a report in error, or no longer want your contact to be able to view a report, you 
					can change the URL at any time.</p>
					<img className="img-background" src={require('../images/editreports.png')} alt="Edit Reports" />
					<Link className="previous-button" style={{ textDecoration: 'none' }} to="/testing-tool">Back</Link>
					<Link className="next-button" style={{ textDecoration: 'none' }} to="/knowledge-base">Next</Link>
				</div>
			</div>
		);
	}
}

export default Reporting;