import React, { Component } from "react";
import { Link } from "react-router-dom";
import IconButton from "./IconButton";
import ReactTooltip from "react-tooltip";

class KnowledgeBase extends Component {
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
								<p data-tip="Reporting"><IconButton class_name="arrow" to="/reporting" name="angle-left" /></p>
								<ReactTooltip place="bottom" type="dark" effect="float"/>
							</div>
							<div className="forward-arrow">
								<p data-tip="Conclusion"><IconButton class_name="arrow" to="/conclusion" name="angle-right" /></p>
								<ReactTooltip place="bottom" type="dark" effect="float"/>
							</div>
						</div>
					</div>
					<h1 className="title">Knowledge Base</h1>
					<p>If you’ve clicked on some of the previous links during the tutorial, you may have already encountered the knowledge base. If 
					you haven’t yet, you can visit it <a href="https://support.activeprospect.com/hc/en-us" target="_blank">here</a>!</p>
					<p>Our knowledge base includes helpful articles for all of our products. Whenever you get stumped, this is the first 
					place to look to see if you can find an article addressing what you"d like to do.</p>
					<p><strong>Pro Tip</strong>: Use the search bar! This is how our team navigates our knowledge base, and I’m 
					certain you’ll find it to be a much faster way to find what you need!</p>
					<p data-tip="Click to restart"><img onClick={this.resetGif.bind(this)} className="gif-background" src={this.state.gifShowing ? require("../images/search.gif") : require("../images/searchfalse.gif")} alt="Search KB" /></p>
					<Link className="previous-button" style={{ textDecoration: "none" }} to="/reporting">Back</Link>
					<Link className="next-button" style={{ textDecoration: "none" }} to="/conclusion">Next</Link>
				</div>
			</div>
		);
	}
}

export default KnowledgeBase;