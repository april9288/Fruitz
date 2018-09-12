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
      fruitlist: '',
      search: ''
    }
  }

//update list of fruit right after rendering
componentDidMount() {
 this.setState({email_valid: true, fruitlist: fruitlist});
 };

//check email field validation
validateEmail = (email_test) => {
  let allowed = /^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,4}$)/; 
  return allowed.test(email_test);
};

//when input in email field, then update it to state only if it's valid
inputEmail = (event) => {
  let email_test = event.target.value;
  if (this.validateEmail(email_test)){
    this.setState({input_email: email_test, email_valid: true});
  } else {
    this.setState({email_valid: false});
  }
};

//when there is an input in search field, then update it to state
searchInput = (event) => {
  let search =  event.target.value;
  this.setState({search});
}

//when click event happens in login.js
click = (route) => {
  if (this.state.email_valid === true && this.state.input_email.length >= 3){
    this.setState({route: route});
  } else {
    this.setState({route: 'login'});
  }    
};

//when click event happens in main.js
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
};

//app top menu handler
//value 0 = first menu
handleChange = (event, value) => {
    this.setState({ value });
  };

//the most important part starts here
ratingChanged = (rate, fruitId) => {
  console.log(rate, fruitId);
};

render() {
    //length : 0 or false
    let filteredFruit = this.state.fruitlist;
    if (this.state.fruitlist.length >= 1) {
      filteredFruit = this.state.fruitlist.filter(fruit=> {
        return fruit.name.toLowerCase().includes(this.state.search.toLowerCase());
      })
    }

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
            searchInput = {this.searchInput}
            fruitlist ={filteredFruit}
            ratingChanged = {this.ratingChanged}
            emailString = {this.state.input_email}
          />);
    }
  }
}

export default App;
