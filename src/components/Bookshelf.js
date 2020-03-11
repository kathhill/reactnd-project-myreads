import React from 'react';
import Book from './Book.js';

const Bookshelf = props => {
	const { books, shelf, handleShelfChange } = props;
	const currentShelf = books.filter(book => book.shelf === shelf.key);

	return (
		<li className='bookshelf'>
			<h2 className='bookshelf-title'>{shelf.value}</h2>
			<div className='bookshelf-books'>
				<ol className='books-grid'>
					{currentShelf.map(book => (
						<Book book={book} key={book.id} shelf={shelf.key} handleShelfChange={handleShelfChange} />
					))}
				</ol>
			</div>
		</li>
	);
};

export default Bookshelf;
