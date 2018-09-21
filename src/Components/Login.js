import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Background from './Photo/bg1.jpg';

const validation = (Isvalid) => {
	if (Isvalid === false) {
		return (<p className = "validationText" style={{color: "red"}}>invalid</p>);
	} else if (Isvalid === true) {
		return (<p className = "validationText" style={{color: "green"}}>valid</p>);
	} else if ("default") {
		return (<p className = "validationText" style={{color: "green"}}>required</p>);
	}
}

const Login = ({input, click, Isvalid}) => {

	return (
		<div className = 'login' style={{backgroundImage: "url(" + Background + ")"}}> 
			<div className = 'bg_filter'>
			<div className = 'login_container'>
				<h2 className = 'logo'>Fruitz</h2>
				<p id = 'sub_logo'>Discover your favorite fruits</p>
				<form onSubmit={()=>click("main")}>
				    <Card className = 'submit_card'>
					        <input className = "emailinput" type = "email" placeholder = "Enter email" onChange={input} autoFocus="true" required="true"/>
				    		<span>{validation(Isvalid)}</span>
				    </Card>
  
					  <div>
					      <Button variant="contained" 
					      	      className="submit_btn"
					      	      >
					        Login
					      </Button>
					  </div>
				</form>
				<div>beta 0.0.9</div>					
			</div>
			</div>
		</div>
		);
}

export default Login;