import React, { Component } from "react";
import { Link } from "react-router-dom";
import IconButton from "./IconButton";
import ReactTooltip from "react-tooltip";
import { Button } from "react-bootstrap";



class Sources extends Component {
	constructor() {
		super();
		this.state = {
			gifShowing: true,
			sourceOptions: false
		}
	}
	resetGif() {
		this.setState({gifShowing: !this.state.gifShowing})
		console.log(this.state.gifShowing);
	}
	showSourceOptions() {
		this.setState({sourceOptions: true})
	}
	hideSourceOptionsVendor() {
		this.setState({sourceOptions: false})
		this.props.handleVendorSource();
	}
	hideSourceOptionsUnbounce() {
		this.setState({sourceOptions: false})
		this.props.handleUnbounceUser();
	}
	hideSourceOptionsNonUnbounce() {
		this.setState({sourceOptions: false})
		this.props.handleNonUnbounceWebForm();
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
							<div className="back-arrow">
								<p data-tip="Introduction"><IconButton class_name="arrow" to="/introandflowcreation" name="angle-left" /></p>
								<ReactTooltip place="bottom" type="dark" effect="float"/>
							</div>
							<div className="forward-arrow">
								<p data-tip="Fields"><IconButton class_name="arrow" to="/fields" name="angle-right" /></p>
								<ReactTooltip place="bottom" type="dark" effect="float"/>
							</div>
						</div>
					</div>					
					<h1 className="title">Sources</h1>

					{(!this.props.isUsingVendor && !this.props.isUnbounceUser && !this.props.isWebformUser) &&
						<div className="source-type-prompt">
							<p style={{color: "white"}}>It looks like you haven't selected a <span style={{fontWeight: "bold", color: "white"}}>source type </span>
							 yet. Please choose from the options below. You can always change your mind by clicking the <span style={{fontWeight: "bold", color: "white"}}>Source Type</span> button at the top of the next page.</p>
							<button className="source-choice-start" onClick={this.props.handleVendorSource} style={{ textDecoration: 'none' }}>Vendor</button>
							<button className="source-choice-start" onClick={this.props.handleNonUnbounceWebForm} style={{ textDecoration: 'none' }}>Webform</button>
							<button className="source-choice-start" onClick={this.props.handleUnbounceUser} style={{ textDecoration: 'none' }}>Unbounce</button>
						</div>
					}
					
					{this.props.isUsingVendor &&
						<div>
							{this.state.sourceOptions &&
							<p><span style={{fontSize: ".7em", color: "#00d1b2", fontWeight: "bold"}}>Source Type: </span>
								<button className="source-choice-active" onClick={this.hideSourceOptionsVendor.bind(this)} style={{ textDecoration: 'none', fontSize: ".7em"  }}>Vendor</button>
								<button className="source-choice" onClick={this.hideSourceOptionsNonUnbounce.bind(this)} style={{ textDecoration: 'none', fontSize: ".7em"  }}>Webform</button>
								<button className="source-choice" onClick={this.hideSourceOptionsUnbounce.bind(this)} style={{ textDecoration: 'none', fontSize: ".7em"  }}>Unbounce</button>
							</p>
							}
							{!this.state.sourceOptions &&
								<p><span style={{fontSize: ".7em", color: "#00d1b2", fontWeight: "bold"}}>Source Type: </span> 
								<button className="source-choice" onClick={this.showSourceOptions.bind(this)} style={{ textDecoration: 'none', fontSize: ".7em" }}>Vendor</button></p>
							}
							<p>In LeadConduit, a <strong>Source</strong> typically refers to a webform or partner who generates leads and sends 
							them to your flow.</p>
			 				<p>Setting up sources for a particular flow allows you to organize your work and enables you track 
			 				and report on the health and success of a particular source of leads. If a source is sending a 
			 				significant number of bad leads to your flow, you need to know that. </p>
			 				<br/>
			 				<h2>Configure Your Source</h2>
			 				<p>If you just created your flow, you should be on the <strong>Fields</strong> tab. To work with sources, navigate to the <strong>Sources</strong> tab.</p>
			 				<p data-tip="Click to restart"><img className="gif-background" onClick={this.resetGif.bind(this)} src={this.state.gifShowing ? require("../images/fieldtosourcetabUpdate.gif") : require("../images/fieldtosourcetabUpdate2.gif")} alt="Source Tab" /></p>
			 				<ReactTooltip place="bottom" type="dark" effect="float"/>
			 				<p>On the <strong>Sources</strong> tab, you can see that LeadConduit added a default source for you. Your default 
			 				source name will be your account name.</p>
			 				<p>If you didn’t add any more sources, every incoming lead would be associated with this default source. In some 
			 				cases, if all leads are coming from your own, single form, this may be fine. However, most users want to 
			 				set up specific sources for tracking and reporting purposes. For example, if multiple partners are sending 
			 				leads into your flow, you’ll need a way to track which partner is sending what leads. Setting up sources 
			 				helps you with that.</p>
			 				<p>To add your source, begin by clicking the <strong>Add/Edit Sources</strong> button at the top left of the Sources tab. </p>
			 				<img className="img-background" src={require("../images/addSourceButtonUpdate.png")} alt="Add Source Button" /> 
			 				<h2>Standard Sources</h2>
			 				<p>After clicking this button, you will be in <strong>source editing mode</strong> where you can choose from an extensive list of lead 
			 				partners to configure as a standard source. It’s important to search this list for the lead partner you will be working 
			 				with as opposed to simply creating a custom source straight away. Selecting the standard source for your lead partner 
			 				makes the integration process much more smooth and prevents you from having to do extra work. We know how each partner likes to format their leads, and we’ve configured their 
			 				standard source to make sure those leads get delivered to you correctly.</p>
			 				<p data-tip="Click to restart"><img className="gif-background" onClick={this.resetGif.bind(this)} src={this.state.gifShowing ? require("../images/addStandardSourceUpdate.gif") : require("../images/addStandardSourceUpdate2.gif")} alt="Add Standard Source" /></p>
			 				<ReactTooltip place="bottom" type="dark" effect="float"/>
			 				<h2>Custom Sources</h2>
			 				<p>If the lead partner you are working with isn’t listed in our standard sources, you can create a custom source to 
			 				help organize your workflow.</p>
			 				<p>Click the <strong>Create New Source</strong> button to the right of the search bar. You’ll be asked whether this source of leads is 
			 				a webform. Select <strong>No</strong>, and you’ll be taken to the custom source creation screen where you can create your source.</p>
							<p data-tip="Click to restart"><img className="gif-background" onClick={this.resetGif.bind(this)} src={this.state.gifShowing ? require("../images/customvendorUpdate.gif") : require("../images/customvendorUpdate2.gif")} alt="Custom Vendor" /></p>
							<ReactTooltip place="bottom" type="dark" effect="float"/>
							<p>You will notice there are several options available when creating a source (e.g. Advanced options and recommending 
							the source as a standard source). Our recommendation is to use the Standard Inbound Integration for any custom 
							sources you create, unless you have a specific need for one of the 
							<a href="https://support.activeprospect.com/hc/en-us/sections/115000574726-Inbound-Source-Integrations" target="_blank"> more advanced inbound integrations</a>.</p>
							<p>Remember to <strong>update your Sources</strong> and <strong>save your flow</strong>!</p>
							<h2>Edit Sources</h2>
							<p>If you need to edit your custom source, you can do so by clicking the <strong>Libraries</strong> menu on the Navigation bar, 
							and selecting <strong>Sources</strong>. Find the source you want to edit, and make the desired changes.</p>
							<p data-tip="Click to restart"><img className="gif-background" onClick={this.resetGif.bind(this)} src={this.state.gifShowing ? require("../images/editCustomSourceUpdate.gif") : require("../images/editCustomSourceUpdate2.gif")} alt="Edit" /></p>
							<ReactTooltip place="bottom" type="dark" effect="float"/>
							<p>You can read more about <a href="https://support.activeprospect.com/hc/en-us/sections/115000574726-Inbound-Source-Integrations" target="_blank">adding sources </a> 
							in our knowledge base.</p>
						</div>
					}
					
					
					{this.props.isUnbounceUser &&
						<div>
							{this.state.sourceOptions &&
							<p><span style={{fontSize: ".7em", color: "#00d1b2", fontWeight: "bold"}}>Source Type: </span>
								<button className="source-choice-active" onClick={this.hideSourceOptionsUnbounce.bind(this)} style={{ textDecoration: 'none', fontSize: ".7em"  }}>Unbounce</button>
								<button className="source-choice" onClick={this.hideSourceOptionsNonUnbounce.bind(this)} style={{ textDecoration: 'none', fontSize: ".7em"  }}>Webform</button>
								<button className="source-choice" onClick={this.hideSourceOptionsVendor.bind(this)} style={{ textDecoration: 'none', fontSize: ".7em"  }}>Vendor</button>
							</p>
							}
							{!this.state.sourceOptions &&
								<p><span style={{fontSize: ".7em", color: "#00d1b2", fontWeight: "bold"}}>Source Type: </span> 
								<button className="source-choice" onClick={this.showSourceOptions.bind(this)} style={{ textDecoration: 'none', fontSize: ".7em" }}>Unbounce</button></p>
							}
							<p>In LeadConduit, a <strong>Source</strong> typically refers to a webform or partner who generates leads and sends 
							them to your flow.</p>
			 				<p>Setting up sources for a particular flow allows you to organize your work and enables you track 
			 				and report on the health and success of a particular source of leads. If a source is sending a 
			 				significant number of bad leads to your flow, you need to know that. </p>
			 				<br/>
			 				
			 				<h2>Configure Your Source</h2>
			 				<p>If you just created your flow, you should be on the <strong>Fields</strong> tab. To work with sources, navigate to the <strong>Sources</strong> tab.</p>
			 				<p data-tip="Click to restart"><img className="gif-background" onClick={this.resetGif.bind(this)} src={this.state.gifShowing ? require("../images/fieldtosourcetabUpdate.gif") : require("../images/fieldtosourcetabUpdate2.gif")} alt="Source Tab 2" /></p>
			 				<ReactTooltip place="bottom" type="dark" effect="float"/>
			 				<p>On the <strong>Sources</strong> tab, you can see that LeadConduit automatically adds a default source. Your default 
			 				source name will be your account name.</p>
			 				<p>If you didn’t add any more sources, every incoming lead would be associated with this default source. In some 
			 				cases, if all leads are coming from your own, single form, this may be fine. However, most users want to 
			 				set up specific sources for tracking and reporting purposes. For example, if you are collecting leads from multiple web forms, 
			 				you’ll need a way to know which web form generated each particular lead. Setting up sources helps you with that.</p>
			 				<p>To add your source, begin by clicking the <strong>Add/Edit Sources</strong> button at the top left of the Sources tab. </p>
			 				<img className="img-background" src={require("../images/addSourceButtonUpdate.png")} alt="Add Source Button 2" /> 
			 				
			 				<h2>Custom Sources</h2>
			 				<p>You will need to configure a custom source if you are using a <strong>webform</strong> to send leads to your LeadConduit flow. It’s worth 
			 				noting that when receiving leads from <strong>partners</strong>, we always suggest that users search the standard source list first. This 
			 				guide discusses standard sources later on in this section, but this guide will focus on setting up a custom source first since you're using a web form.</p>
							<p>To add a custom source, click the <strong>Create New Source</strong> button to the right of the search bar. You’ll be asked whether 
							this source of leads is a webform. Select <strong>Yes</strong>, and you’ll enter the webform wizard. This wizard will walk you 
							through setting up your webform as a source.</p>
							<p>You will first copy and paste the url where your webform lives.</p>
							<img className="img-background" src={require("../images/webformUrlUpdate.png")} alt="Unbounce Webform URL" />
							<p>LeadConduit has a built-in integration with <strong>Unbounce</strong>. When you copy and paste an Unbounce URL, you will be prompted to connect 
							to your Unbounce account so that LeadConduit can grab some extra information and setup the Unbounce webhook on your behalf. </p>
							<img className="img-background" src={require("../images/connectunbounceformUpdate.png")} alt="Connect Unbounce" />
							<img className="img-background" src={require("../images/unbouncewebformmessageUpdate.png")} alt="Unbounce Message" />
							<p>Click <strong>Continue</strong> and you’ll be prompted to map your fields. Field mapping is a process whereby the webform parameters that hold 
							a lead’s data are connected to a particular field in your flow. The guide discusses this concept in greater detail in 
							the <strong>Inbound Field Mapping</strong> section. For now, you simply need to understand that every field in your webform must 'connect' to a 
							flow field in LeadConduit.</p>
							<p>In this section of this source wizard, we <em>highly</em> suggest that you select a field from the dropdown menu, or search 
							for a field by typing in the input box. If you absolutely must create a custom field because nothing in the list 
							works, you can select the pencil icon beside the input box and create a custom field name.</p>
							<p>We’ll discuss why this is so important later in this guide, but suffice it to say that selecting fields from the dropdown menu 
							at this point (if at all possible) will save you a lot of time in the long run.</p>
							<p data-tip="Click to restart"><img className="gif-background" onClick={this.resetGif.bind(this)} src={this.state.gifShowing ? require("../images/unbouncefieldmappingUpdate.gif") : require("../images/unbouncefieldmappingUpdate2.gif")} alt="Unbounce Field Mapping" /></p>
							<ReactTooltip place="bottom" type="dark" effect="float"/>
							<p>Once you’ve completed the webform wizard, LeadConduit will automatically add a new source to your flow that’s named after 
							the Unbounce form. In my case, this source was named <strong>leadconduit-getting-started</strong>. It also adds the appropriate inbound mappings 
							to make sure your webform and LeadConduit’s flow fields can communicate and send/receive data.</p>
							<img className="img-background" src={require("../images/unbouncesourceaddUpdate.png")} alt="Unbounce Source Add" />
							<h2>Standard Sources</h2>
							<p>Standard sources are useful when your flow will receive leads from a lead partner and not a webform that you own. Click 
							the <strong>Add/Edit Sources</strong> button to begin adding a source to your flow. </p>
							<p>After clicking this button, you’ll be in <strong>source edit mode</strong> where you can choose from an extensive 
							list of lead partners to configure as a standard source. It’s important to search this list for the lead partner 
							you’ll be working with as opposed to simply creating a custom source straight away. Selecting the standard source 
							for your lead partner helps things move much more smoothly. We know how each partner likes to format their leads, and 
							we’ve configured their standard sources to make sure those leads get delivered to you correctly.</p>
							<p data-tip="Click to restart"><img className="gif-background" onClick={this.resetGif.bind(this)} src={this.state.gifShowing ? require("../images/addStandardSourceUpdate.gif") : require("../images/addStandardSourceUpdate2.gif")} alt="Add Standard Source 3" /></p>
							<ReactTooltip place="bottom" type="dark" effect="float"/>
							<p>Using the search feature can save you time, but you’ll need to make sure you’re spelling the partner’s name 
							exactly as it’s saved in our list. </p>
							<h2>Edit Sources</h2>
							<p>If you need to edit or remove a custom source, you can do so by clicking the Libraries menu on 
							the <strong>Navigation bar</strong>, and selecting <strong>Sources</strong>. Find the source you 
							want to edit, and make the desired changes.</p>
							<p data-tip="Click to restart"><img className="gif-background" onClick={this.resetGif.bind(this)} src={this.state.gifShowing ? require("../images/editCustomSourceUpdate.gif") : require("../images/editCustomSourceUpdate2.gif")} alt="Edit" /></p>
							<ReactTooltip place="bottom" type="dark" effect="float"/>
						</div>
					}

					{this.props.isWebformUser &&
						<div>
							{this.state.sourceOptions &&
							<p><span style={{fontSize: ".7em", color: "#00d1b2", fontWeight: "bold"}}>Source Type: </span>
								<button className="source-choice-active" onClick={this.hideSourceOptionsNonUnbounce.bind(this)} style={{ textDecoration: 'none', fontSize: ".7em"  }}>Webform</button>
								<button className="source-choice" onClick={this.hideSourceOptionsUnbounce.bind(this)} style={{ textDecoration: 'none', fontSize: ".7em"  }}>Unbounce</button>
								<button className="source-choice" onClick={this.hideSourceOptionsVendor.bind(this)} style={{ textDecoration: 'none', fontSize: ".7em"  }}>Vendor</button>
							</p>
							}
							{!this.state.sourceOptions &&
								<p><span style={{fontSize: ".7em", color: "#00d1b2", fontWeight: "bold"}}>Source Type: </span> 
								<button className="source-choice" onClick={this.showSourceOptions.bind(this)} style={{ textDecoration: 'none', fontSize: ".7em" }}>Webform</button></p>
							}
							<p>In LeadConduit, a <strong>Source</strong> typically refers to a webform or partner who generates leads and sends 
							them to your flow.</p>
			 				<p>Setting up sources for a particular flow allows you to organize your work and enables you track 
			 				and report on the health and success of a particular source of leads. If a source is sending a 
			 				significant number of bad leads to your flow, you need to know that. </p>
			 				<br/>
			 				<h2>Configure Your Source</h2>
			 				<p>If you just created your flow, you should currently be on the <strong>Fields</strong> tab. To work with our sources, navigate to the <strong>Sources</strong> tab.</p>
			 				<p data-tip="Click to restart"><img className="gif-background" onClick={this.resetGif.bind(this)} src={this.state.gifShowing ? require("../images/fieldtosourcetabUpdate.gif") : require("../images/fieldtosourcetabUpdate2.gif")}alt="Source Tab 3" /></p>
			 				<ReactTooltip place="bottom" type="dark" effect="float"/>
			 				<p>On the <strong>Sources</strong> tab, you can see that LeadConduit automatically adds a default source. Your default 
			 				source name will be your account name.</p>
			 				<p>If you didn’t add any more sources, every incoming lead would be associated with this default source. In some 
			 				cases, if all leads are coming from your own, single form, this may be fine. However, most users want to 
			 				set up specific sources for tracking and reporting purposes. For example, if you decide to set up more webforms or decide to 
			 				start receiving leads from a lead partner, you should configure a source to represent each webform or partner. </p>
			 				<p>To add your source, begin by clicking the <strong>Add/Edit Sources</strong> button at the top left of the Sources tab. </p>
			 				<img className="img-background" src={require("../images/addSourceButtonUpdate.png")} alt="Add Source Button 3" /> 
			 				<h2>Custom Sources</h2>
			 				<p>You’ll need to configure a custom source if you’re using a <strong>webform</strong> to send leads to your LeadConduit flow. It’s worth 
			 				noting that when receiving leads from <strong>partners</strong>, we always suggest that users search the standard source list first. This 
			 				guide discusses standard sources later on in this section, but since you’re working with a webform this guide will focus on that first.</p>
							<p>To add a custom source, click the <strong>Create New Source</strong> button to the right of the search bar. You’ll be asked whether 
							this source of leads is a webform. Select <strong>Yes</strong>, and you’ll enter the webform wizard. This wizard will walk you 
							through setting up your webform as a source.</p>
							<p>You’ll first copy and paste the url where your webform lives. Click <strong>Next</strong> and LeadConduit will <em>automagically</em> 
							figure out how many webforms are on your page, and what information those webforms are trying to collect. </p>
							<img className="img-background" src={require("../images/webformUrlUpdate.png")} alt="Webform URL" />
							<p>If your web page has multiple forms, the wizard will ask you to select which form you’d like to use. You can expend the details of each form to understand
							which form you'd like to use. Figuring out which form you’d like to use is an exercise in looking at which fields you’d like to collect, and choosing 
							the form where those fields live.</p>
							<img className="img-background" src={require("../images/selectFormUpdate.png")} alt="Select Form" />
							<p>Next, name this source.</p>
							<img className="img-background" src={require("../images/nameSourceUpdate.png")} alt="Name Source" />
							<p>The next part is very important. Most webforms utilize an action field to tell their form where to send information. In order 
							for your webform to send leads to your LeadConduit flow, you need to copy and paste the URL provided by LeadConduit after you 
							click Next. </p>
							<img className="img-background" src={require("../images/formActionUpdate.png")} alt="Form Action" />
							<p>By using this URL as the action for your webform, each lead that comes to LeadConduit from this form will be associated with 
							the <strong>source</strong> you’re setting up. This is crucial for understanding which leads are doing poorly/well, and where 
							they’re coming from.</p>
							<p>At this point, LeadConduit knows what fields your form is sending and what you want to name your source. Your form knows 
							where it should send leads. The last step is to enable your webform to communicate effectively with your flow. You can 
							accomplish this through <strong>field mapping</strong>.</p>
							<p>Field mapping is a process whereby the webform parameters that hold a lead’s data are connected to a particular field 
							in your flow. The guide discusses this concept in greater detail in the <strong>Inbound Field Mapping</strong> section. For 
							now, you simply need to understand that every field in your webform must ‘connect’ to a flow field in LeadConduit. </p>
							<p>In this section of this source wizard, we <em>highly</em> suggest that you select a field from the dropdown menu, or search 
							for a field by typing in the input box. If you absolutely must create a custom field because nothing in the list 
							works, you can select the pencil icon beside the input box and create a custom field name.</p>
							<p>We’ll discuss why this is so important later in this guide, but suffice it to say that selecting fields from the dropdown menu 
							at this point (if at all possible) will save you a lot of time in the long run.</p>
							<p data-tip="Click to restart"><img className="gif-background" onClick={this.resetGif.bind(this)} src={this.state.gifShowing ? require("../images/fieldSelectionWebformWizardUpdate.gif") : require("../images/fieldSelectionWebformWizardUpdate2.gif")} alt="Selection Fields" /></p>
							<p>Once you’ve mapped your fields, click <strong>Continue</strong>. Click the blue <strong>Update Sources</strong> button in 
							the upper right corner, and then <strong>Save</strong> your flow. </p>
							<p>You now have two sources on your source tab. The default source, and the webform source you just added. Also, you’ll 
							have mappings in place for this webform source. </p>
							<img className="img-background" src={require("../images/newlyAddedSourceUpdate.png")} alt="Newly Added Source 2" />
							<p>Click on the <strong>Mappings</strong> link beside the source, and you can see how the source wizard has configured 
							the connection between your webform and your LeadConduit flow. </p>
							<p>These mappings are source specific, and you’ll (likely) need to set up new mappings for each new source you add to this 
							flow. As previously mentioned, this guide goes into greater detail on inbound field mappings in upcoming sections.</p>
							<br/>
							<h2>Standard Sources</h2>
							<p>Standard sources are useful when your flow will receive leads from a lead partner and not a webform that you own. Click 
							the <strong>Add/Edit Sources</strong> button to begin adding a source to your flow. </p>
							<p>After clicking this button, you’ll be in <strong>source edit mode</strong> where you can choose from an extensive 
							list of lead partners to configure as a standard source. It’s important to search this list for the lead partner 
							you’ll be working with as opposed to simply creating a custom source straight away. Selecting the standard source 
							for your lead partner helps things move much more smoothly. We know how each partner likes to format their leads, and 
							we’ve configured their standard sources to make sure those leads get delivered to you correctly.</p>
							<p data-tip="Click to restart"><img className="gif-background" onClick={this.resetGif.bind(this)} src={this.state.gifShowing ? require("../images/addStandardSourceUpdate.gif") : require("../images/addStandardSourceUpdate2.gif")} alt="Add Standard Source 3" /></p>
							<ReactTooltip place="bottom" type="dark" effect="float"/>
							<p>Using the search feature can save you time, but you’ll need to make sure you’re spelling the partner’s name 
							exactly as it’s saved in our list. </p>
							<h2>Edit Sources</h2>
							<p>If you need to edit or remove a custom source, you can do so by clicking the Libraries menu on 
							the <strong>Navigation bar</strong>, and selecting <strong>Sources</strong>. Find the source you 
							want to edit, and make the desired changes.</p>
							<p data-tip="Click to restart"><img className="gif-background" onClick={this.resetGif.bind(this)} src={this.state.gifShowing ? require("../images/editCustomSourceUpdate.gif") : require("../images/editCustomSourceUpdate2.gif")} alt="Edit" /></p>
							<ReactTooltip place="bottom" type="dark" effect="float"/>
						</div>
					}
					{(this.props.isUsingVendor || this.props.isUnbounceUser || this.props.isWebformUser) &&
					<div className="arrow-wrapper">
						<div className="inner-arrow-wrapper">
							<div className="back-arrow">
								<p data-tip="Introduction"><IconButton class_name="arrow" to="/introandflowcreation" name="angle-left" /></p>
								<ReactTooltip place="bottom" type="dark" effect="float"/>
							</div>
							<div className="forward-arrow">
								<p data-tip="Fields"><IconButton class_name="arrow" to="/fields" name="angle-right" /></p>
								<ReactTooltip place="bottom" type="dark" effect="float"/>
							</div>
						</div>
					</div>	
					}
				</div>
			</div>
		);
	}
}

export default Sources;
