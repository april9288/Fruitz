import React from 'react';

const Login = ({input, click, Isvalid}) => {


	const notValid = () => {
		if (Isvalid === false) {
			return(
					<small id="emailHelp" 
					className="form-text text-danger">Email Invalid!
					</small>
				);
		} else {
			return(
					<small id="emailHelp" 
					className="form-text text-muted">We'll never share your email with anyone else.
					</small>
				);
		}
	}

	return (
		<div className = 'login'> 
			<div className = 'bg_filter'>
			<div className = 'login_container'>
				<h2 className = 'logo'>Fruitz</h2>
				<p id = 'sub_logo'>Fruit Recommendation</p>
				<div className = 'submit_form'>
					  <div className="form-group">
						<div className="card">
						  <div className="card-body">
						  	<div className='email_form'>
						    <input type="email" 
							    className="form-control" 
							    id="exampleInputEmail1" 
							    aria-describedby="emailHelp" 
							    placeholder="Enter email" 
							    onChange = {input}
						    />
						    {notValid()}
							</div>    
						  </div>
						</div>
					  </div>

					  <div>
						  <button type="submit" 
						  		  className="btn btn-rose btn-round mode_button"
						  		  onClick={()=>click("training")}>Training Mode</button>
					  </div>
					  <div>
						  <button type="submit" 
						  	      className="btn btn-rose btn-round mode_button"
						  	      onClick={()=>click("test")}>Test Mode</button>
					  </div>
					  <div>
						  <button type="submit" 
						  	      className="btn btn-primary btn-round mode_button"
						  	      >Tutorial</button>
					  </div>
					</div>
			</div>
			</div>
		</div>
		);
}

export default Login;


