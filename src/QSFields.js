import React, { Component } from 'react';
import './ChapterStyles.css';
import { Link } from 'react-router-dom';

class QSFields extends Component {
	componentDidMount() {

	}
	render() {
		return(
				<div className="sizer">
					<h1>Add Fields to Your Flow</h1>
						<div className="quickstart">
							<br/>
							
								<div className="field-vendor-form">
									<button className="field-vendor-form-button" style={{ textDecoration: 'none' }} onClick={this.props.decreaseStepCount}>Lead Vendor</button>
									<button className="field-vendor-form-button" style={{ textDecoration: 'none' }} onClick={this.props.increaseStepCount}>Web Form</button>
								</div>	
							
							<p>test</p>
							
							<div className="quickstart-buttons-div">
								<button className="quickstart-button" style={{ textDecoration: 'none' }} onClick={this.props.decreaseStepCount}>Back</button>
								<button className="quickstart-button" style={{ textDecoration: 'none' }} onClick={this.props.increaseStepCount}>Next</button>
							</div>				
						</div>
				</div>

		);
	}
}

export default QSFields;