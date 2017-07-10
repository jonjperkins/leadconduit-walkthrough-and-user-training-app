import React, { Component } from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Homepage from './Homepage';
import SigningIn from './SigningIn';
import Intro from './Intro';
import Chapter1 from './Chapter1';
import Chapter2 from './Chapter2';
import Chapter3 from './Chapter3';
import Chapter5 from './Chapter5';
import Chapter6 from './Chapter6';
import Chapter7 from './Chapter7';
import Chapter8 from './Chapter8';
import Chapter9 from './Chapter9';
import Chapter10 from './Chapter10';
import Chapter11 from './Chapter11';
import Chapter12 from './Chapter12';
import Chapter13 from './Chapter13';
import Chapter14 from './Chapter14';
import Chapter15 from './Chapter15';
import QuickStart from './QuickStart';
import Intro2 from './Intro2';
import Test from './Test';
import TestingTool from './TestingTool';
import WebScraper from './WebScraper';
import SourcePartners from './SourcePartners';
import FieldsPartners from './FieldsPartners';
import FieldsWebForms from './FieldsWebForms';
import FieldsUnbounce from './FieldsUnbounce';
import AcceptanceCriteria from './AcceptanceCriteria';
import PostingInstructions from './PostingInstructions';
import NonWizardEnhancements from './NonWizardEnhancements';
import NonWizardFiltersAndRules from './NonWizardFiltersAndRules';
import LeadDelivery from './LeadDelivery';
import OutboundFieldMapping from './OutboundFieldMapping';
import ResponseParsing from './ResponseParsing';
import SourcesWebForms from './SourcesWebForms';
import SourcesUnbounce from './SourcesUnbounce';
import Begin from './Begin';
import TypeOfWebform from './TypeOfWebform';
import IsThisAWebform from './IsThisAWebform';
import IntroAndFlowCreation from './IntroAndFlowCreation';
import TestingBasics from './TestingBasics';
import './App.css';
import CustomNavLink from './CustomNavLink';

import Sources from './Sources';
import Fields from './Fields';
import InboundFieldMapping from './InboundFieldMapping';

import 'babel-polyfill';


