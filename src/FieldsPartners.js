import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FieldsPartners extends Component {
	componentDidMount () {
  		window.scrollTo(0, 0)
	}
	render() {
		return(
			<div className="ancestor">
				<div className="chapter-content-body">
					<h1 className="title">Fields</h1>
					<p>LeadConduit Fields define what LeadConduit can receive from a lead vendor or web form. Data in 
					a field is actionable i.e. you can make decisions based on it, and you can send it out to various 
					types of recipients. If a lead vendor or your web form submits a parameter that does not match a 
					defined field, that parameter will not cause problems, but LeadConduit will not capture it or be 
					able to do anything with it.</p>
	 				<p>Deciding what fields to add to your flow is typically determined by both the data you’re required 
	 				to collect, and the optional data you’d like to collect. For example, if you’d like to deliver leads 
	 				to a MailChimp account, you’ll be required to collect an email address, but you can also collect other 
	 				data like first name and last name. For (almost) every piece of data you’d like to collect, you’ll need 
	 				a field to ‘hold’ that data.</p>
	 				<br/>
	 				<h2>Preparation</h2>
	 				<p>Make a list of the fields you must collect, and the fields you’d like to collect. Then navigate to 
	 				your flow’s <strong>Fields tab</strong> by clicking on the Fields tab below your flow’s name. </p>
	 				<img src={require('../images/FieldsTab.png')} />
	 				<p>When you created your flow, these 10 fields were added by default:</p>
	 				<img src={require('../images/DefaultFields.png')} />
	 				<p>Since you’ve already performed your prep work, you’ll be able to determine whether or not you need 
	 				all of these fields in your flow. Although it won’t hurt anything to leave these fields in your flow 
	 				and not use them, when working with a lead partner it’s best to only list fields in your flow that you 
	 				actually want to collect. The fields in this list will show up in the posting instructions you’ll 
	 				eventually send to your partner.</p>
	 				<br />
	 				<h2>Adding and Editing Fields</h2>
	 				<p>To add or edit your existing fields, click the <strong>Add/Edit Fields</strong> button in the upper right corner.</p>
					<img src={require('../images/AddEditFields.png')} />
					<p>Clicking that button will take you to a page where you can update the fields in the flow. Beside each field name, 
					you'll now see a check-box where a green check mark indicates that the field is currently in use in your flow.  </p>
					<p>Uncheck all of the checkboxes you don’t need. Then update your changes by clicking the <strong>Update Fields</strong> 
					button and <strong>Saving</strong> your work. </p>
					<img id="webform-example" src={require('../images/editingfields.gif')} />
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
					<img id="webform-example" src={require('../images/search_fields.gif')} />
					<p>Fields with a <strong>green checkmark</strong> are already added to your flow (or about to be added once you update), and fields with a 
					<strong>green circle</strong> are being used in another flow in your account.</p>
					<br />
					<h2>Custom Fields</h2>
					<p>If you simply can’t find a field that works, you can create a custom field for you flow.</p>
					<img id="webform-example" src={require('../images/custom_fields.png')} />
					<p>Click on the <strong>Create New Field</strong> button. Custom Fields are defined and visible only within your account, and are 
					available to any flow in your account.</p>
					<p>The first time you create a Custom Field, you will be prompted to create a <a href="https://support.activeprospect.com/hc/en-us/articles/209693173-Custom-Fields" target="_blank"> custom suffix</a> 
					that will be appended to all custom fields. Choose your custom suffix carefully as it 1) will be seen by vendors when you provide them their Posting Instructions and 
					2) is problematic to change later.</p>
					<p>After you create your suffix, you'll be prompted with a window where you can create your custom field. </p>
					<img id="webform-example" src={require('../images/custom_field_modal.png')} />
					<p>Once you fill out the information, click the <strong>Create</strong> button. You'll be taken back to the update fields page 
					where you will click the blue <strong>Update Fields</strong>button once again.</p>
					<p>Custom Fields are shown in a darker blue than LeadConduit Standard Fields, so they are easy to distinguish at a glance.</p>
					<img id="webform-example" src={require('../images/final_field_page.png')} />
					<p>Remember to <strong>update</strong> your fields and <strong>save</strong> your work.</p>
					<Link className="previous-button" style={{ textDecoration: 'none' }} to="/signingin">Back</Link>
					<Link className="next-button" style={{ textDecoration: 'none' }} to="/chapter2">Next</Link>			
				</div>
			</div>
		);
	}
}

export default FieldsPartners;
