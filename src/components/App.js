import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Bookcase from './Bookcase';
import SearchBooks from './SearchBooks';
import * as BooksAPI from '../utils/BooksAPI';
import './App.css';

class BooksApp extends Component {
	shelves = [
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

	/* compiles successfully, but on change, the following error is thrown: 
		TypeError: (intermediate value).concat is not a function
		on page refresh, everything renders with the correct changes displayed
	*/

	handleShelfChange = (book, shelf) => {
		BooksAPI.update(book, shelf).then(response => {
			book.shelf = shelf;
			this.setState(prevState => ({
				books: prevState.books
					.filter(b => b.id !== book.id)
					.concat(book)
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
					render={() => <Bookcase shelves={this.shelves} books={books} handleShelfChange={this.handleShelfChange} />}
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
