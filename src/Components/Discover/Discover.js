import React from 'react';
import DiscoverError from './DiscoverError';
import DiscoverResult from './DiscoverResult';

const style = {
	display: "inline-grid"
}

const Discover = ({discoverStart}) => {

	return (
		<div style={style}>
		{
			(discoverStart) ? <DiscoverResult /> : <DiscoverError />
		}
		</div>
		);
}

export default Discover;