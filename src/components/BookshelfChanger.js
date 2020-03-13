import React, { Component } from 'react';

class BookshelfChanger extends Component {
	shelfChange = (event) => {
		this.props.handleShelfChange(this.props.book, event.target.value);
	}
	
	render() {
		const { book } = this.props;
		
		return (
			<div className='book-shelf-changer'>
				<select onChange={this.shelfChange} value={book.shelf}>
					<option value='move' disabled>
						Move to...
					</option>
					<option value='currentlyReading'>Currently Reading</option>
					<option value='wantToRead'>Want to Read</option>
					<option value='read'>Have Read</option>
					<option value='none'>None</option>
				</select>
			</div>
		);
	}
}

export default BookshelfChanger;
