import React, { Component } from 'react';
import './ChapterStyles.css';
import { Link } from 'react-router-dom';
import QSSources from './QSSources';
import QSCreateFlow from './QSCreateFlow';
import QSFields from './QSFields';

class QuickStart extends Component {
	constructor() {
		super();
		this.state = {
			step_count: 0
		}
	}
	increaseStepCount() {
		this.setState({ step_count: this.state.step_count += 1 });
	}
	decreaseStepCount() {
		this.setState({ step_count: this.state.step_count -= 1 });
	}
	resetStepCount() {
		this.setState({ step_count: 0});
	}
	render() {
		var current_step;
		if (this.state.step_count === 0) {
			current_step = <QSCreateFlow 
							increaseStepCount={this.increaseStepCount.bind(this)} 
							decreaseStepCount={this.decreaseStepCount.bind(this)} 
							resetStepCount={this.resetStepCount.bind(this)} />
		}
		if (this.state.step_count === 1) {
			current_step = <QSSources 
							increaseStepCount={this.increaseStepCount.bind(this)} 
							decreaseStepCount={this.decreaseStepCount.bind(this)} 
							resetStepCount={this.resetStepCount.bind(this)} />
		}
		if (this.state.step_count === 2) {
			current_step = <QSFields 
							increaseStepCount={this.increaseStepCount.bind(this)} 
							decreaseStepCount={this.decreaseStepCount.bind(this)} 
							resetStepCount={this.resetStepCount.bind(this)} />
		}
		return(
			<div className="ancestor">
				<div className="chapter-content-body">
					{current_step}
					{/* { this.state.step_count === 1
						? <QSSources 
							increaseStepCount={this.increaseStepCount.bind(this)} 
							decreaseStepCount={this.decreaseStepCount.bind(this)} 
							resetStepCount={this.resetStepCount.bind(this)} />
						: <QSCreateFlow 
							increaseStepCount={this.increaseStepCount.bind(this)} 
							decreaseStepCount={this.decreaseStepCount.bind(this)} 
							resetStepCount={this.resetStepCount.bind(this)} />
					} */}
						
				</div>
			</div>
		);
	}
}

export default QuickStart;