import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Bookcase from './Bookcase';
import SearchBooks from './SearchBooks';
import * as BooksAPI from '../utils/BooksAPI';
import './App.css';

class BooksApp extends Component {
	bookshelves = [
		{ key: 'currentlyReading', value: 'Currently Reading' },
		{ key: 'wantToRead', value: 'Want to Read' },
		{ key: 'read', value: 'Have Read' }
	];

	state = {
		books: []
	};

	componentDidMount = () => {
		BooksAPI.getAll().then(books => {
			this.setState(() => ({
				books
			}));
		});
	};

	render() {
		const { books } = this.state;
		return (
			<div className='app'>
				<Route
					exact
					path='/'
					render={() => (
						<Bookcase bookshelves={this.bookshelves} books={books} />
					)}
				/>
				<Route
					path='/search-books'
					render={() => <SearchBooks books={books} />}
				/>
			</div>
		);
	}
}

export default BooksApp;
