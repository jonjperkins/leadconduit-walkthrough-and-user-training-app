import React, { Component } from 'react';
import './ChapterStyles.css';
import { Link } from 'react-router-dom';

class Homepage extends Component {
	render() {
		return(
			<div className="ancestor">
				<div className="chapter-content-body">
					<h1 className="title">Getting Started with LeadConduit</h1>	
					<div className="homepage-buttons">
						<div className="button-div">
							<Link className="tutorial-button" style={{ textDecoration: 'none' }} to="/quickstart">Quick Start</Link>
						</div>
						<div className="button-div">
							<Link className="tutorial-button" style={{ textDecoration: 'none' }} to="/intro">Full Tutorial</Link>			
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Homepage;