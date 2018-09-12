import React from 'react';
import TrainingComp1 from './TrainingComp1';
import TrainingComp2 from './TrainingComp2';

const style = {
	margin : "1rem",
	display: "inline-grid"
}


const Training = () => {

	return (
		<div style={style}>
			<TrainingComp1 />
			<TrainingComp2 />
		</div>
		);
}

export default Training;