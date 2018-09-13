import React from 'react';
import DiscoverError from './DiscoverError';

const style = {
	display: "inline-grid"
}

const Discover = ({discoverStart}) => {

	return (
		<div style={style}>
		{
			(discoverStart) ? <div>Welcome!</div> : <DiscoverError />
		}
		</div>
		);
}

export default Discover;