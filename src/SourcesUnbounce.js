import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SourcesUnbounce extends Component {
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
	 				<p>If you just created your flow, you should currently be on the <strong>Fields</strong> tab. To work with our sources, you'll 
	 				need to navigate to our <strong>Sources</strong> tab.</p>
	 				<img src={require('../images/sourcetab.gif')} />
	 				<p>On the <strong>Sources</strong> tab, you can see that LeadConduit automatically adds a default source. Your default 
	 				source name will be your account name.</p>
	 				<p>If you didn't add any more sources, every incoming lead would be associated with this default source. In some 
	 				cases, if all leads are coming from your own, single form, this may be fine. However, most users want to 
	 				set up specific sources for tracking and reporting purposes. For example, if you decide to set up more webforms or decide to 
	 				start receiving leads from a lead partner, you should configure a source to represent each web form or partner. </p>
	 				<p>To add your source, begin by clicking the <strong>Add/Edit Sources</strong> button at the top left of the Sources tab. </p>
	 				<img src={require('../images/addsourcebutton.png')} /> 
	 				
	 				<h2>Custom Sources</h2>
	 				<p>You’ll need to configure a custom source if you’re using a <strong>web form</strong> to send leads to your LeadConduit flow. It’s worth 
	 				noting that when receiving leads from <strong>partners</strong>, we always suggest that users search the standard source list first. This 
	 				guide discusses standard sources later on in this section, but since you’re working with a web form we’ll focus on that first.</p>
					<p>To add a custom source, click the <strong>Create New Source</strong> button to the right of the search bar. You’ll be asked whether 
					this source of leads is a webform. Select <strong>Yes</strong>, and you’ll enter the web form wizard. This wizard will walk you 
					through setting up your web form as a source.</p>
					<p>You’ll first copy and paste the url where your web form lives.</p>
					<img src={require('../images/unbouncewebformurl.png')} />
					<p>LeadConduit has a built-in integration with <strong>Unbounce</strong>, so when you copy and paste an Unbounce URL, you’ll be prompted to connect 
					to your Unbounce account so that LeadConduit can grab some extra information and setup the Unbounce webhook on your behalf. </p>
					<img src={require('../images/connectunbounceform.png')} />
					<img src={require('../images/unbouncewebformmessage.png')} />
					<p>Click <strong>Continue</strong> and you’ll be prompted to map your fields. Field mapping is a process whereby the web form parameters that hold 
					a lead’s data are connected to a particular field in your flow. The guide discusses this concept in greater detail in 
					the <strong>Inbound Field Mapping</strong> section. For now, you simply need to understand that every field in your web form must ‘connect’ to a 
					flow field in LeadConduit.</p>
					<p>In this section of this source wizard, we <em>highly</em> suggest that you select a field from the dropdown menu, or search 
					for a field by typing in the input box. If you absolutely must create a custom field because nothing in the list 
					works, you can select the pencil icon beside the input box and create a custom field name.</p>
					<p>We’ll discuss why this is so important later in this guide, but suffice it to say that selecting fields from the dropdown menu 
					at this point (if at all possible) will save you a lot of time in the long run.</p>
					<img src={require('../images/unbouncefieldmapping.gif')} />
					<p>Once you’ve completed the web form wizard, LeadConduit will automatically add a new source to your flow that’s named after 
					the Unbounce form. In my case, this source was named <strong>leadconduit-getting-started</strong>. It also adds the appropriate inbound mappings 
					to make sure your web form and LeadConduit’s flow fields can communicate and send/receive data.</p>
					<img src={require('../images/unbouncesourceadd.png')} />
					<p>Click on the Mappings link beside the source, and you can see how the source wizard has configured the connection between your 
					web form and your LeadConduit flow. </p>
					<img src={require('../images/unbounceinboundmappings.png')} />
					<p>You now have two sources on your source tab. The default source, and the web form source you just added. Also, you’ll 
					have mappings in place for this web form source. </p>
					<img src={require('../images/newlyaddedsource.png')} />
					<p>These mappings are source specific, and you’ll (likely) need to set up new mappings for each new source you add to this flow. As previously 
					mentioned, this guide goes into greater detail on inbound field mappings in upcoming sections. </p>
					
					<h2>Standard Sources</h2>
					<p>Standard sources are useful when your flow will receive leads from a lead partner and not a webform that you own. Click 
					the <strong>Add/Edit Sources</strong> button to begin adding a source to your flow. </p>
					<p>After clicking this button, you’ll be in <strong>source edit mode</strong> where you can choose from an extensive 
					list of lead partners to configure as a standard source. It’s important to search this list for the lead partner 
					you’ll be working with as opposed to simply creating a custom source straight away. Selecting the standard source 
					for your lead partner helps things move much more smoothly. We know how each partner likes to format their leads, and 
					we’ve configured their standard sources to make sure those leads get delivered to you correctly.</p>
					<img src={require('../images/addstandardsource.gif')} />
					<p>Using the search feature can save you time, but you’ll need to make sure you’re spelling the partner’s name 
					exactly as it’s saved in our list. </p>
					<img src={require('../images/searchsources.gif')} />
					<h2>Edit Sources</h2>
					<p>If you need to edit or remove a custom source, you can do so by clicking the Libraries menu on 
					the <strong>Navigation bar</strong>, and selecting <strong>Sources</strong>. Find the source you 
					want to edit, and make the desired changes.</p>
					<img src={require('../images/editcustomsource.gif')} />
					<Link className="previous-button" style={{ textDecoration: 'none' }} to="/signingin">Back</Link>
					<Link className="next-button" style={{ textDecoration: 'none' }} to="/chapter2">Next</Link>			
				</div>
			</div>
		);
	}
}

export default SourcesUnbounce;
