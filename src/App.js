import React, { Component } from 'react';
import Main from './Main';



class App extends Component {
  	render() {
  		console.log(window.location.hash.length);
  		console.log('actual params: ' + window.location.hash);
  		let wizard = null;
  		if ((window.location.hash === '#/') || (window.location.hash.length === 0)) {
  			console.log('homepage');
  			wizard = true
  		} else {
  			console.log('not homepage');
			wizard = false
  		}
  		return (
  			<Main wizard={wizard}/>
  		)
  	}
};
export default App;