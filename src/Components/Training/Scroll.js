import React from 'react';

const Scroll = ({children}) => {
	return (
		<div style = {{ overflowY: 'scroll', border: '0.5px solid skyblue', height: '600px'}}> 
			{children}
		</div>
		);
}

export default Scroll;

