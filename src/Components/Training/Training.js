import React from 'react';
import TrainingComp1 from './TrainingComp1';
import TrainingComp2 from './TrainingComp2';


const style = {
	display: "inline-grid"
}


const Training = ({searchInput, fruitlist, ratingChanged, CardSwitch, CompCardSwitch}) => {

	return (
		<div style={style}>
			{
				(CardSwitch) ? <TrainingComp1 CompCardSwitch={CompCardSwitch}/> : <span></span>
			}
			
			<TrainingComp2 searchInput={searchInput} fruitlist={fruitlist} ratingChanged={ratingChanged} />
		</div>
		);
}

export default Training;