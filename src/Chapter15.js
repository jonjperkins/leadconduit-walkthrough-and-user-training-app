import React, { Component } from 'react';
import './ChapterStyles.css';
import { Link } from 'react-router-dom';

class Chapter15 extends Component {
	componentDidMount () {
  		window.scrollTo(0, 0)
	}
	render() {
		return(
			<div className="ancestor">
				<div className="chapter-content-body">
					<h1 className="title">Response Parsing</h1>
					<p>We're sending all of this juicy information to our delivery destination, but how do we know whether the 
					destination is receiving the information we're sending? <strong>Response parsing</strong> to the rescue!</p>
					<p><em>Don't glaze over on me, we're almost at the end - and this part is really important!</em></p>
					<p>Whenever you send information to an endpoint, the server (which is basically just the place that houses 
					all the info we're sending) will send you a response back. The server sends status codes (which we'll 
					ignore for now), but it also sends messages that are human readable like 'Success' or 'Accepted'. 
					LeadConduit can search for these words to determine whether or not the lead was successfully sent and accepted.</p>
					<p>We’ll set this up on our delivery step by adding another field and clicking the down-arrow button on the recipient box. 
					Scroll down and select for ‘Outcome Search Term’. This is where we set what LeadConduit should look for to determine whether 
					or not a lead was successfully delivered. Once again, this is a fake destination, so I’ll just tell you that we should be 
					looking for ‘Success’. The actual response we’ll get is: <strong>“Success”: true</strong>.</p>
					<p>This poses a little problem for us. We can’t just tell LeadConduit to look for ‘Success’ because that would catch responses 
					like <em>“Success”: false</em> which isn’t a successful delivery at all. We probably shouldn’t just search for true either, because true 
					by itself has no context. You technically <em>could</em> just search for 'true' for the purposes of this tutorial, but let’s try to be 
					as exact as possible.</p>
					<p>Set your ‘Outcome Search Term’ to look for the entire response body: <strong>“Success”: true</strong>. If LeadConduit sees this in the response,
					 we’ll know for sure that the lead was delivered successfully.</p>
					<img src={require('../images/responseparse.gif')} />
					<p>Response parsing isn’t always so straightforward, so we’ve written a comprehensive article in our knowledge base that 
					will help you navigate the more difficult scenarios: <a href="https://support.activeprospect.com/hc/en-us/articles/217517686-LeadConduit-Response-Parsing" target="_blank">Response Parsing</a>.</p>
					<p>Here’s what our final outbound delivery step should look like:</p>
					<img src={require('../images/finalresponseparsing.png')} />
					<Link className="previous-button" style={{ textDecoration: 'none' }} to="/chapter14">Back</Link>
					<Link className="next-button" style={{ textDecoration: 'none' }} to="#">Next</Link>
				</div>
			</div>
		);
	}
}

export default Chapter15;