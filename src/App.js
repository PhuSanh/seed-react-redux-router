import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductListContainer from './containers/Product/ProductListContainer';

class App extends Component {
	render() {
		return (
			<Fragment>
				<h1>Xin chao</h1>
				<ProductListContainer />
			</Fragment>
		);
	}
}

export default App;
