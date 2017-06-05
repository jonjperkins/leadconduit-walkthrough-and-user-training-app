import React, { Component } from 'react';
import './ChapterStyles.css';
import { Link } from 'react-router-dom';

class Chapter6 extends Component {
	render() {
		return(
			<div className="ancestor">
				<div className="chapter-content-body">
					<h1 className="title">Lead Sources</h1>
					<p>Sources represent where your leads are coming from. In this tutorial, our source is the web form we’ve been discussing. 
					A source can also represent a lead vendor who sends you leads.</p>
					<p>Setting up sources for a particular flow allows you to organize your work. Instead of all leads coming into your flow 
					from a single default source, setting up sources allows you to track and report on the health and success of a particular 
					source of leads. If a source is sending a significant number of bad leads to your flow, you need to know that. Figuring 
					out where the bad leads are coming from can be a headache if you don't set up your sources properly.</p>
					<p>We should currently be on the 'Fields' tab of our flow page. To work with our sources, we'll need to navigate to our 'Sources' tab.</p>		
					<img src={require('../images/sourcetab.gif')} />
					<p>On the 'Sources' tab, you can see that LeadConduit added a default source for us. Your default source name will be your account name.</p>
					<p>If we didn't add any more sources, every lead would be associated with this default source. In some cases, if all leads are 
					coming from your own, single form, this may be fine. However, most users want to set up specific sources for tracking and reporting purposes. </p>
					<p>Let's begin by clicking the 'Add/Edit Sources' button at the top left of the 'Sources' tab. </p>
					<img src={require('../images/addsourcebutton.png')} />
					<p>Most users will be able to find the source they want to add by using the search bar like we did when looking for 
					'sports team' earlier. For example, let's pretend you want to add a source called 'That Old Shack'. Here's how it's done: </p>
					<img src={require('../images/savesource.gif')} />
					<p>If you’re receiving leads from a lead vendor, it’s highly likely that you’ll be able to find that source in our list of sources. If that’s the case, 
					it’s incredibly important to select that source rather than creating your own for that vendor. We work with a lot of lead vendors, and selecting the 
					standard source in LeadConduit for that vendor will make things go much more smoothly for you. We know how they like to format their leads, and by selecting 
					that standard source, we’ll make sure those leads get delivered to you correctly.</p>
					<p>If you were able to add 'That Old Shack' as a source, let's go ahead and remove it. Click the 'Add/Edit Sources' button again. Find the source 
					you want to delete and uncheck the box to the left of it. Click the 'Update Sources' button and then click 'Save'.</p>
					<img src={require('../images/updatesource.gif')} />
					<p>Let’s create a new source and add it to our flow. Click the 'Add/Edit Sources' button once again. Instead of searching for a source, click 
					'Create New Source' to the right of the search bar.</p>
					<p><strong>*PRO-TIP:</strong> It’s okay to create a custom source in this scenario because it’s our web form. We aren’t getting leads from a vendor. <strong>*</strong></p>
					<img src={require('../images/customsource.png')} />
					<p>Create a new source by naming it ‘My Example Source’. Click 'Create'. Then click 'Create' again on the next tab. Then click 'OK'.</p>
					<img src={require('../images/createcustomsource.gif')} />
					<p>You'll notice there are several options available when creating a source (e.g. Advanced options and recommending the source as a standard source). 
					Our recommendation is to use the Standard Inbound Integration for any custom sources you create, unless you have a specific need for one of the 
					<a href="https://support.activeprospect.com/hc/en-us/sections/115000574726-Inbound-Source-Integrations" target="_blank">more advanced inbound integrations</a>.</p>
					<p>If your 'Source' tab screen looks like the image below, then you've successfully created your first source! <strong>WELL DONE!</strong></p>
					<img src={require('../images/successfulsourceadd.png')} />
					<p>If you need to edit the name of your custom source, you can do so by clicking the Libraries menu on the Navigation bar, and selecting Sources. Find the source you 
					want to edit, and make the desired changes.</p>
					<img src={require('../images/editsource.gif')} />
					<p>You can read more about <a href="https://support.activeprospect.com/hc/en-us/articles/202062469-LeadConduit-Adding-a-Source" target="_blank">adding sources</a> in our knowledge base.</p>
					<Link className="previous-button" style={{ textDecoration: 'none' }} to="/chapter5">Back</Link>
					<Link className="next-button" style={{ textDecoration: 'none' }} to="#">Next</Link>
				</div>
			</div>
		);
	}
}

export default Chapter6;