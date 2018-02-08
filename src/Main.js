import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import TestingTool from './TestingTool';
import WebScraper from './WebScraper';
import AcceptanceCriteria from './AcceptanceCriteria';
import PostingInstructions from './PostingInstructions';
import NonWizardEnhancements from './NonWizardEnhancements';
import NonWizardFiltersAndRules from './NonWizardFiltersAndRules';
import LeadDelivery from './LeadDelivery';
import OutboundFieldMapping from './OutboundFieldMapping';
import ResponseParsing from './ResponseParsing';
import Begin from './Begin';
import TypeOfWebform from './TypeOfWebform';
import IsThisAWebform from './IsThisAWebform';
import Restart from './Restart';
import IntroAndFlowCreation from './IntroAndFlowCreation';
import TestingBasics from './TestingBasics';
import './App.css';
import CustomNavLink from './CustomNavLink';
import ClientTestingPage from './ClientTestingPage';
import withTracker from './withTracker';

import Sources from './Sources';
import Fields from './Fields';
import InboundFieldMapping from './InboundFieldMapping';
import Reporting from './Reporting';
import KnowledgeBase from './KnowledgeBase';
import Conclusion from './Conclusion';

import ReactTooltip from 'react-tooltip';
import 'babel-polyfill';

class Main extends Component {
	constructor() {
		super();
		this.state = {
			onBeginPage: true,
			onWebformQuestionPage: false,
			onTypeofWebformPage: false,
			isSourceWizard: false,
			isUnbounceUser: false,
			isWebformUser: false,
			isUsingVendor: false,
			isActive: false,
			contentScroll: true
		}
	}
	// componentDidMount() {
	// 	console.log('wizard status: ' + this.props.wizard)
	// 	console.log('main component mounted')
	// 	if (this.props.wizard === false) {
	// 		this.setState({ onWebformQuestionPage: false, 
	// 						onTypeofWebformPage: false, 
	// 						isSourceWizard: false, 
	// 						isUnbounceUser: false, 
	// 						isWebformUser: false, 
	// 						isUsingVendor: true,
	// 						onBeginPage: false,
	// 						walkthrough: true });
	// 		console.log('props.wizard equals: ' + this.props.wizard)
	// 	}
	// }
	sidebarToggle() {
		var active = !this.state.isActive;
		this.setState({ isActive: active });
	}
	sidebarClose() {
		this.setState({ isActive: false });
		window.scrollTo(0, 0);
	}
	restart() {
		this.setState({ isSourceWizard: true });
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
		ReactTooltip.hide()
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
		ReactTooltip.hide()
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
		ReactTooltip.hide()
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
	// toggleContentScroll() {
	// 	this.setState({ contentScroll: !this.state.contentScroll })
	// 	var type = ''
	// 	this.state.contentScroll ? type = "hidden" : type = "scroll"
	// 	document.body.style.overflow = type;
	// }
  	render() {
  		// let wizardComponent = null;
    // 		if (this.state.onBeginPage === true) {
  		// 	wizardComponent = 	<Begin 
  		// 						handleBegin={this.begin.bind(this)} 
  		// 						/>
  		// }
  		// if (this.state.onWebformQuestionPage === true) {
  		// 	wizardComponent = 	<IsThisAWebform 
  		// 						handleWebformYes={this.webformYes.bind(this)} 
  		// 						handleWebformNo={this.webformNo.bind(this)} 
  		// 						handleStartOver={this.startOver.bind(this)}
  		// 						/>
  		// }
  		// if (this.state.onTypeofWebformPage === true) {
  		// 	wizardComponent = 	<TypeOfWebform 
  		// 						handleNonUnbounceUser={this.nonUnbounceWebForm.bind(this)} 
  		// 						handleUnbounceUser={this.unbounceWebForm.bind(this)}
  		// 						handleBegin={this.begin.bind(this)} 
  		// 						/>
  		// }
   		return (
			<div>
				<div>
					<Header hideMenuButton={this.state.isSourceWizard} onClick={this.sidebarToggle.bind(this)} value={this.state.isActive} />
				</div>
				<HashRouter>
					<div>
						<div className={!this.state.isSourceWizard ? 'hidden' : 'wizard-content-body'}>
							{}
						</div>
					<div id={this.state.isSourceWizard ? 'hidden' : 'wrapper'} className={this.state.walkthrough ? 'intro-tour-overlay' : ''}>
						<div className='wrapper-ancestor'>
							<div className={this.state.isActive ? 'active-sidebar-small-screen' : 'sidebar-wrapper'}>
								<div className="sidebar-content">
									<Sidebar>		
										<div className="lead-source-sidebar-div">
											<div className="source-div">
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
											<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/testing-tool" label="Testing Tool"></CustomNavLink>
											<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/reporting" label="Reporting"></CustomNavLink>
											<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/knowledge-base" label="Knowledge Base"></CustomNavLink>
											<CustomNavLink onClick={this.sidebarClose.bind(this)} activeClassName='activePage' to="/conclusion" label="Conclusion"></CustomNavLink>
											<br />
											<CustomNavLink to="#" className="bold" label="Page Overviews"></CustomNavLink>
											<CustomNavLink to="#" label="Coming Soon!"></CustomNavLink>	
											<br />
											<CustomNavLink to="#" className="bold" label="Advanced Tutorials"></CustomNavLink>
											<CustomNavLink to="#" label="Coming Soon!"></CustomNavLink>
										</div>
									</Sidebar>
								</div>
							</div>
							<div id='page-content-wrapper'>
								<div className="app-content-body">
									<Route path='/' exact true component={withTracker(IntroAndFlowCreation)}></Route>
									<Route path='/introandflowcreation' component={withTracker(IntroAndFlowCreation)}></Route>
									<Route path='/sources' render={() => <Sources 
											isUsingVendor={this.state.isUsingVendor} 
											isWebformUser={this.state.isWebformUser} 
											isUnbounceUser={this.state.isUnbounceUser} 
											handleUnbounceUser={this.unbounceWebForm.bind(this)}
											handleNonUnbounceWebForm={this.nonUnbounceWebForm.bind(this)}
											handleVendorSource={this.vendorSource.bind(this)}
											/>}></Route>
									<Route path='/fields' render={() => <Fields 
											isUsingVendor={this.state.isUsingVendor} 
											isWebformUser={this.state.isWebformUser} 
											isUnbounceUser={this.state.isUnbounceUser} 
											handleUnbounceUser={this.unbounceWebForm.bind(this)}
											handleNonUnbounceWebForm={this.nonUnbounceWebForm.bind(this)}
											handleVendorSource={this.vendorSource.bind(this)}
											/>}></Route>
									<Route path='/inbound-field-mapping' render={() => <InboundFieldMapping 
											isUsingVendor={this.state.isUsingVendor} 
											isWebformUser={this.state.isWebformUser} 
											isUnbounceUser={this.state.isUnbounceUser} 
											handleUnbounceUser={this.unbounceWebForm.bind(this)}
											handleNonUnbounceWebForm={this.nonUnbounceWebForm.bind(this)}
											handleVendorSource={this.vendorSource.bind(this)}
											/>}></Route>
									<Route path='/webscraper' component={WebScraper}></Route>
									<Route path='/acceptance-criteria' component={withTracker(AcceptanceCriteria)}></Route>
									<Route path='/posting-instructions' component={withTracker(PostingInstructions)}></Route>
									<Route path='/non-wizard-enhancements' component={withTracker(NonWizardEnhancements)}></Route>
									<Route path='/non-wizard-filters-and-rules' component={withTracker(NonWizardFiltersAndRules)}></Route>
									<Route path='/lead-delivery' component={withTracker(LeadDelivery)}></Route>
									<Route path='/outbound-field-mapping' component={withTracker(OutboundFieldMapping)}></Route>
									<Route path='/response-parsing' component={withTracker(ResponseParsing)}></Route>
									<Route path='/testing-basics' component={withTracker(TestingBasics)}></Route>
									<Route path='/testing-tool' exact true component={withTracker(TestingTool)}></Route>
									<Route path='/reporting' component={withTracker(Reporting)}></Route>
									<Route path='/knowledge-base' component={withTracker(KnowledgeBase)}></Route>
									<Route path='/conclusion' component={withTracker(Conclusion)}></Route>
									<Route path='/testing-tool/:key/:flow/:source' render={props => (
										<ClientTestingPage 
											vendorSource={this.vendorSource.bind(this)} 
											{...props}
										/>
									)}> 
									</Route>							
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

export default Main;