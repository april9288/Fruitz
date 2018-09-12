import React from 'react';
import ReactStars from 'react-stars';

const ratingChanged = (rate, id) => {
  console.log(rate, id);
}

const Rate = () => {
	const id = 66;
	return (
		<div>
		<ReactStars
			  count={5}
			  onChange={(rate) => ratingChanged(rate, id)}
			  size={40}
			  half={false}
			  color2={'#ffd700'} />
		</div>
		);
}

export default Rate;