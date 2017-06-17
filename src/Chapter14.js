import React, { Component } from 'react';
import './ChapterStyles.css';
import { Link } from 'react-router-dom';

class Chapter14 extends Component {
	componentDidMount () {
  		window.scrollTo(0, 0)
	}
	render() {
		return(
			<div className="ancestor">
				<div className="chapter-content-body">
					<h1 className="title">Outbound Field Mapping</h1>
					<p>Remember all that time we spent discussing inbound field mappings earlier? If you understood everything, 
					this next part will be a breeze. If you still feel like your head is spinning - this section will help 
					solidify the concept. Either way, outbound field mapping is crucial for delivering your leads successfully.</p>
					<p>Before we get started, the first thing to be aware of is that we MUST be explicit about each field value we 
					want to send to our delivery destination. As it stands right now, we're sending absolutely nothing to 'My Example 
					Delivery' other than some technical information behind the scenes.</p>
					<p>In this tutorial, our delivery destination, 'My Example Delivery', is expecting to receive the following fields:</p>
					<ol>
						<li>fname</li>
						<li>lname</li>
						<li>phone1</li>
						<li>email</li>
						<li>age</li>
						<li>sports_team</li>
						<li>phone_carrier</li>
						<li>date_submitted</li>
						<li>user_code</li>
					</ol>
					<p>Let's begin by explicitly mapping the values we are receiving for first_name, last_name, phone_1, 
					email, age, and sports_team_apis.</p>
					<img src={require('../images/outboundfieldmapping.png')} />
					<p>First, we’ll select the flow field we'd like to match up with 'fname'. Since this is a form POST, we'll need to move 
					our mouse over to the recipient field and type in 'form field'; different outbound delivery formats require us to format 
					the data appropriately. Form POSTs require that we specify the field as a ‘form field’. Take a look at our Knowledge Base 
					for more on <a href="https://support.activeprospect.com/hc/en-us/articles/216009923-LeadConduit-Outbound-Field-Mapping" target="_blank">outbound field mapping</a>.</p>
					<p>Here's how we would send a lead's value for 'first_name' to our delivery destination:</p>
					<img src={require('../images/outboundmapping2.gif')} />
					<p>Think of field mapping in LeadConduit like this: </p>
					<br/>
					<p><em>The colored field name in the left box is a capsule containing the value associated with the ‘First Name’ field. We need to send that value to our delivery 
					destination. Since our delivery destination isn’t looking out for ‘First Name’, we need to create a new capsule that will hold our value and transport it to the 
					destination in a form ‘My Example Delivery’ can understand: ‘fname’.</em></p>
					<br/>
					<p>Once we've mapped the first six values, our outbound delivery should look like this (click image to expand):</p>
					<img src={require('../images/completeoutboundmapping.png')} />
					<ol>
						<li>phone_carrier</li>
						<li>date_submitted</li>
						<li>user_code</li>
					</ol>
					<p>In the real world, you would likely have more information about what these values mean. You'd get that information from the posting instructions given to you by 
					the delivery destination. For our purposes, I'll just give you a quick explanation of what each value means.</p>
					<ol>
						<li>phone_carrier - This one is pretty straightforward. It’s the phone carrier used by the lead.</li>
						<li>date_submitted - This represents the date the lead was submitted to LeadConduit</li>
						<li>user_code - This is an ID associated with our fake 'My Example Delivery' account. Information like this is something the delivery 
						destination would provide for you.</li>		
					</ol>
					<p><strong>Note:</strong>This data was not delivered with the original lead data, but was appended to the lead after entering LeadConduit. 
					You can deliver any data appended to the lead, along with the original lead data, during your outbound delivery step.</p>
					<p>To add the outbound mapping for ‘phone_carrier’, use the Telesign field to deliver information about the lead’s carrier. If you add another flow field to your delivery, 
					you can scroll through the possible field names and you'll see that Telesign appends carrier information that you can deliver with your lead.</p>
					<img src={require('../images/telesignphone_carrier.png')} />
					<p>Select that value and map it to ‘phone_carrier’.</p>
					<img src={require('../images/telesignmapping.png')} />
					<p>Now let's send the value for date_submitted. Add another field by clicking on the 'plus' sign and scroll down until you see 'Submission Timestamp'. </p>
					<img src={require('../images/mapinternalvalues.gif')} />
					<p>LeadConduit allows you to configure your timestamps in a number of ways This short knowledge base article will give you an idea of how advanced you can get, should you need to: 
					<a href="https://support.activeprospect.com/hc/en-us/articles/214598306-LeadConduit-Advanced-Field-Mapping#customized_timestamps" target="_blank"> Customized Timestamps.</a></p>
					<p>Lastly, we need to configure our delivery step to send a ‘user_code’ value with each lead to our delivery destination. </p>
					<p>Up until this point, we’ve sent values specific to a particular lead to our delivery destination. For example, we’re sending a ‘first_name’ value for every lead, but that 
					value will be different based on user input. Our timestamp will also be lead-specific.</p>
					<p>The value for ‘user_code’ will always be the same every time because it’s specific to our delivery destination account. So we’ll need to configure our delivery to send 
					the exact same value every time. Here’s how you’ll set that up:</p>
					<img src={require('../images/user_code.gif')} />
					<p>You can see from the video above that there's no highlighting around our number. This is what we call 'hard coding'. Instead of selecting a flow field, we’ve typed in a value 
					that will be sent the same way for every lead.</p>
					<p>We've mapped all of our fields to send to 'My Example Delivery' and learned some pretty advanced tricks! If you still want to learn more about deliveries, or need a way to fully 
					cement these concepts in your mind, visit our knowledge base and check out this article: <a href="https://support.activeprospect.com/hc/en-us/articles/216009923-LeadConduit-Outbound-Field-Mapping" target="_blank">Outbound Field Mapping</a>.</p>
					<p><strong>*PRO-TIP:</strong> Our <a href="https://support.activeprospect.com/hc/en-us" target="_blank">knowledge base</a> is full of articles about LeadConduit. Get familiar with it! <strong>*</strong></p>
					<Link className="previous-button" style={{ textDecoration: 'none' }} to="/chapter13">Back</Link>
					<Link className="next-button" style={{ textDecoration: 'none' }} to="/chapter15">Next</Link>


				</div>
			</div>
		);
	}
}

export default Chapter14;