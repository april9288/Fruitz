import React from 'react';

const Searchbox = ({onInput}) => {
return (
	<div>
	<form className="search_form">
	  <div>
	      <input type="search" className="form-control" placeholder="Search fruits" onChange = {onInput}/>
	  </div>
	</form>
	</div>
	);
}

export default Searchbox;

