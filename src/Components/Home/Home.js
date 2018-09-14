import React from 'react';
import HomeComp1 from './HomeComp1';
import HomeComp2 from './HomeComp2';

const style = {
	display: "inline-grid"
}


const Home = () => {

	return (
		<div style = {style}>
		<HomeComp1 />
		<HomeComp2 />
		</div>
		);
}

export default Home;