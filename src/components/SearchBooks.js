import React, { Component } from 'react';
import Header from './Header';
import SearchBooksBar from './SearchBooksBar';
import SearchBooksResults from './SearchBooksResults';

class SearchBooks extends Component {
	render() {
		return (
			<div className='search-books'>
				<Header pageTitle='Search MyReads' />
				<SearchBooksBar />
				<SearchBooksResults />
			</div>
		);
	}
}

export default SearchBooks;
