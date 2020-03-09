import React, { Component } from 'react';
import Book from './Book.js';

class Bookshelf extends Component {
	render() {
		console.log('Props', this.props);
		const { books, bookshelf } = this.props;
		return (
			<li className='bookshelf'>
				<h2 className='bookshelf-title'>{bookshelf.value}</h2>
				<div className='bookshelf-books'>
					<ol className='books-grid'>
						{books.map(book => (
							<Book book={book} key={book.id} />
						))}
					</ol>
				</div>
			</li>
		);
	}
}

export default Bookshelf;
