import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IconButton from './IconButton';
import ReactTooltip from 'react-tooltip';

class IntroAndFlowCreation extends Component {
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
							<div className="forward-arrow">
								<p data-tip="Sources"><IconButton class_name="arrow" to="/sources" name="angle-right" /></p>
								<ReactTooltip place="bottom" type="dark" effect="float"/>
							</div>
						</div>
					</div>
					<h1 className="title">Create a Flow</h1>
					<br />
					<p>Welcome to the LeadConduit Getting Started Guide&nbsp;! This guide will walk you through the steps 
					necessary to begin receiving, enhancing, filtering and delivering leads in real time.</p>
	 				<h2> Create Your Flow </h2>
	 				<p>LeadConduit can do a lot, and the first step towards harnessing its power is <a href="https://support.activeprospect.com/hc/en-us/articles/115002511123-Logging-In-Launching-Products" target="_blank">signing-in</a>.
	 				Once you've launched LeadConduit, select the <strong>Flows</strong> button from the navigation bar.</p>
					<img className="img-background" src={require('../images/flow_button.png')} alt="Flow Button" />
					<p>Select the <strong>New Flow</strong> button and you will be taken to flow editor page where you can name your flow. Press the <strong>Save</strong> button when you are done. </p>
					<p data-tip="Click to restart"><img onClick={this.resetGif.bind(this)} className="gif-background" src={this.state.gifShowing ? require('../images/createandnameflow.gif') : require('../images/createandnameflowfalse.gif')} alt="Create Name and Flow" /></p>
					<ReactTooltip place="bottom" type="dark" effect="float"/>
					<div className="forward-arrow">
						<p data-tip="Sources"><IconButton class_name="arrow" to="/sources" name="angle-right" /></p>
						<ReactTooltip place="bottom" type="dark" effect="float"/>
					</div>
				</div>
			</div>
		);
	}
}

export default IntroAndFlowCreation;
