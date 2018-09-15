import React from 'react';
import DiscoverError from './DiscoverError';
import DiscoverResult from './DiscoverResult';

const style = {
	display: "inline-grid",
	overflow: "scroll"
}

const resultArray = [
	{name: "Cactus fruit", score: 3.25, img: "https://raw.githubusercontent.com/Horea94/Fruit-Images-Dataset/master/Test/Cactus%20fruit/16_100.jpg"},
	{name: "Banana", score: 3.01, img: "https://images.pexels.com/photos/38283/bananas-fruit-carbohydrates-sweet-38283.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100"},
	{name: "Clementine", score: 2.97, img: "https://raw.githubusercontent.com/Horea94/Fruit-Images-Dataset/master/Test/Clementine/100_100.jpg"},
	{name: "Cocos", score: 2.62, img: "https://raw.githubusercontent.com/Horea94/Fruit-Images-Dataset/master/Test/Cocos/10_100.jpg"},
	{name: "Cantaloupe", score: 2.54, img: "https://raw.githubusercontent.com/Horea94/Fruit-Images-Dataset/master/Test/Cantaloupe%201/102_100.jpg"},
];

const Discover = ({discoverStart, result}) => {

	return (
		<div style={style}>
		{
			(discoverStart) ? <DiscoverResult result={resultArray}/> : <DiscoverError />
		}
		</div>
		);
}

export default Discover;