import React, { Component } from 'react';
import Login from './Components/Login';
import Main from './Components/Main';

class App extends Component {
constructor() {
    super();
    this.state = {
      route: 'login',
      input_email: '',
      email_valid: '',
      value: 0,
    }
  }

componentDidMount() {
 this.setState({email_valid: true});
 }

validateEmail = (email_test) => {
  let allowed = /^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,4}$)/; 
  return allowed.test(email_test);
}

inputEmail = (event) => {
  let email_test = event.target.value;
  if (this.validateEmail(email_test)){
    this.setState({input_email: email_test, email_valid: true});
  } else {
    this.setState({email_valid: false});
  }
}

click = (route) => {
  if (this.state.email_valid === true && this.state.input_email.length >= 3){
    this.setState({route: route});
  } else {
    this.setState({route: 'login'});
  }    
}

clickMain = (route) => {
  if (route !== "logout") {
    this.setState({route});
  } else if (route === "logout") {
    this.setState({route : 'login', input_email: '', email_valid: '', value: 0});
  }
  
}


handleChange = (event, value) => {
    this.setState({ value });
  };

render() {
    if (this.state.route === 'login') {
      return (<Login 
          input = {this.inputEmail}
          click = {this.click}
          Isvalid = {this.state.email_valid}
          />);
    } else {
      return (<Main
            value = {this.state.value}
            handleChange = {this.handleChange} 
            clickMain = {this.clickMain}
            route = {this.state.route}
          />);
    }
  }
}

export default App;
