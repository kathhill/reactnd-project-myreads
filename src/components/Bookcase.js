import React, { Component } from 'react';
import Header from './Header';
import BookshelfChanger from './BookshelfChanger';
import OpenSearchBtn from './OpenSearchBtn';

class Bookcase extends Component {
	render() {
		return (
			<div className='list-books'>
				<Header pageTitle='MyReads' />
				<ul className='list-books-content'>
					{this.props.books.map(book => (
						<li key={book.id}>
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
									<BookshelfChanger />
								</div>
								<div className='book-title'>{book.title}</div>
								<div className='book-authors'>{book.authors}</div>
							</div>
						</li>
					))}
				</ul>
				<OpenSearchBtn />
			</div>
		);
	}
}

export default Bookcase;