class App extends Component {
	constructor() {
		super();
		this.state = {
			onBeginPage: true,
			onWebformQuestionPage: false,
			onTypeofWebformPage: false,
			isSourceWizard: true,
			isUnbounceUser: false,
			isWebformUser: false,
			isUsingVendor: false,
			isActive: false,
			walkthrough: false
		}
	}
	sidebarToggle() {
		var active = !this.state.isActive;
		this.setState({ isActive: active });
	}
	sidebarClose() {
		this.setState({ isActive: false });
	}
	begin() {
		this.setState({ onWebformQuestionPage: true, 
						onTypeofWebformPage: false, 
						isSourceWizard: true, 
						isUnbounceUser: false, 
						isWebformUser: false, 
						isUsingVendor: false,
						onBeginPage: false });
	}
	webformYes() {
		this.setState({ onWebformQuestionPage: false, 
						onTypeofWebformPage: true, 
						isSourceWizard: true, 
						isUnbounceUser: false, 
						isWebformUser: false, 
						isUsingVendor: false,
						onBeginPage: false });
	}
	webformNo() {
		this.setState({ onWebformQuestionPage: false, 
						onTypeofWebformPage: false, 
						isSourceWizard: false, 
						isUnbounceUser: false, 
						isWebformUser: false, 
						isUsingVendor: true,
						onBeginPage: false });
	}
	nonUnbounceWebForm() {
		this.setState({ onWebformQuestionPage: false, 
						onTypeofWebformPage: false, 
						isSourceWizard: false, 
						isUnbounceUser: false, 
						isWebformUser: true, 
						isUsingVendor: false,
						onBeginPage: false,
						walkthrough: true });
	}
	unbounceWebForm() {
		this.setState({ onWebformQuestionPage: false, 
						onTypeofWebformPage: false, 
						isSourceWizard: false, 
						isUnbounceUser: true, 
						isWebformUser: false, 
						isUsingVendor: false,
						onBeginPage: false,
						walkthrough: true });
	}
	vendorSource() {
		this.setState({ onWebformQuestionPage: false, 
						onTypeofWebformPage: false, 
						isSourceWizard: false, 
						isUnbounceUser: false, 
						isWebformUser: false, 
						isUsingVendor: true,
						onBeginPage: false,
						walkthrough: true });
		console.log("vendor source executed")
	}
	startOver() {
		this.setState({ onWebformQuestionPage: false, 
						onTypeofWebformPage: false, 
						isSourceWizard: true, 
						isUnbounceUser: false, 
						isWebformUser: false, 
						isUsingVendor: false,
						onBeginPage: true });
	}
  	render() {
  		let wizardComponent = null;
  		if (this.state.onBeginPage === true) {
  			wizardComponent = 	<Begin 
  								handleBegin={this.begin.bind(this)} 
  								/>
  		}
  		if (this.state.onWebformQuestionPage === true) {
  			wizardComponent = 	<IsThisAWebform 
  								handleWebformYes={this.webformYes.bind(this)} 
  								handleWebformNo={this.webformNo.bind(this)} 
  								handleStartOver={this.startOver.bind(this)}
  								/>
  		}
  		if (this.state.onTypeofWebformPage === true) {
  			wizardComponent = 	<TypeOfWebform 
  								handleNonUnbounceUser={this.nonUnbounceWebForm.bind(this)} 
  								handleUnbounceUser={this.unbounceWebForm.bind(this)}
  								handleBegin={this.begin.bind(this)} 
  								/>
  		}
  		
  		return (
			<div>
				<div>
					<Header hideMenuButton={this.state.isSourceWizard} onClick={this.sidebarToggle.bind(this)} value={this.state.isActive} />
				</div>
				<HashRouter>
					<div>
					<div className={!this.state.isSourceWizard ? 'hidden' : 'wizard-content-body'}>
						{wizardComponent}
					</div>
					<div id={this.state.isSourceWizard ? 'hidden' : 'wrapper'} className={this.state.walkthrough ? 'intro-tour-overlay' : ''}>
						<div className='wrapper-ancestor'>
							<div className={this.state.isActive ? 'active-sidebar-small-screen' : 'sidebar-wrapper'}>
								<div className="sidebar-content">
									<Sidebar>
										{this.state.isWebformUser &&
											<div className="lead-source-sidebar-div">
												<div className={this.state.walkthrough ? 'intro-tour' : 'source-div'}>
													<CustomNavLink to="#" className="bold" label="Your Lead Source Type"></CustomNavLink>
													<CustomNavLink onClick={this.vendorSource.bind(this)} to="#" label="Partner Leads"></CustomNavLink>
	    											<CustomNavLink onClick={this.unbounceWebForm.bind(this)} to="#" label="Unbounce Webform"></CustomNavLink>
	    											<CustomNavLink onClick={this.nonUnbounceWebForm.bind(this)} to="#" className="active-source-type regular-css-bold" label="Other Webform"></CustomNavLink>									
      											</div>
      											<br/>
      											<CustomNavLink to="#" className="bold" label="Getting Started Guide"></CustomNavLink>
      											<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/introandflowcreation" label="Intro and Flow Creation"></CustomNavLink>
      											<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/sources" label="Sources"></CustomNavLink>
      											<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/fields" label="Fields"></CustomNavLink>
      											<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/inbound-field-mapping" label="Inbound Field Mapping"></CustomNavLink>
      											<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/acceptance-criteria" label="Acceptance Criteria"></CustomNavLink>
      											<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/posting-instructions" label="Posting Instructions"></CustomNavLink>
      											<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/non-wizard-enhancements" label="Marketplace Integrations & Enhancements"></CustomNavLink>
      											<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/non-wizard-filters-and-rules" label="Filters and Step Rules"></CustomNavLink>
      											<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/lead-delivery" label="Lead Delivery"></CustomNavLink>
      											<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/outbound-field-mapping" label="Outbound Field Mapping"></CustomNavLink>
      											<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/response-parsing" label="Response Parsing"></CustomNavLink>
      											<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/testing-basics" label="Testing Basics"></CustomNavLink>
      											
      											<br />
      											<CustomNavLink to="#" className="bold" label="Page Overviews"></CustomNavLink>
      											<CustomNavLink to="#" label="Coming Soon!"></CustomNavLink>	
      											<br />
      											<CustomNavLink to="#" className="bold" label="Advanced Tutorials"></CustomNavLink>
      											<CustomNavLink to="#" label="Coming Soon!"></CustomNavLink>
      										</div>
      									}
      									{this.state.isUnbounceUser &&
											<div className="lead-source-sidebar-div">
												<CustomNavLink to="#" className="bold" label="Your Lead Source Type"></CustomNavLink>
												<CustomNavLink onClick={this.vendorSource.bind(this)} to="#" label="Partner Leads"></CustomNavLink>
    											<CustomNavLink onClick={this.unbounceWebForm.bind(this)} to="#" className="active-source-type regular-css-bold" label="Unbounce Webform"></CustomNavLink>
    											<CustomNavLink onClick={this.nonUnbounceWebForm.bind(this)} to="#" label="Other Webform"></CustomNavLink>									
      											<br />
      											<CustomNavLink to="#" className="bold" label="Getting Started Guide"></CustomNavLink>
      											<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/introandflowcreation" label="Intro and Flow Creation"></CustomNavLink>
      											<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/sources" label="Sources"></CustomNavLink>
      											<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/fields" label="Fields"></CustomNavLink>
      											<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/inbound-field-mapping" label="Inbound Field Mapping"></CustomNavLink>
      											<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/acceptance-criteria" label="Acceptance Criteria"></CustomNavLink>
      											<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/posting-instructions" label="Posting Instructions"></CustomNavLink>
      											<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/non-wizard-enhancements" label="Marketplace Integrations & Enhancements"></CustomNavLink>
      											<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/non-wizard-filters-and-rules" label="Filters and Step Rules"></CustomNavLink>
      											<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/lead-delivery" label="Lead Delivery"></CustomNavLink>
      											<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/outbound-field-mapping" label="Outbound Field Mapping"></CustomNavLink>
      											<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/response-parsing" label="Response Parsing"></CustomNavLink>
      											<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/testing-basics" label="Testing Basics"></CustomNavLink>
      											
      											<br />
      											<CustomNavLink to="#" className="bold" label="Page Overviews"></CustomNavLink>
      											<CustomNavLink to="#" label="Coming Soon!"></CustomNavLink>	
      											<br />
      											<CustomNavLink to="#" className="bold" label="Advanced Tutorials"></CustomNavLink>
      											<CustomNavLink to="#" label="Coming Soon!"></CustomNavLink>
      										</div>      									
      									}
      									{this.state.isUsingVendor &&
    										<div>
												<CustomNavLink to="#" className="bold" label="Your Lead Source Type"></CustomNavLink>
												<CustomNavLink onClick={this.vendorSource.bind(this)} to="#" className="active-source-type regular-css-bold" label="Partner Leads"></CustomNavLink>
    											<CustomNavLink onClick={this.unbounceWebForm.bind(this)} to="#" label="Unbounce Webform"></CustomNavLink>
    											<CustomNavLink onClick={this.nonUnbounceWebForm.bind(this)} to="#" label="Other Webform"></CustomNavLink>	
    											<br />
      											<CustomNavLink to="#" className="bold" label="Getting Started Guide"></CustomNavLink>
      											<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/introandflowcreation" label="Intro and Flow Creation"></CustomNavLink>
      											<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/sources" label="Sources"></CustomNavLink>
      											<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/fields" label="Fields"></CustomNavLink>
      											<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/inbound-field-mapping" label="Inbound Field Mapping"></CustomNavLink>
      											<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/acceptance-criteria" label="Acceptance Criteria"></CustomNavLink>
      											<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/posting-instructions" label="Posting Instructions"></CustomNavLink>
      											<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/non-wizard-enhancements" label="Marketplace Integrations & Enhancements"></CustomNavLink>
      											<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/non-wizard-filters-and-rules" label="Filters and Step Rules"></CustomNavLink>
      											<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/lead-delivery" label="Lead Delivery"></CustomNavLink>
      											<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/outbound-field-mapping" label="Outbound Field Mapping"></CustomNavLink>
      											<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/response-parsing" label="Response Parsing"></CustomNavLink>
      											<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/testing-basics" label="Testing Basics"></CustomNavLink>
      											
      											<br />
      											<CustomNavLink to="#" className="bold" label="Page Overviews"></CustomNavLink>
      											<CustomNavLink to="#" label="Coming Soon!"></CustomNavLink>	
      											<br />
      											<CustomNavLink to="#" className="bold" label="Advanced Tutorials"></CustomNavLink>
      											<CustomNavLink to="#" label="Coming Soon!"></CustomNavLink>								
      										</div>								
      									}
										{/*<CustomNavLink onClick={this.sidebarClose.bind(this)} className="bold" to="/quickstart" label="Quick Start"></CustomNavLink>									
										<CustomNavLink onClick={this.sidebarClose.bind(this)} className="bold" to="/intro" label="Full Tutorial"></CustomNavLink>
										<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/intro" label="Meet LeadConduit"></CustomNavLink>
										<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/signingin" label="Signing In"></CustomNavLink>
										<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/chapter1" label="The Homepage"></CustomNavLink>
										<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/chapter2" label="Flows"></CustomNavLink> 
										<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/chapter3" label="Create Your Flow"></CustomNavLink>
										<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/chapter5" label="Fields and Form Parameters"></CustomNavLink>
										<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/chapter6" label="Lead Sources"></CustomNavLink>
										<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/chapter7" label="Inbound Field Mapping"></CustomNavLink>
										<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/chapter8" label="Acceptance Criteria"></CustomNavLink>
										<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/chapter9" label="Posting Instructions"></CustomNavLink>
										<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/chapter10" label="Steps"></CustomNavLink>
										<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/chapter11" label="Marketplace Integrations & Enhancements"></CustomNavLink>
										<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/chapter12" label="Filters and Step Rules"></CustomNavLink>
										<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/chapter13" label="Lead Delivery"></CustomNavLink>
										<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/chapter14" label="Outbound Field Mapping"></CustomNavLink>
										<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/chapter15" label="Response Parsing"></CustomNavLink>

										<br/>
										<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/test" label="Test Your Flow"></CustomNavLink> 
										<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/webscraper" label="Field Finder"></CustomNavLink> 
										*/}
									</Sidebar>
								</div>
							</div>
							<div id='page-content-wrapper'>
								<div className="app-content-body">

									<Route path='/sources' render={() => <Sources isUsingVendor = {this.state.isUsingVendor} isWebformUser = {this.state.isWebformUser} isUnbounceUser = {this.state.isUnbounceUser} />}></Route>
									<Route path='/fields' render={() => <Fields isUsingVendor = {this.state.isUsingVendor} isWebformUser = {this.state.isWebformUser} isUnbounceUser = {this.state.isUnbounceUser} />}></Route>
									<Route path='/inbound-field-mapping' render={() => <InboundFieldMapping isUsingVendor = {this.state.isUsingVendor} isWebformUser = {this.state.isWebformUser} isUnbounceUser = {this.state.isUnbounceUser} />}></Route>
									<Route path='/quickstart' component={QuickStart}></Route>
									<Route path='/intro' component={Intro}></Route>
									<Route path='/signingin' component={SigningIn}></Route>
									<Route path='/chapter1' component={Chapter1}></Route>
									<Route path='/chapter2' component={Chapter2}></Route>
									<Route path='/chapter3' component={Chapter3}></Route>
									<Route path='/chapter5' component={Chapter5}></Route>
									<Route path='/chapter6' component={Chapter6}></Route>
									<Route path='/chapter7' component={Chapter7}></Route>
									<Route path='/chapter8' component={Chapter8}></Route>
									<Route path='/chapter9' component={Chapter9}></Route>
									<Route path='/chapter10' component={Chapter10}></Route>	
									<Route path='/chapter11' component={Chapter11}></Route>
									<Route path='/chapter12' component={Chapter12}></Route>
									<Route path='/chapter13' component={Chapter13}></Route>		
									<Route path='/chapter14' component={Chapter14}></Route>							
									<Route path='/chapter15' component={Chapter15}></Route>	
									<Route path='/test' component={Test}></Route>
									<Route path='/webscraper' component={WebScraper}></Route>
								{/* Partner Routes */}
									<Route path='/introandflowcreation' component={IntroAndFlowCreation}></Route>
									<Route path="/sources-partners" component={SourcePartners}></Route>
									<Route path='/sources-webform' component={SourcesWebForms}></Route>
									<Route path='/sources-unbounce' component={SourcesUnbounce}></Route>
									<Route path='/fields-partners' component={FieldsPartners}></Route>
									<Route path='/fields-webform' component={FieldsWebForms}></Route>
									<Route path='/fields-unbounce' component={FieldsUnbounce}></Route>

									

									<Route path='/acceptance-criteria' component={AcceptanceCriteria}></Route>
									<Route path='/posting-instructions' component={PostingInstructions}></Route>
									<Route path='/non-wizard-enhancements' component={NonWizardEnhancements}></Route>
									<Route path='/non-wizard-filters-and-rules' component={NonWizardFiltersAndRules}></Route>
									<Route path='/lead-delivery' component={LeadDelivery}></Route>
									<Route path='/outbound-field-mapping' component={OutboundFieldMapping}></Route>
									<Route path='/response-parsing' component={ResponseParsing}></Route>
									<Route path='/testing-basics' component={TestingBasics}></Route>
									<Route path='/testing-tool' component={TestingTool}></Route>
									
								</div>	
							</div>
						</div>
					</div>
					</div>
				</HashRouter>				
			</div>
		);
  	}
};

export default App;