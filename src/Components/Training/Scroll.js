import React from 'react';

const scrollstyle = { 
	overflowY: 'scroll', 
	border: '0.5px solid skyblue', 
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

