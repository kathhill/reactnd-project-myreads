import React from 'react';

const Header = props => {
	return (
		<header className='list-books-title'>
			<h1>{props.pageTitle}</h1>
		</header>
	);
};

export default Header;
