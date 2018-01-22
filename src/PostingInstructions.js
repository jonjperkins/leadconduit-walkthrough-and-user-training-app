import React, { Component } from "react";
import { Link } from "react-router-dom";
import IconButton from "./IconButton";
import ReactTooltip from "react-tooltip";

class PostingInstructions extends Component {
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
								<p data-tip="Acceptance Criteria"><IconButton class_name="arrow" to="/acceptance-criteria" name="angle-left" /></p>
								<ReactTooltip place="bottom" type="dark" effect="float"/>
							</div>
							<div className="forward-arrow">
								<p data-tip="Marketplace Integrations & Enhancements"><IconButton class_name="arrow" to="/non-wizard-enhancements" name="angle-right" /></p>
								<ReactTooltip place="bottom" type="dark" effect="float"/>
							</div>
						</div>
					</div>
					<h1 className="title">Posting Instructions</h1>
					<p>When you create a flow and need a way to tell people how to send your lead data to your flow - send them the posting instructions.</p>
					<p>Posting instructions are source-specific and can be accessed on your flow’s homepage. To get there, save your work and close out of the 
					flow editor. This will take you to the flow homepage. Click the ’Posting Instructions’ button in the upper right corner, and select the relevant source. 
					You’ll be taken directly to the posting instructions page for that source in a new tab.</p>
					<p>These posting instructions will stay up-to-date in real time as changes are made to your flow, and will always live at their unique URL. 
					These do not require a login to access, and can be shared with your lead sources as necessary.</p>
					<p data-tip="Click to restart"><img onClick={this.resetGif.bind(this)} className="gif-background" src={this.state.gifShowing ? require("../images/accessingpostinginstructions.gif") : require("../images/accessingpostinginstructionsfalse.gif")} alt="Access Instructions" /></p>
					<p>We won’t talk about everything in the posting instructions, but heres a quick overview of what you can find inside:</p>
					<ul>
						<li>The ability for sources to directly upload leads to your flow via .csv files</li>
						<li>The Posting URL used to submit leads in real time</li>
						<li>Field labels and HTTP parameters</li>
						<li>An explanation of the server responses</li>
						<li>Interactive examples of how to post successfully</li>
					</ul>
					<p>Acceptance Criteria will appear on your posting docs so your sources know exactly what you will and will not accept with your lead data. Filters (which we’ll discuss later) will not. </p>
					<p>When performing inbound mappings on flow fields, both the field name and permissible mapped name will show up on the posting instructions. We’ll always prefer 
					the LeadConduit standard parameter, but the mappings will allow you to post to either. Take a look.</p>
					<img className="img-background" src={require("../images/postinginstructionsmappings.png")} alt="Posting Mappings" />
					<p>Sources can also test the response they’ll receive from LeadConduit based on the Acceptance Criteria. Filters will not appear in the posting docs, and will not 
					apply to the interactive example at the bottom of the docs.</p>
					<Link className="previous-button"  style={{ textDecoration: "none" }} to="/acceptance-criteria">Back</Link>
					<Link className="next-button" style={{ textDecoration: "none" }} to="/non-wizard-enhancements">Next</Link>
				</div>
			</div>
		);
	}
}

export default PostingInstructions;