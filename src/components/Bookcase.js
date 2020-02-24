import React, { Component } from 'react';
import Header from './Header';
import Bookshelf from './Bookshelf';
import OpenSearchBtn from './OpenSearchBtn';

class Bookcase extends Component {
	render() {
		//const { bookshelves, books } = this.props;
		return (
			<div className='list-books'>
				<Header pageTitle='MyReads' />
				<ul className='list-books-content'>
					<Bookshelf />
				</ul>
				<OpenSearchBtn />
			</div>
		);
	}
}

export default Bookcase;
