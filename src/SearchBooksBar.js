import React from 'react';
import CloseSearchBtn from './CloseSearchBtn';
import SearchBooksField from './SearchBooksField';

const SearchBooksBar = props => {
	return (
		<div className='search-books-bar'>
			<CloseSearchBtn />
			<SearchBooksField />
		</div>
	);
};

export default SearchBooksBar;
