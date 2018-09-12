import React from 'react';
import TrainingComp1 from './TrainingComp1';
import TrainingComp2 from './TrainingComp2';


const style = {
	display: "inline-grid"
}


const Training = ({searchInput, fruitlist, ratingChanged}) => {

	return (
		<div style={style}>
			<TrainingComp1 />
			<TrainingComp2 searchInput={searchInput} fruitlist={fruitlist} ratingChanged={ratingChanged}/>
		</div>
		);
}

export default Training;