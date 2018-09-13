import React, { Component } from 'react';
import Login from './Components/Login';
import Main from './Components/Main';

import {fruitlist} from './Data/fruitlist';

let changedRating = [];

class App extends Component {
constructor() {
    super();
    this.state = {
      route: 'training',
      input_email: 'april9288@gmail.com',
      email_valid: '',
      value: 1,
      fruitlist: '',
      search: '',
      userRating: '',
      changed: ''
    }
  }

//update list of fruit right after rendering
componentDidMount() {
 this.setState({email_valid: true, fruitlist: fruitlist});

 //plzplzplz this is testmode. plz put it in click() function
 this.ratingSetup();
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

//setup user rating empty plate
ratingSetup = () => {
 if (fruitlist.length >= 1){
   let userRating = [];
    userRating.push(   {email : this.state.input_email}   );
   for (let i = 0; i < fruitlist.length; i++) {
    userRating.push({[fruitlist[i].id] : 0});
     //important!!!  i must [] for object key if it's dynamic.
   } 
   this.setState({userRating});
 }
}

//the most important part starts here
ratingChanged = (nextValue, prevValue, fruitId) => {
  // console.log(nextValue, prevValue, fruitId);

  changedRating = this.state.userRating;

  if (nextValue === prevValue) {
    for (let i = 1; i < changedRating.length; i++) {
      if (Number(Object.keys(changedRating[i])) === Number(fruitId)) {
        changedRating[i][i] = 0;
        this.setState({userRating : changedRating});
        break;
      }
    }
  } else {
    for (let i = 1; i < changedRating.length; i++) {
      if (Number(Object.keys(changedRating[i])) === Number(fruitId)) {
        changedRating[i][i] = nextValue;
        this.setState({userRating : changedRating});
        break;
      }
    }
  }
  console.log(changedRating);
}



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
            value = {this.state.value} //material UI tap order value. 0 = left tap
            handleChange = {this.handleChange} //material UI tap click event
            clickMain = {this.clickMain} //
            route = {this.state.route} //route
            searchInput = {this.searchInput} 
            fruitlist ={filteredFruit} //list of fruits for 'training mode'
            ratingChanged = {this.ratingChanged} //star click event
            ratingValue = {this.state.userRating} //user ration value dynamic ex) {itme1: 5 }
            emailString = {this.state.input_email} //it goes to the profile to show user email
          />);
    }
  }
}

export default App;