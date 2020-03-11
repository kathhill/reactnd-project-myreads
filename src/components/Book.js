import React from 'react';
import BookshelfChanger from './BookshelfChanger';

const Book = props => {
	const { book, bookshelf, handleShelfChange } = props;
	return (
		<li key={book.id} bookshelf={bookshelf}>
			<div className='book'>
				<div className='book-top'>
					<div
						className='book-cover'
						style={{
							width: 128,
							height: 193,
							backgroundImage: `url(${book.imageLinks.thumbnail})`
						}}
					></div>
					<BookshelfChanger book={book} bookshelf={bookshelf} handleShelfChange={handleShelfChange} />
				</div>
				<div className='book-title'>{book.title}</div>
				<div className='book-authors'>{book.authors}</div>
			</div>
		</li>
	);
};

export default Book;
