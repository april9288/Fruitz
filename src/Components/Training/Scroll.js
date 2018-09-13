import React from 'react';

const scrollstyle = { 
	overflowY: 'scroll', 
	border: '2px solid #ccc', 
	height: '600px',
}


const Scroll = ({children}) => {
	return (
		<div style = {scrollstyle}> 
			{children}
		</div>
		);
}

export default Scroll;

