import React from 'react';
import PersonComp1 from './PersonComp1';

const style = {
	display: "inline-grid"
}


const Person = ({clickMain, emailString}) => {

	return (
		<div style = {style}>
			<PersonComp1 clickMain={clickMain} emailString={emailString}/>
		</div>
		);
}

export default Person;