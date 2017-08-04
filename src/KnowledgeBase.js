import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IconButton from './IconButton';
import ReactTooltip from 'react-tooltip';

class KnowledgeBase extends Component {
	componentDidMount () {
  		window.scrollTo(0, 0)
	}
	render() {
		return(
			<div className="ancestor">
				<div className="chapter-content-body">
					<div className="arrow-wrapper">
						<div className="inner-arrow-wrapper">
							<div className="back-arrow">
								<a data-tip="Reporting"><IconButton class_name="arrow" to="/reporting" name="angle-left" /></a>
								<ReactTooltip place="bottom" type="dark" effect="float"/>
							</div>
							<div className="forward-arrow">
								<a data-tip="Conclusion"><IconButton class_name="arrow" to="/conclusion" name="angle-right" /></a>
								<ReactTooltip place="bottom" type="dark" effect="float"/>
							</div>
						</div>
					</div>
					<h1 className="title">Knowledge Base</h1>
					<p>If you've clicked on some of the previous links during the tutorial, you may have already encountered the knowledge base. If 
					you haven't yet, you can visit it <a href="https://support.activeprospect.com/hc/en-us">here</a>!</p>
					<p>Our knowledge base includes helpful articles for all of our products. Whenever you get stumped, this is the first 
					place to look to see if you can find an article addressing what you'd like to do.</p>
					<p><strong>Pro Tip</strong>: Use the search bar! This is how our team navigates our knowledge base, and I'm 
					certain you'll find it to be a much faster way to find what you need!</p>
					<img className="img-background" src={require('../images/search.gif')} alt="Search KB" />
					<Link className="previous-button" style={{ textDecoration: 'none' }} to="/reporting">Back</Link>
					<Link className="next-button" style={{ textDecoration: 'none' }} to="/conclusion">Next</Link>
				</div>
			</div>
		);
	}
}

export default KnowledgeBase;