import React from 'react';
import { Link } from 'react-router-dom';

const CloseSearchBtn = () => {
	return (
		<Link to='/' className='close-search'>
			Close
		</Link>
	);
};

export default CloseSearchBtn;
