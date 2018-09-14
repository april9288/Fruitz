import React, { Component } from 'react';
import Login from './Components/Login';
import Main from './Components/Main';
import {fruitlist} from './Data/fruitlist';
import sampleRating from './Data/samplerating.json';

class App extends Component {
constructor() {
    super();
    this.state = {
      route: 'training', //defualt login
      input_email: 'april9288@gmail.com', //default ''
      email_valid: '',
      value: 1, //defualt 0
      fruitlist: '',
      search: '',
      CardSwitch: true,
      discoverStart: false, //default false
      sampleRating: '' //default remove it
    }
  }

//update list of fruit right after rendering
componentDidMount() {
 this.setState({email_valid: true, fruitlist: fruitlist}); 
 // this.setState({sampleRating}); //default remove it
 this.calculateKNN(); //default remove it
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
  if (count > 4) {
    this.setState({discoverStart : true});
    console.log(fruitlist);
    //make a ob to send to DB
    this.createNewObj()
    //send it to DB
    //receive total data from DB
    //calculate
    //show
    //star final rate
  } else {
    this.setState({discoverStart : false});
  }
}


// mongoose obj schema
// {
//   "email": "april@gmail.com",
//   "rate" : {
//     "apple" : 2,
//     "banana" : 0,
//     "cherry" : 5,
//     "orange" : 0
//   }
// }

createNewObj = () => {
  let email = this.state.input_email;
  let userObj = {};
  userObj["email"] = email;
  let listcopy = {};
  let list = this.state.fruitlist;
  for (let i = 0; i < list.length; i++) {
    let name = list[i].name; //apple, banana...
    let rate = list[i].rate; //1 to 5 in number
    listcopy[name] = rate;
  }
  userObj["rate"] = listcopy;
  this.sendtoDB(listcopy);
}

sendtoDB= (listcopy) => {
  fetch('http://localhost:3001/rating', {
    method: 'post',
    headers: {'Content-Type' : 'application/json'},
    body: JSON.stringify({
      email: this.state.input_email,
      rate: listcopy
    })  
  })
  .then(res => res.json())
  .then(res => {
    console.log("response from server");
    console.log(res);
    })
}



calculateKNN = () => {
  console.log("hi");
  console.log(sampleRating[0].rate["Banana"]);
}

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
//!!!!!!!!!!!!!!!!!!!!!!!test purpose!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////


// createNewObj = () => {
//   let arrayset = [0, 1, 2, 3, 4, 5];
//   let listcopy = {};
//   let list = this.state.fruitlist;
//   for (let i = 0; i < list.length; i++) {
//     let name = list[i].name; //apple, banana...
//     let rate = arrayset[Math.floor(Math.random() * 6)]
//     listcopy[name] = rate;
//   }
//   this.sendtoDB(listcopy);
// }

// sendtoDB= (listcopy) => {
//   let letterset = 'abcdefghijklmnopqrstuvwxyz';
//   let email = `${letterset[Math.floor(Math.random() * 25)]}${letterset[Math.floor(Math.random() * 25)]}${letterset[Math.floor(Math.random() * 25)]}${letterset[Math.floor(Math.random() * 25)]}@gmail.com`;

//   fetch('http://localhost:3001/rating', {
//     method: 'post',
//     headers: {'Content-Type' : 'application/json'},
//     body: JSON.stringify({
//       email: email,
//       rate: listcopy
//     })  
//   })
//   .then(res => res.json())
//   .then(res => {
//     console.log("response from server");
//     console.log(res);
//     })
// }






///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// euclideanSimilarity = (data1, data2) => {
//  let sumSquares = 0;
//  for (let i = 0; i < data1.length; i++) {
//    let rate1 = data1[i][i+1];
//    let rate2 = data2[i][i+1];
//    if (rate1 !== "none" && rate2 !== "none") {
//      let difference = rate1 - rate2;
//      sumSquares += difference * difference;
//    }
//  }
//  let distance = Math.sqrt(sumSquares);
//  let similarity = 1 / (1 + distance);
//  console.log("distance : ", distance);
//  console.log("similarity : ", similarity);
//  this.setState({similarity});
// }


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
