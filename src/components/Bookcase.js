import React, { Component } from 'react';
import Header from './Header';
import Bookshelf from './Bookshelf';
import OpenSearchBtn from './OpenSearchBtn';

class Bookcase extends Component {
	render() {
		console.log('Props', this.props);
		const { books, shelves } = this.props;
		return (
			<div className='list-books'>
				<Header pageTitle='MyReads' />
				<ul className='list-books-content'>
					{shelves.map(shelf => (
						<Bookshelf key={shelf.key} shelf={shelf} books={books} />
					))}
				</ul>
				<OpenSearchBtn />
			</div>
		);
	}
}

export default Bookcase;
