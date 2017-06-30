import React, { Component } from 'react';
import './ChapterStyles.css';
import { Link } from 'react-router-dom';

class SigningIn2 extends Component {
	render() {
		return(
			<div className="ancestor">
				<div className="chapter-content-body">
				<h1 className="title">Signing In</h1>
				<p>To log in and launch LeadConduit, navigate to <a href="https://sso.activeprospect.com/products" target="_blank">sso.activeprospect.com</a>. For more information see <a href="https://support.activeprospect.com/hc/en-us/articles/115002511123-Logging-In-Launching-Products" target="_blank">this article</a>.</p>			
				<Link className="previous-button" style={{ textDecoration: 'none' }} to="/">Back</Link>
				<Link className="next-button" style={{ textDecoration: 'none' }} to="/chapter1">Next</Link>
				</div>
			</div>
		);
	}
}

export default SigningIn2;