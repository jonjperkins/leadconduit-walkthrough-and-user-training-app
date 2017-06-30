import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ChapterStyles.css';

class Intro2 extends Component {
	render() {
		return(
			<div className="ancestor">
				<div className="chapter-content-body">
				<h1 className="title">Meet LeadConduit</h1>
				<p>The LeadConduit platform is a real-time data integration hub used to build sophisticated lead 
				flows to meet the unique needs of your business. Lead flows allow you to capture, enhance, filter 
				and deliver leads to any combination of systems according to custom logic you define.</p>
				<img src={require('../images/flowdiagram.png')} />
				<p>Get started by answering a few quick questions that will help us tailor this tutorial to fit your needs.</p>
				<Link className="next-button" style={{ textDecoration: 'none' }} to="/isthisawebform">Begin</Link>
				</div>
			</div>
		);
	}
}

export default Intro2;