import React, { Component } from 'react';
import Login from './Components/Login';
import Main from './Components/Main';

import {fruitlist} from './Data/fruitlist';

class App extends Component {
constructor() {
    super();
    this.state = {
      route: 'login',
      input_email: '',
      email_valid: '',
      value: 0,
      fruitlist: ''
    }
  }

componentDidMount() {
 this.setState({email_valid: true, fruitlist: fruitlist});
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
  if (route === "main") {
    this.setState({route});
  } else if (route === "training") {
    this.setState({route, fruitlist});
  } else if (route === "discover") {
    this.setState({route});
  } else if (route === "person") {
    this.setState({route});
  } else if (route === "logout") {
    this.setState({route : 'login', input_email: '', email_valid: '', value: 0});
  }  
}


handleChange = (event, value) => {
    this.setState({ value });
  };

filterFruits = () => {
  if (this.state.fruitlist.length >= 1 ) {
    console.log("filter and data sample : ", this.state.fruitlist[0]);
      const filtered_fruits = this.state.fruitlist.filter(fruit => {
        return fruit.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
      return filtered_fruits;
  } else {
    console.log("no filter");
    return this.state.fruitlist;
  }
} 

clickRateFruits = (RateFruits) => {
  console.log(`click : ${RateFruits}`);
}

ratingChanged = (rate, fruitId) => {
  console.log(rate, fruitId);
}

render() {
    if (this.state.route === 'login') {
      return (<Login 
          input = {this.inputEmail}
          click = {this.click}
          Isvalid = {this.state.email_valid}
          />);
    } else {
      console.log("data : ", this.state.fruitlist);
      return (<Main
            value = {this.state.value}
            handleChange = {this.handleChange} 
            clickMain = {this.clickMain}
            route = {this.state.route}
            fruitlist ={this.state.fruitlist}
            clickRateFruits = {this.clickRateFruits}
            ratingChanged = {this.ratingChanged}
          />);
    }
  }
}

export default App;
