import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

class BooksApp extends React.Component {
	state = {};

	render() {
		return (
			<div className='app'>
				<Route path='/search-books' component={SearchBooks} />
				<Route exact path='/' component={ListBooks} />
			</div>
		);
	}
}

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

class SearchBooks extends Component {
	render() {
		return (
			<div className='search-books'>
				<Header pageTitle='Search MyReads' />
				<SearchBooksBar />
				<SearchBooksResults />
			</div>
		);
	}
}

const Header = props => {
	return (
		<header className='list-books-title'>
			<h1>{props.pageTitle}</h1>
		</header>
	);
};

const Bookcase = () => {
	return (
		<div>
			<Bookshelf />
		</div>
	);
};

const Bookshelf = () => {
	return (
		<div className='bookshelf'>
			<h2 className='bookshelf-title'>Currently Reading</h2>
			<div className='bookshelf-books'>
				<ol className='books-grid'>
					<Book />
				</ol>
			</div>
		</div>
	);
};

const Book = props => {
	return (
		<li>
			<div className='book'>
				<div className='book-top'>
					<div
						className='book-cover'
						style={{
							width: 128,
							height: 193,
							backgroundImage:
								'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")'
						}}
					></div>
					<BookshelfChanger />
				</div>
				<div className='book-title'>To Kill a Mockingbird</div>
				<div className='book-authors'>Harper Lee</div>
			</div>
		</li>
	);
};

class BookshelfChanger extends Component {
	render() {
		return (
			<div className='book-shelf-changer'>
				<select>
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

const OpenSearchBtn = () => {
	return (
		<div className='open-search'>
			<Link to='/search-books'>Add a book</Link>
		</div>
	);
};

const SearchBooksBar = props => {
	return (
		<div className='search-books-bar'>
			<CloseSearchBtn />
			<SearchBooksField />
		</div>
	);
};

const CloseSearchBtn = () => {
	return (
		<Link to='/' className='close-search'>
			Close
		</Link>
	);
};

class SearchBooksField extends Component {
	render() {
		return (
			<div className='search-books-input-wrapper'>
				{/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
				<input type='text' placeholder='Search by title or author' />
			</div>
		);
	}
}

const SearchBooksResults = props => {
	return (
		<div className='search-books-results'>
			<ol className='books-grid'></ol>
		</div>
	);
};

export default BooksApp;
