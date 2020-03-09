import React, { Component } from 'react';
import Header from './Header';
import Bookshelf from './Bookshelf';
import OpenSearchBtn from './OpenSearchBtn';

class Bookcase extends Component {
	render() {
		console.log('Props', this.props);
		const { books, bookshelves } = this.props;
		return (
			<div className='list-books'>
				<Header pageTitle='MyReads' />
				<ul className='list-books-content'>
					{bookshelves.map(bookshelf => (
						<Bookshelf
							key={bookshelf.key}
							bookshelf={bookshelf}
							books={books}
						/>
					))}
				</ul>
				<OpenSearchBtn />
			</div>
		);
	}
}

export default Bookcase;
