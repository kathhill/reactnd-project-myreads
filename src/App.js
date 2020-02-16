import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import './App.css';

class BooksApp extends Component {
	state = {};

	render() {
		return (
			<div className='app'>
				<Route path='/search-books' component={SearchBooks} />
				<Route exact path='/' component={ListBooks} />
			</div>
		);
	}
}

export default BooksApp;
