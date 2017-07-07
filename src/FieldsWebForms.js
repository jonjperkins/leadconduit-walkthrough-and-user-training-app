import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FieldsWebForms extends Component {
	componentDidMount () {
  		window.scrollTo(0, 0)
	}
	render() {
		return(
			<div className="ancestor">
				<div className="chapter-content-body">
					<h1 className="title">Fields</h1>
					<p>The beauty of using LeadConduit’s <strong>web form wizard</strong> is that it performs almost all 
					of the work for you! Assuming you used the wizard, <strong>your fields and the required inbound 
					field mappings are already in place</strong>! Since your fields and mappings are all set up, this 
					section is dedicated to helping you understand what’s really going on behind the scenes 
					and why proper field selection and configuration is so important. By using the wizard you 
					do <strong>not</strong> need need to set these fields up yourself. This section will be here for your overall 
					ability to understand what’s happening between your web form and flow.</p>
					<p>Even if a webform is configured to send leads to your LeadConduit flow through the form’s action element, 
					LeadConduit needs to know what parameters will be sent so it knows what to look for and collect that data.</p>
					<img id="webform-example" src={require('../images/field_hat_men.png')} />
					<p>Here’s how a typical web form might look to a user. Text like <strong>First Name</strong> or <strong>Phone Number</strong> are 
					called labels. They make it easier for a user to interact with a form, and make the whole process a bit prettier. </p>
					<img id="webform-example" src={require('../images/webform.png')} />
					<p>These labels help the user understand what kind of data they need to input into the form, but labels are 
					not the vessels for sending this data - that’s a job for <strong>input names</strong>. Input names are 
					the uglier version of these labels. They represent the category of data being sent, and they’re uglier 
					to humans because they’re concerned with meeting the requirements of being sent across the internet via 
					HTTP. It doesn’t matter what they look like because users won’t see these values when they fill 
					out a webform.</p>
					<p>Here’s the more relevant details of what’s happening behind the scenes with fields. Below, we have 
					the same web form. This time we’re showing the input names that will house the user data and be sent to 
					a LeadConduit flow as long as the form’s action is configured properly.</p>
					<img id="webform-example" src={require('../images/field_param_compare.png')} />
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
					<img src={require('../images/FieldsTab.png')} />
					<img src={require('../images/AddEditFields.png')} />
					<p>Clicking that button will take you to a page where you can update the fields in the flow. Beside each field 
					name, you'll now see a check-box where a green check mark indicates that the field is currently in use in your flow. </p>
					<p>Keep in mind that when searching for fields you can scroll through the list of fields or use the search bar. When using 
					the search bar, make sure you use correct spelling and feel free to use shortened versions of the name you’re looking for 
					(e.g. <strong>phone</strong> instead of <strong>company phone</strong>). </p>
					<p>Check the box beside the field names you want to add to your flow. Update your fields and save your flow.</p>
					<img id="webform-example" src={require('../images/search_fields.gif')} />
					<p>Fields with a <strong>green checkmark</strong> are already added to your flow (or about to be added once you update), and 
					fields with a <strong>green circle</strong> are being used in another flow in your account.</p>
					<br/>
					<h2>Custom Fields</h2>
					<p>If you simply can’t find a field that works, you can create a custom field for you flow. </p>
					<img id="webform-example" src={require('../images/custom_fields.png')} />
					<p>Click on the <strong>Create New Field</strong> button. Custom Fields are defined and visible only within your account, and are available to any flow in your account.</p>
					<p>The first time you create a Custom Field, you will be prompted to create a <a href="https://support.activeprospect.com/hc/en-us/articles/209693173-Custom-Fields" target="_blank"> custom suffix</a> 
					that will be appended to all custom fields. Choose your custom suffix carefully as it 1) will be seen by vendors when you provide them their Posting Instructions and 
					2) is problematic to change later.</p>
					<p>After you create your suffix, you'll be prompted with a window where you can create your custom field. </p>
					<img id="webform-example" src={require('../images/custom_field_modal.png')} />
					<p>Once you fill out the information, click the <strong>Create</strong> button. You'll be taken back to the update fields page 
					where you will click the blue <strong>Update Fields</strong> button once again.</p>
					<p>Custom Fields are shown in a darker blue than LeadConduit Standard Fields, so they are easy to distinguish at a glance.</p>
					<img id="webform-example" src={require('../images/final_field_page.png')} />
					<br />

					<h2>Remove Fields</h2>
					<p>To remove a field from your flow, click the <strong>Add/Edit Fields</strong> button and uncheck all of the checkboxes beside 
					the fields you don’t need. Then update your changes by clicking the <strong>Update Fields</strong> button and <strong>Saving</strong> your 
					work.</p>
					<img id="webform-example" src={require('../images/editingfields.gif')} />
					<Link className="previous-button" style={{ textDecoration: 'none' }} to="/signingin">Back</Link>
					<Link className="next-button" style={{ textDecoration: 'none' }} to="/chapter2">Next</Link>			
				</div>
			</div>
		);
	}
}

export default FieldsWebForms;