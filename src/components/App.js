import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
// import * as BooksAPI from './utils/BooksAPI';
import './App.css';

class BooksApp extends Component {
	state = {};

	// componentDidMount = () => {
	// 	BooksAPI.getAll().then(books => {
	// 		this.setState(() => ({
	// 			books
	// 		}));
	// 	});
	// };

	render() {
		return (
			<div className='app'>
				<Route exact path='/' component={ListBooks} />
				<Route path='/search-books' component={SearchBooks} />
			</div>
		);
	}
}

export default BooksApp;
