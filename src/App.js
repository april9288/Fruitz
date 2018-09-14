import React, { Component } from 'react';
import Login from './Components/Login';
import Main from './Components/Main';
import {fruitlist} from './Data/fruitlist';

class App extends Component {
constructor() {
    super();
    this.state = {
      route: 'discover',
      input_email: 'april9288@gmail.com',
      email_valid: '',
      value: 2,
      fruitlist: '',
      search: '',
      CardSwitch: true,
      discoverStart: false
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
    this.setState({route: route, search: ''});
  } else if (route === "discover") {
    this.setState({route: route});
    this.checkRateCount();
  } else if (route === "person") {
    this.setState({route: route});
  } else if (route === "logout") {
    this.setState({route : 'login', input_email: '', email_valid: '', value: 0, fruitlist: '', search: ''});
  }  
};

//app top menu handler
//value 0 = first menu
handleChange = (event, value) => {
    this.setState({ value });
  };

CompCardSwitch = (CardSwitch) => {
    this.setState({ CardSwitch });
  };

//the most important part starts here
ratingChanged = (nextValue, prevValue, name) => {
  //5 0 "1"
  //rate 5, prev 0, fruit id
  let changedList = this.state.fruitlist;
  let indexforList = Number(name) - 1; //starting from 0
  if (nextValue === prevValue) {
    changedList[indexforList]["rate"] = 0;
    this.setState({fruitlist:changedList});
  } else {
    changedList[indexforList]["rate"] = nextValue;
    this.setState({fruitlist:changedList});  
  }
}

//when user clicks discover, then need to count number of rating
checkRateCount = () => {
  let checkList = this.state.fruitlist;
  let count = 0;
  for (let i = 0; i < checkList.length; i++) {
    if (checkList[i]["rate"] > 0) {
      count++;
      }
  }
  console.log(`count : ${count}`);
  if (count > 4) {
    this.setState({discoverStart : true});
  } else {
    this.setState({discoverStart : false});
  }
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
            CardSwitch = {this.state.CardSwitch} //true or false
            CompCardSwitch = {this.CompCardSwitch} //RateComp1 card close switch
            discoverStart = {this.state.discoverStart} //if user rates more than 4, start calculating
            emailString = {this.state.input_email} //it goes to the profile to show user email
          />);
    }
  }
}

export default App;
