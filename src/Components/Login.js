import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Background from './Photo/bg1.jpg';

const validation = (Isvalid) => {
	if (!Isvalid) {
		return (<p className = "validationText" style={{color: "red"}}>invalid</p>);
	} else {
		return (<p className = "validationText" style={{color: "green"}}>valid</p>);
	}
}

const Login = ({input, click, Isvalid}) => {

	return (
		<div className = 'login' style={{backgroundImage: "url(" + Background + ")"}}> 
			<div className = 'bg_filter'>
			<div className = 'login_container'>
				<h2 className = 'logo'>Fruitz</h2>
				<p id = 'sub_logo'>Discover your favorite fruits</p>
				    <Card className = 'submit_card'>
					        <input className = "emailinput" type = "email" placeholder = "Enter email" onChange={input}/>
				    		<span>{validation(Isvalid)}</span>
				    </Card>
  
					  <div>
					      <Button variant="contained" 
					      	      className="submit_btn"
					      	      onClick={()=>click("main")}>
					        Login
					      </Button>
					  </div>
				<div>beta 0.0.4</div>					
			</div>
			</div>
		</div>
		);
}

export default Login;