import React, { Component } from 'react';
import './ChapterStyles.css';

class Chapter4 extends Component {
	render() {
		return(
			<div className="ancestor">
				<div className="chapter-content-body">
				<h1 className="title">Fields</h1>
				<p> Settings up fields is an important first step in making sure our flow can 
				capture the leads a web form sends it. If we don’t set up our fields correctly, 
				our flow won’t be able to communicate with our web form. LeadConduit needs to 
				know what parameters will be sent to our flow so it knows what to look for. </p>
				<img src={require('../images/field_hat_men.png')} />	
				<p>When you created your flow, these 10 fields were added by default:</p>
				1. First Name<br/>
				2. Last Name<br/>
				3. Phone 1<br/>
				4. Email<br/>
				5. Address 1<br/>
				6. Address 2<br/>
				7. City<br/>
				8. State<br/>
				9. Postal Code<br/>
				10. TrustedForm Cert URL<br/><br/>
				<p>In our example flow, the web form we're using will send us values for six parameters 
				it collects from the lead. When the user clicks ‘Submit’ and web form is submitted, 
				these parameters with the values entered by the user will be sent to our LeadConduit flow:</p>
				1. first_name<br/>
				2. l_name<br/>
				3. age<br/>
				4. sports_team<br/>
				5. email<br/>
				6. phone_1<br/><br/>
				<p>Here’s how our web form might look to a user:</p>
				<img id="webform-example" src={require('../images/webform.png')} />
				<p>At first glance, you can see that we don’t need all of the fields LeadConduit provided by default 
				for this new flow. Our form only has user inputs for six categories of information. So, let's start by 
				deleting the fields we won't need. Select the gray 'Add/Edit Fields' button in the top right corner.</p>
				<img id="webform-example" src={require('../images/addeditfields.png')} />
				<p>Clicking that button will take you to a page where you can update the fields in the flow. Beside each 
				field name, you'll now see a check-box where a green check mark indicates that the field is currently in 
				use in your flow.</p>
				<p>Uncheck all of the checkboxes except:</p>
				1. First Name<br/>
				2. Last Name<br/>
				3. Email<br/>
				4. Phone 1<br/>
				<img id="webform-example" src={require('../images/editingfields.gif')} />
				<p>Since ‘age’ wasn’t one of our default fields, we’ll need to use the search function to see if it’s a standard field.</p>
				<p>Use the 'Search Fields' box to see if we can find a standard field for 'age' and 'sports_team'. Using the search tool, we 
				type in 'age' and see that there's a standard field. Check the box beside the 'age' field and click the blue ‘Update Fields’ 
				button to add it to your flow.</p> 
				<img id="webform-example" src={require('../images/search_fields.gif')} />
				<p>Next, let's search for 'sports team'. Uh oh. It's not there! At this point, we should look to find a standard field that 
				fits closely for what we’re trying to collect. Using standard fields, when possible, helps streamline using our built-in integrations in your flow.</p>
				<p>If you simply cannot find a standard field that works for you, you can create a custom field. Let's assume for this example that we can't find a 
				standard field that represents 'sports team' very well, so we'll add a custom field. We can create a custom field by clicking the 'Create New Field' 
				button beside the search box.</p>
				<img id="webform-example" src={require('../images/custom_fields.png')} />
				<p><strong>*PRO-TIP:</strong> If you have trouble finding the 'Create New Field' button, make sure that you've clicked the 'Add/Edit Fields' 
				button and you're in the field editing mode <strong>*</strong></p>
				<p>You will first be prompted to create a suffix for your <a href="https://support.activeprospect.com/hc/en-us/articles/209693173-Custom-Fields">custom fields</a>. 
				After you create your suffix, you'll be prompted with a window 
				where you can create your custom field.</p>
				<img id="webform-example" src={require('../images/custom_field_modal.png')} />
				<p>Once you fill out the information, click the 'Create' button. You'll be taken back to the update fields page where you will click the blue 
				'Update Fields' button once again. You will be taken to a page that looks like this:</p>
				<img id="webform-example" src={require('../images/final_field_page.png')} />
				<p>If you are missing a field or have any unnecessary fields, select the 'Add/Edit Fields' button to add/remove any fields.</p>
				<p>Once everything looks ok, save your work.</p>
				<img id="webform-example" src={require('../images/save_your_work.gif')} />
				<p><strong>CONGRATS.</strong>You've created your fields.</p>
				</div>
			</div>
		);
	}
}

export default Chapter4;