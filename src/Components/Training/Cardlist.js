import React from 'react';
import Card from './Card';

const Cardlist = ({fruitlist, ratingChanged}) => {

const new_list = fruitlist.map((fruit, i) => {
		return <Card key = {fruitlist[i].id} 
					 fruitlist = {fruitlist[i]}
					 ratingChanged={ratingChanged}
					 />;
	});


	return (
		<div style={{width: "100%"}}> 
			{new_list}
		</div>
		);
}

export default Cardlist;


