import React from 'react';
import Book from './Book.js';

const Bookshelf = props => {
	const { books, book } = props;
	return (
		<li className='bookshelf'>
			<h2 className='bookshelf-title'>{props.title}</h2>
			<div className='bookshelf-books'>
				<ol className='books-grid'>
					{books.map(book => (
						<Book />
					))}
					;
				</ol>
			</div>
		</li>
	);
};

export default Bookshelf;
