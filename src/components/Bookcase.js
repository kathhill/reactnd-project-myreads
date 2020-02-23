import React, { Component } from 'react';
import Header from './Header';
import OpenSearchBtn from './OpenSearchBtn';

class Bookcase extends Component {
	render() {
		return (
			<div className='list-books'>
				<Header pageTitle='MyReads' />
				<ul className='list-books-content'>
					{this.props.books.map(book => (
						<li key={book.id}>{book.title}</li>
					))}
				</ul>
				<OpenSearchBtn />
			</div>
		);
	}
}

export default Bookcase;
