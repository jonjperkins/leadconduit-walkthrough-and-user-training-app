import React, { Component } from 'react';
import './ChapterStyles.css';
import { Link } from 'react-router-dom';

class Chapter3 extends Component {
	render() {
		return(
			<div className="ancestor">
				<div className="chapter-content-body">
					<h1 className="title">Create Your Flow</h1>
					<p>On the homepage, you can access your flows page by clicking the 'Flows' link on the navigation bar:</p>
					<img src={require('../images/accessflows.png')} />
					<p>The 'Flows' page gives you easy access to all of your flows as well as several flow-specific features including:</p>
					<p>
						1. Create a new flow<br/>
						2. A list of your current flows<br/>
						3. Edit or delete a flow<br/>
						4. View the history of changes made to a flow<br/>
						5. Enable or disable a flow<br/>
					</p>
					<img src={require('../images/flow_page.png')} />
					<p>For this tutorial, we'll click the 'New Flow' button to create a new flow. Clicking that button will put you in editing mode.</p>
					<img src={require('../images/newflow.gif')} />
					<p>You've just created your first flow - great job! Let's talk about what you're seeing. Right now, you're currently looking at the 'Fields' tab of your new LeadConduit flow. 
					We know that because the 'Fields' tab is highlighted.</p>
					<img src={require('../images/field_tab.png')} />
					<p>Let's start by giving our flow a name. New flows start out with the name 'New Flow' followed by the date and time of creation. 
					We’ll change the name of our flow to  ‘My Example Flow’.</p>
					<p>To change the name, click on the pencil icon beside the name of the flow.</p>
					<img src={require('../images/name_flow.png')} />
					<p>Type in 'My Example Flow' and press 'enter'. Your flow page should now look something like this:</p>
					<img src={require('../images/newly_named_flow.png')} />
					<p>Whenever you make changes to your LeadConduit flow, you will need to save those changes to prevent them from 
					being lost when you navigate away from the flow you're working on. You can save your flow by clicking the 'Save' 
					button in the upper right-hand corner of the screen. If the ‘Save’ button isn’t clickable, 
					then there haven’t been any changes made to your flow since your last save.</p>
					<img src={require('../images/saveflow.gif')} />
					<Link className="previous-button" style={{ textDecoration: 'none' }} to="/chapter2">Back</Link>
					<Link className="next-button" style={{ textDecoration: 'none' }} to="/chapter4">Next</Link>
				</div>
			</div>
		);
	}
}

export default Chapter3;