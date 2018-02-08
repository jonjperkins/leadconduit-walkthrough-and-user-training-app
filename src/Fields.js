import React, { Component } from "react";
import { Link } from "react-router-dom";
import IconButton from "./IconButton";
import ReactTooltip from "react-tooltip";

class Fields extends Component {
	constructor() {
		super();
		this.state = {
			gifShowing: true
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
								<p data-tip="Sources"><IconButton class_name="arrow" to="/sources" name="angle-left" /></p>
								<ReactTooltip place="bottom" type="dark" effect="float"/>
							</div>
							<div className="forward-arrow">
								<p data-tip="Inbound Field Mapping"><IconButton class_name="arrow" to="/inbound-field-mapping" name="angle-right" /></p>
								<ReactTooltip place="bottom" type="dark" effect="float"/>
							</div>
						</div>
					</div>
					<h1 className="title">Fields</h1>

					{(!this.props.isUsingVendor && !this.props.isUnbounceUser && !this.props.isWebformUser) &&
						<div className="source-type-prompt">
							<p style={{color: "white"}}>It looks like you haven't selected a <span style={{fontWeight: "bold", color: "white", fontSize: "1.1em"}}>source type </span>
							 yet. Please select from the options below.</p>
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
							<p>In LeadConduit, Fields define what kind of data your flow can receive from a lead vendor or web form. Data in 
							a field is actionable i.e. you can make decisions based on it, and you can send it out to various 
							types of recipients. If a lead vendor or your web form submits a parameter that does not match a 
							defined field, that parameter will not cause problems, but LeadConduit will not capture it or be 
							able to do anything with it.</p>
			 				<p>Deciding what fields to add to your flow is typically determined by both the data you’re required 
			 				to collect, and the optional data you’d like to collect. For example, if you’d like to deliver leads 
			 				to a MailChimp account, you’ll be required to collect an email address, but you can also collect other 
			 				data like first name and last name. For (almost) every piece of data you’d like to collect, you need 
			 				a field to ‘hold’ that data.</p>
			 				<br/>
			 				<h2>Preparation</h2>
			 				<p>Make a list of the fields you must collect, and the fields you would like to collect. Then navigate to 
			 				your flow’s <strong>Fields tab</strong> by clicking on the Fields tab below your flow’s name. </p>
			 				<img className="img-background" src={require("../images/FieldsTab.png")} alt="Fields Tab" />
			 				<p>When you created your flow, these 10 fields were added by default:</p>
			 				<img className="img-background" src={require("../images/DefaultFields.png")} alt="Default" />
			 				<p>Since you’ve already performed your prep work, you’ll be able to determine whether or not you need 
			 				all of these fields in your flow. Although it won’t hurt anything to leave these fields in your flow 
			 				without using them, when working with a lead partner it’s best to only list fields in your flow that you 
			 				actually want to collect. The fields in this list will show up in the posting instructions you’ll 
			 				eventually send to your partner.</p>
			 				<br />
			 				<h2>Adding and Editing Fields</h2>
			 				<p>To add or edit your existing fields, click the <strong>Add/Edit Fields</strong> button in the upper right corner.</p>
							<img className="img-background" src={require("../images/AddEditFields.png")} alt="Add Fields" />
							<p>Clicking that button will take you to a page where you can update the fields in the flow. Beside each field name, 
							you’ll now see a check-box where a green check mark indicates that the field is currently in use in your flow.  </p>
							<p>Uncheck all of the checkboxes you don’t need. Then update your changes by clicking the <strong>Update Fields </strong> 
							button and <strong>Saving</strong> your work. </p>
							<p data-tip="Click to restart"><img onClick={this.resetGif.bind(this)} className="gif-background" src={this.state.gifShowing ? require("../images/editingfields.gif") : require("../images/editingfieldsfalse.gif")} alt="Edit Fields" /></p>
							<ReactTooltip place="bottom" type="dark" effect="float"/>
							<br />
							<h2>Standard Fields</h2>
							<p>Click the <strong> Add/Edit Fields</strong> button again and search our list of standard fields to find fields that meet your needs. 
							It’s important to note here that picking a standard field is always preferred to creating a custom field. Using 
							standard fields, when possible, helps streamline using our built-in integrations in your flow and can save you from 
							needless configurations in the future. </p>
							<p>Keep in mind that when searching for fields you can scroll through the list of fields or use the search bar. When 
							using the search bar, make sure you use correct spelling and feel free to use shortened versions of the name you’re 
							looking for (e.g. <strong>phone</strong> instead of <strong>company phone</strong>).</p>
							<p>Check the box beside the field names you want to add to your flow. Update your fields and save your flow.</p> 
							<p data-tip="Click to restart"><img onClick={this.resetGif.bind(this)} className="gif-background" src={this.state.gifShowing ? require("../images/search_fields.gif") : require("../images/search_fieldsfalse.gif")} alt="Search Fields" /></p>
							<ReactTooltip place="bottom" type="dark" effect="float"/>
							<p>Fields with a <strong>green checkmark</strong> are already added to your flow (or about to be added once you update), and fields with a 
							<strong> green circle</strong> are being used in another flow in your account.</p>
							<br />
							<h2>Custom Fields</h2>
							<p>If you simply can’t find a field that works, you can create a custom field for you flow.</p>
							<img className="img-background" id="webform-example" src={require("../images/custom_fields.png")} alt="Custom Fields" />
							<p>Click on the <strong>Create New Field</strong> button. Custom Fields are defined and visible only within your account, and are 
							available to any flow in your account.</p>
							<p>The first time you create a Custom Field, you will be prompted to create a <a href="https://support.activeprospect.com/hc/en-us/articles/209693173-Custom-Fields" target="_blank"> custom suffix</a> 
							that will be appended to all custom fields. Choose your custom suffix carefully as it 1) will be seen by vendors when you provide them their Posting Instructions and 
							2) is problematic to change later.</p>
							<p>After you create your suffix, you’ll be prompted with a window where you can create your custom field. </p>
							<img className="img-background" id="webform-example" src={require("../images/custom_field_modal.png")} alt="Custom Modal" />
							<p>Once you fill out the information, click the <strong>Create</strong> button. You’ll be taken back to the update fields page 
							where you will click the blue <strong>Update Fields</strong> button once again.</p>
							<p>Custom Fields are shown in a darker blue than LeadConduit Standard Fields, so they are easy to distinguish at a glance.</p>
							<img className="img-background" id="webform-example" src={require("../images/final_field_page.png")} alt="Final Fields" />
							<p>Remember to <strong>update</strong> your fields and <strong>save</strong> your work.</p>
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
							<p>The beauty of using LeadConduit’s <strong>web form wizard</strong> is that it performs almost all 
							of the work for you! Assuming you used the wizard, <strong>your fields and the required inbound 
							field mappings are already in place</strong>! Since your fields and mappings are all set up, this 
							section is dedicated to helping you understand what’s really going on behind the scenes 
							and why proper field selection and configuration is so important. By using the wizard you 
							do <strong>not</strong> need need to set these fields up yourself. This section will be here for your overall 
							ability to understand what’s happening between your web form and flow.</p>
							<p>Even if a webform is configured to send leads to your LeadConduit flow through the form’s action element, 
							LeadConduit needs to know what parameters will be sent so it knows what to look for and collect that data.</p>
							<img className="img-background" id="webform-example" src={require("../images/field_hat_men.png")} alt="Field Hat Men" />
							<p>Here’s how a typical web form might look to a user. Text like <strong>First Name</strong> or <strong>Phone Number</strong> are 
							called labels. They make it easier for a user to interact with a form, and make the whole process a bit prettier. </p>
							<img className="img-background" id="webform-example" src={require("../images/webform.png")} alt="Web Form" />
							<p>These labels help the user understand what kind of data they need to input into the form, but labels are 
							not the vessels for sending this data - that’s a job for <strong>input names</strong>. Input names are 
							the uglier version of these labels. They represent the category of data being sent, and they’re uglier 
							to humans because they’re concerned with meeting the requirements of being sent across the internet via 
							HTTP. It doesn’t matter what they look like because users won’t see these values when they fill 
							out a webform.</p>
							<p>Here’s the more relevant details of what’s happening behind the scenes with fields. Below, we have 
							the same web form. This time we’re showing the input names that will house the user data and be sent to 
							a LeadConduit flow as long as the form’s action is configured properly.</p>
							<img className="img-background" id="webform-example" src={require("../images/field_param_compare.png")} alt="Field Compare" />
							<p>Notice that although the form label shows <strong>First Name</strong>, the actual form input 
							field name that will be sent as a parameter to LeadConduit (along with the user inputted value, 
							of course) is <strong>first_name</strong>. This is the case for many of the other fields as well.</p>
							<p>Note also that LeadConduit has a few field IDs set up in a hypothetical flow. The section 
							on <strong>inbound field mapping</strong> will discuss in greater detail how we get these two 
							sets of fields to communicate with each other even though they’re using different names to hold 
							the associated values. </p>
							<br/>
							<h2>Add a Field</h2>
							<p>Which fields you add to your flow will be based on what sort of input names your form is using to 
							send these values to LeadConduit. It’s worth noting up front that you should <strong>always use a LeadConduit 
							standard field if you can</strong>. Using standard fields makes a huge difference in streamlining your 
							ability to configure your flow with enhancements and deliveries later on. It will save you time, and make 
							for a more efficient flow long term. </p>
							<p>Add a field to your flow by clicking the <strong>Add/Edit Fields</strong> button on your flow’s <strong>Fields tab</strong>.</p>
							<img className="img-background" src={require("../images/FieldsTab.png")} alt="Fields Tab 2" />
							<img className="img-background" src={require("../images/AddEditFields.png")} alt="Edit Fields 2"/>
							<p>Clicking that button will take you to a page where you can update the fields in the flow. Beside each field 
							name, you’ll now see a check-box where a green check mark indicates that the field is currently in use in your flow. </p>
							<p>Keep in mind that when searching for fields you can scroll through the list of fields or use the search bar. When using 
							the search bar, make sure you use correct spelling and feel free to use shortened versions of the name you’re looking for 
							(e.g. <strong>phone</strong> instead of <strong>company phone</strong>). </p>
							<p>Check the box beside the field names you want to add to your flow. Update your fields and save your flow.</p>
							<p data-tip="Click to restart"><img onClick={this.resetGif.bind(this)} className="gif-background" src={this.state.gifShowing ? require("../images/search_fields.gif") : require("../images/search_fieldsfalse.gif")} alt="Search Fields" /></p>
							<ReactTooltip place="bottom" type="dark" effect="float"/>
							<p>Fields with a <strong>green checkmark</strong> are already added to your flow (or about to be added once you update), and 
							fields with a <strong>green circle</strong> are being used in another flow in your account.</p>
							<br/>
							<h2>Custom Fields</h2>
							<p>If you simply can’t find a field that works, you can create a custom field for you flow. </p>
							<img className="img-background" id="webform-example" src={require("../images/custom_fields.png")} alt="Custom Fields 2" />
							<p>Click on the <strong>Create New Field</strong> button. Custom Fields are defined and visible only within your account, and are available to any flow in your account.</p>
							<p>The first time you create a Custom Field, you will be prompted to create a <a href="https://support.activeprospect.com/hc/en-us/articles/209693173-Custom-Fields" target="_blank"> custom suffix</a> 
							that will be appended to all custom fields. Choose your custom suffix carefully as it 1) will be seen by vendors when you provide them their Posting Instructions and 
							2) is problematic to change later.</p>
							<p>After you create your suffix, you’ll be prompted with a window where you can create your custom field. </p>
							<img className="img-background" id="webform-example" src={require("../images/custom_field_modal.png")} alt="Custom Modal 2" />
							<p>Once you fill out the information, click the <strong>Create</strong> button. you’ll be taken back to the update fields page 
							where you will click the blue <strong>Update Fields</strong> button once again.</p>
							<p>Custom Fields are shown in a darker blue than LeadConduit Standard Fields, so they are easy to distinguish at a glance.</p>
							<img className="img-background" id="webform-example" src={require("../images/final_field_page.png")} alt="Final Fields 2" />
							<br />

							<h2>Remove Fields</h2>
							<p>To remove a field from your flow, click the <strong>Add/Edit Fields</strong> button and uncheck all of the checkboxes beside 
							the fields you don’t need. Then update your changes by clicking the <strong>Update Fields</strong> button and <strong>Saving</strong> your 
							work.</p>
							<p data-tip="Click to restart"><img onClick={this.resetGif.bind(this)} className="gif-background" src={this.state.gifShowing ? require("../images/editingfields.gif") : require("../images/editingfieldsfalse.gif")} alt="Edit Fields" /></p>
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
							<p>The beauty of using LeadConduit’s <strong>web form wizard</strong> is that it performs almost all 
							of the work for you! Assuming you used the wizard, <strong>your fields and the required inbound 
							field mappings are already in place</strong>! Since your fields and mappings are all set up, this 
							section is dedicated to helping you understand what’s really going on behind the scenes 
							and why proper field selection and configuration is so important. By using the wizard you 
							do <strong>not</strong> need need to set these fields up yourself. This section will be here for your overall 
							ability to understand what’s happening between your web form and flow.</p>
							<p>Even if a webform is configured to send leads to your LeadConduit flow through the form’s action element, 
							LeadConduit needs to know what parameters will be sent so it knows what to look for and collect that data.</p>
							<img className="img-background" id="webform-example" src={require("../images/field_hat_men.png")} alt="Field Hat Men 2" />
							<p>Here’s how a typical web form might look to a user. Text like <strong>First Name</strong> or <strong>Phone Number</strong> are 
							called labels. They make it easier for a user to interact with a form, and make the whole process a bit prettier. </p>
							<img className="img-background" id="webform-example" src={require("../images/webform.png")} alt="Web Form 2" />
							<p>These labels help the user understand what kind of data they need to input into the form, but labels are 
							not the vessels for sending this data - that’s a job for <strong>input names</strong>. Input names are 
							the uglier version of these labels. They represent the category of data being sent, and they’re uglier 
							to humans because they’re concerned with meeting the requirements of being sent across the internet via 
							HTTP. It doesn’t matter what they look like because users won’t see these values when they fill 
							out a webform.</p>
							<p>Here’s the more relevant details of what’s happening behind the scenes with fields. Below, we have 
							the same web form. This time we’re showing the input names that will house the user data and be sent to 
							a LeadConduit flow as long as the form’s action is configured properly.</p>
							<img className="img-background" id="webform-example" src={require("../images/field_param_compare.png")} alt="Field Compare 2" />
							<p>Notice that although the form label shows <strong>First Name</strong>, the actual form input 
							field name that will be sent as a parameter to LeadConduit (along with the user inputted value, 
							of course) is <strong>first_name</strong>. This is the case for many of the other fields as well.</p>
							<p>Note also that LeadConduit has a few field IDs set up in a hypothetical flow. The section 
							on <strong>inbound field mapping</strong> will discuss in greater detail how we get these two 
							sets of fields to communicate with each other even though they’re using different names to hold 
							the associated values. </p>
							<br/>
							<h2>Add a Field</h2>
							<p>Which fields you add to your flow will be based on what sort of input names your form is using to 
							send these values to LeadConduit. It’s worth noting up front that you should <strong>always use a LeadConduit 
							standard field if you can</strong>. Using standard fields makes a huge difference in streamlining your 
							ability to configure your flow with enhancements and deliveries later on. It will save you time, and make 
							for a more efficient flow long term. </p>
							<p>Add a field to your flow by clicking the <strong>Add/Edit Fields</strong> button on your flow’s <strong>Fields tab</strong>.</p>
							<img className="img-background" src={require("../images/FieldsTab.png")} alt="Fields Tab 3" />
							<img className="img-background" src={require("../images/AddEditFields.png")} alt="Edit Fields 3" />
							<p>Clicking that button will take you to a page where you can update the fields in the flow. Beside each field 
							name, you’ll now see a check-box where a green check mark indicates that the field is currently in use in your flow. </p>
							<p>Keep in mind that when searching for fields you can scroll through the list of fields or use the search bar. When using 
							the search bar, make sure you use correct spelling and feel free to use shortened versions of the name you’re looking for 
							(e.g. <strong>phone</strong> instead of <strong>company phone</strong>). </p>
							<p>Check the box beside the field names you want to add to your flow. Update your fields and save your flow.</p>
							<p data-tip="Click to restart"><img onClick={this.resetGif.bind(this)} className="gif-background" src={this.state.gifShowing ? require("../images/search_fields.gif") : require("../images/search_fieldsfalse.gif")} alt="Search Fields" /></p>
							<ReactTooltip place="bottom" type="dark" effect="float"/>
							<p>Fields with a <strong>green checkmark</strong> are already added to your flow (or about to be added once you update), and 
							fields with a <strong>green circle</strong> are being used in another flow in your account.</p>
							<br/>
							<h2>Custom Fields</h2>
							<p>If you simply can’t find a field that works, you can create a custom field for you flow. </p>
							<img className="img-background" id="webform-example" src={require("../images/custom_fields.png")} alt="Custom Fields 3" />
							<p>Click on the <strong>Create New Field</strong> button. Custom Fields are defined and visible only within your account, and are available to any flow in your account.</p>
							<p>The first time you create a Custom Field, you will be prompted to create a <a href="https://support.activeprospect.com/hc/en-us/articles/209693173-Custom-Fields" target="_blank"> custom suffix</a> 
							that will be appended to all custom fields. Choose your custom suffix carefully as it 1) will be seen by vendors when you provide them their Posting Instructions and 
							2) is problematic to change later.</p>
							<p>After you create your suffix, you’ll be prompted with a window where you can create your custom field. </p>
							<img className="img-background" id="webform-example" src={require("../images/custom_field_modal.png")} alt="Custom Modal 3" />
							<p>Once you fill out the information, click the <strong>Create</strong> button. you’ll be taken back to the update fields page 
							where you will click the blue <strong>Update Fields</strong> button once again.</p>
							<p>Custom Fields are shown in a darker blue than LeadConduit Standard Fields, so they are easy to distinguish at a glance.</p>
							<img id="webform-example" src={require("../images/final_field_page.png")} alt="Final Fields 3" />
							<br />

							<h2>Remove Fields</h2>
							<p>To remove a field from your flow, click the <strong>Add/Edit Fields</strong> button and uncheck all of the checkboxes beside 
							the fields you don’t need. Then update your changes by clicking the <strong>Update Fields</strong> button and <strong>Saving</strong> your 
							work.</p>
							<p data-tip="Click to restart"><img onClick={this.resetGif.bind(this)} className="gif-background" src={this.state.gifShowing ? require("../images/editingfields.gif") : require("../images/editingfieldsfalse.gif")} alt="Edit Fields" /></p>
							<ReactTooltip place="bottom" type="dark" effect="float"/>
						</div>
					}
					{(this.props.isUsingVendor || this.props.isUnbounceUser || this.props.isWebformUser) &&
					<div className="arrow-wrapper">
						<div className="inner-arrow-wrapper">
							<div className="back-arrow">
								<p data-tip="Sources"><IconButton class_name="arrow" to="/sources" name="angle-left" /></p>
								<ReactTooltip place="bottom" type="dark" effect="float"/>
							</div>
							<div className="forward-arrow">
								<p data-tip="Inbound Field Mapping"><IconButton class_name="arrow" to="/inbound-field-mapping" name="angle-right" /></p>
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

export default Fields;
