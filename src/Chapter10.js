import React, { Component } from 'react';
import './ChapterStyles.css';
import { Link } from 'react-router-dom';

class Chapter10 extends Component {
	componentDidMount () {
  		window.scrollTo(0, 0)
	}
	render() {
		return(
			<div className="ancestor">
				<div className="chapter-content-body">
					<h1 className="title">Steps</h1>
					<p>The 'Steps' tab is my absolute favorite tab, so I hope you're as excited as I am to get started on creating your steps. 
					'Steps' is where you get to set up your flow logic and really start leveraging the full power of LeadConduit.</p>
					<p>I like to think about steps as a friendly postman. Imagine you have an unusually close friendship with your postman 
					(perhaps you actually do). In fact, you're so close that you have given your postman permission to open your mail. 
					On top of that, you've given him instructions regarding which mail he can just throw straight into the trash. 
					And he's agreed to do this because he's a genuinely sweet guy. He's <strong>filtering</strong> your mail for you.</p>
					<p>	This system works out for a while, and you decide that you'd 
					actually like to ask your postman to further enhance your mail. For example, if you receive a card from your grandma and she 
					wants photos of the kids, perhaps the postman can print out some photos for you and include those inside your envelope before 
					he hands it to you. That way, you don’t have to spend time picking out photos for grandma because he’s already done it for you. 
					Also, he’s got great taste, so the photo selection is top-notch. The postman is <strong>enhancing</strong> your mail-receiving experience.</p>
					<p>Lastly, you decide that it's way too much of a hassle to go to your mailbox or doorstep to receive your mail, so you give the postman a set 
					of keys to your house so that he can <strong>deliver</strong> your mail directly to your living room armchair. What a guy. I wonder how much a service like this 
					would cost? I need to find a good postman first.</p>
					<p>If you're in the lead business, you don't need to make friends with a postman at all because LeadConduit can do all these things for you. LeadConduit flows can <strong>filter</strong>, <strong>enhance</strong>, and <strong>deliver</strong> your leads.</p>
					<p>Dive into our knowledge base for <a href="https://support.activeprospect.com/hc/en-us/articles/202822955-LeadConduit-Adding-Steps-to-a-Flow" target="_blank">an overview of steps</a>.</p>
					<img src={require('../images/accessingpostinginstructions.gif')} />
					
					<Link className="previous-button" style={{ textDecoration: 'none' }} to="/chapter9">Back</Link>
					<Link className="next-button" style={{ textDecoration: 'none' }} to="/chapter11">Next</Link>
				</div>
			</div>
		);
	}
}

export default Chapter10;