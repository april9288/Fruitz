import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const Login = ({input, click, Isvalid}) => {

	return (
		<div className = 'login'> 
			<div className = 'bg_filter'>
			<div className = 'login_container'>
				<h2 className = 'logo'>Fruitz</h2>
				<p id = 'sub_logo'>Fruit Recommendation</p>
				    <Card className = 'submit_card'>
					        <FormControl className = 'submit_form' error={!Isvalid} aria-describedby="name-helper-text">
					          <InputLabel htmlFor="name-helper">Enter email</InputLabel>
					          <Input style={{marginBottom : 10}} id="name-helper" onChange={input} />
					        </FormControl>
				    </Card>
  
					  <div>
					      <Button variant="contained" 
					      	      className="submit_btn"
					      	      onClick={()=>click("main")}>
					        Login
					      </Button>
					  </div>
	{/*				  <div>
						      <Button variant="contained" 
						      		  className="submit_btn"
						      	      onClick={()=>click("test")}>
						        Test Mode
						      </Button>
						  </div>
						  <div>
						      <Button variant="contained" 
						     		  className="submit_btn2"
						              >
						        Tutorial
						      </Button>
						  </div>*/}
					
			</div>
			</div>
		</div>
		);
}

export default Login;