import React from 'react';

const Scroll = ({submit}) => {
	return (
		<div> 

  <div className="form-group">
    <label>Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  
  <button className="btn btn-primary" onClick={()=>submit("submit")}>Submit</button>

		</div>
		);
}

export default Scroll;

