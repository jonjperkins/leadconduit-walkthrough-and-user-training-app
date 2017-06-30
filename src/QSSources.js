import React, { Component } from 'react';
import './ChapterStyles.css';
import { Link } from 'react-router-dom';

class QSSources extends Component {
	constructor() {
		super();
		this.state = {
			expand_1: false,
			expand_2: false,
			expand_3: false
		}
	}
	expand1() {
		this.setState({expand_1: !this.state.expand_1})
	}
	expand2() {
		this.setState({expand_2: !this.state.expand_2})
	}
	expand3() {
		this.setState({expand_3: !this.state.expand_3})
	}
	render() {
		return(
				<div className="sizer">
					<h1>Add Sources to Your Flow</h1>
						<div className="quickstart">
							<br/>
							<ol>
								<li>Click on the ‘Sources’ tab, and then ‘Add/Edit Sources’ in the upper right corner.</li>
								<h5> <strong onClick={this.expand1.bind(this)} className="more-button">More</strong></h5>
								<p className={this.state.expand_1 ? "show" : "hide"}>
								<img src={require('../images/qsaddsource.gif')} />
							</p>
								<li>From the Sources page, you can search for existing sources using the search bar, or you 
								can scroll down the page to see the complete list of sources. Check the boxes for any existing 
								sources you wish to use in the flow, or click ‘Create New Source’ at the top of the screen to 
								add a source that does not appear in the list.</li>
								<h5> <strong onClick={this.expand2.bind(this)} className="more-button">More</strong></h5>
								<p className={this.state.expand_2 ? "show" : "hide"}>
								<img src={require('../images/qscreatesourcebutton.gif')} />
								</p>
								<li>Add a name and description for the new source and expand the ‘Advanced’ tab to add integrations, 
								then click ‘Create’.</li>
								<h5> <strong onClick={this.expand3.bind(this)} className="more-button">More</strong></h5>
								<p className={this.state.expand_3 ? "show" : "hide"}>
								<img src={require('../images/qscreatecustomsource.gif')} />
								</p>
							</ol>
							<div className="quickstart-buttons-div">
								<button className="quickstart-button" style={{ textDecoration: 'none' }} onClick={this.props.decreaseStepCount}>Back</button>
								<button className="quickstart-button" style={{ textDecoration: 'none' }} onClick={this.props.increaseStepCount}>Next</button>
						</div>				
					</div>
				</div>

		);
	}
}

export default QSSources;