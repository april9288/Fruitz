import React from 'react';
import DiscoverError from './DiscoverError';
import DiscoverResult from './DiscoverResult';

const style = {
	display: "inline-grid"
}

const Discover = ({discoverStart, result}) => {

	return (
		<div style={style}>
		{
			(discoverStart) ? <DiscoverResult result={result}/> : <DiscoverError />
		}
		</div>
		);
}

export default Discover;