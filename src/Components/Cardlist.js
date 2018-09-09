import React from 'react';
import Card from './Card';

const Cardlist = ({fruitlist, click}) => {

	const new_list = fruitlist.map((fruit, i) => {
		return <Card key = {fruitlist[i].id} 
					 fruitlist = {fruitlist[i]}
					 click={click} />;
	});

	return (
		<div className = "cardlist_fruits"> 
			{new_list}
		</div>
		);
}

export default Cardlist;



