import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SourcePartners extends Component {
	componentDidMount () {
  		window.scrollTo(0, 0)
	}
	render() {
		return(
			<div className="ancestor">
				<div className="chapter-content-body">
					<h1 className="title">Sources</h1>
					<p>At the most basic level, sources simply represent where your leads come from. Sources typically 
					refer to a webform you own, or a partner who is generating leads and sending them into your flow.</p>
	 				<p>Setting up sources for a particular flow allows you to organize your work. Instead of all leads 
	 				coming into your flow from a single default source, setting up sources allows you to track and report 
	 				on the health and success of a particular source of leads. If a source is sending a significant number 
	 				of bad leads to your flow, you need to know that. Figuring out where the bad leads are coming from can 
	 				be a headache if you don't set up your sources properly.</p>
	 				<br/>
	 				<h2>Configure Your Source</h2>
	 				<p>If you just created your flow, you should be on the 'Fields' tab. To work with our sources, we'll 
	 				need to navigate to our 'Sources' tab.</p>
	 				<img src={require('../images/sourcetab.gif')} />
	 				<p>On the 'Sources' tab, you can see that LeadConduit added a default source for you. Your default 
	 				source name will be your account name.</p>
	 				<p>If you didn't add any more sources, every incoming lead would be associated with this default source. In some 
	 				cases, if all leads are coming from your own, single form, this may be fine. However, most users want to 
	 				set up specific sources for tracking and reporting purposes. For example, if multiple partners are sending 
	 				leads into your flow, you’ll need a way to track which partner is sending what leads. Setting up sources 
	 				helps you with that.</p>
	 				<p>To begin adding your source, click the 'Add/Edit Sources' button at the top left of the 'Sources' tab.</p>
	 				<img src={require('../images/addsourcebutton.png')} /> 
	 				<h2>Standard Sources</h2>
	 				<p>After clicking this button, you’ll be in ‘source edit mode’ where you can choose from an extensive list of lead 
	 				partners to configure as a standard source. It’s important to search this list for the lead partner you’ll be working 
	 				with as opposed to simply creating a custom source straight away. Selecting the standard source for your lead partner 
	 				helps things move much more smoothly. We know how each partner likes to format their leads, and we’ve configured their 
	 				standard source to make sure those leads get delivered to you correctly.</p>
	 				<img src={require('../images/addstandardsource.gif')} /> 
	 				<p>Using the search feature can save you time, but you’ll need to make sure you’re spelling the partner’s name 
	 				exactly as it’s saved in our list.</p>
	 				<img src={require('../images/searchsources.gif')} /> 
	 				<h2>Custom Sources</h2>
	 				<p>If the lead partner you’re working with isn’t listed in our standard sources, you can create a custom source to 
	 				help organize your workflow.</p>
	 				<p>Click the ‘Create New Source’ button to the right of the search bar. You’ll be asked whether this source of leads is 
	 				a webform. Select ‘No’, and you’ll be taken to the custom source creation screen where you can create your source.</p>
					<img src={require('../images/customvendor.gif')} />
					<p>You'll notice there are several options available when creating a source (e.g. Advanced options and recommending 
					the source as a standard source). Our recommendation is to use the Standard Inbound Integration for any custom 
					sources you create, unless you have a specific need for one of the 
					<a href="https://support.activeprospect.com/hc/en-us/sections/115000574726-Inbound-Source-Integrations" target="_blank"> more advanced inbound integrations</a>.</p>
					<p>Remember to <strong>update your Sources</strong> and <strong>save your flow</strong>!</p>
					<h2>Edit Sources</h2>
					<p>If you need to edit your custom source, you can do so by clicking the Libraries menu on the Navigation bar, 
					and selecting Sources. Find the source you want to edit, and make the desired changes.</p>
					<img src={require('../images/editcustomsource.gif')} />
					<p>You can read more about <a href="https://support.activeprospect.com/hc/en-us/sections/115000574726-Inbound-Source-Integrations" target="_blank">adding sources </a> 
					in our knowledge base.</p>
					<Link className="previous-button" style={{ textDecoration: 'none' }} to="/signingin">Back</Link>
					<Link className="next-button" style={{ textDecoration: 'none' }} to="/chapter2">Next</Link>			
				</div>
			</div>
		);
	}
}

export default SourcePartners;
