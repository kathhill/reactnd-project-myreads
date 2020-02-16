import React, { Component } from 'react';
import Header from './Header';
import Bookcase from './Bookcase';
import OpenSearchBtn from './OpenSearchBtn';

class ListBooks extends Component {
	render() {
		return (
			<div className='list-books'>
				<Header pageTitle='MyReads' />
				<div className='list-books-content'>
					<Bookcase />
				</div>
				<OpenSearchBtn />
			</div>
		);
	}
}

export default ListBooks;
