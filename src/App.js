import React, { Component } from 'react';
import Login from './Components/Login';
import Main from './Components/Main';
import {fruitlist} from './Data/fruitlist';
// import sampleRating from './Data/sampleRating.json';

class App extends Component {
constructor() {
    super();
    this.state = {
      route: 'login', //defualt login
      input_email: '', //default ''
      email_valid: '',
      value: 0, //defualt 0
      fruitlist: '',
      search: '',
      CardSwitch: true,
      discoverStart: false, //default false
      resultArray: [], //real final result top 5 fruits info //need to update to discover menu
      lastrate: 0
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

  if (name === 'lastrate') {
    this.setState({lastrate: nextValue});

    let email = this.state.input_email;
    fetch('http://localhost:3001/lastrate', {
      method: 'post',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({
        email: email,
        lastrate: nextValue,
      })  
    }) //  .then(res => res.json())
    .then(res => console.log(res))
   
    

  } else {
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

}

//when user clicks discover, then need to count number of rating
checkRateCount = () => {
  let fruitlistCopy = this.state.fruitlist;
  let count = 0;
  for (let i = 0; i < fruitlistCopy.length; i++) {
    if (fruitlistCopy[i]["rate"] > 0) {
      count++;
      }
  }
  if (count > 4) {
    this.setState({discoverStart : true});
    //make a ob to send to DB
    this.createNewObj(fruitlistCopy)

  } else {
    this.setState({discoverStart : false});
  }
}

createNewObj = (fruitlistCopy) => {
  let userObj = {};
  let convertedfruitlist = {};
  for (let i = 0; i < fruitlistCopy.length; i++) {
    let name = fruitlistCopy[i].name; //apple, banana...
    let rate = fruitlistCopy[i].rate; //1 to 5 in number
    convertedfruitlist[name] = rate;
  }

  userObj["email"] = this.state.input_email;
  userObj["rate"] = convertedfruitlist;
  // this.setState({userObj:userObj});

  let updated = new Date();
  fetch('http://localhost:3001/rating', {
    method: 'post',
    headers: {'Content-Type' : 'application/json'},
    body: JSON.stringify({
      email: userObj.email,
      updated: updated,
      lastrate: 0,
      rate: userObj.rate
    })  
  })
  .then(res => res.json())
  .then(res => {
    this.calculateKNN(userObj, res)
    })
}

calculateKNN = (userObj, resonseFromServer) => {
  let similarityScores = {}
  for (let i = 0; i < resonseFromServer.length; i++) {
    let similarity = this.euclideanSimilarity(userObj,resonseFromServer[i]);
    if (userObj.email !== resonseFromServer[i].email) {
      similarityScores[resonseFromServer[i].email] = similarity;
    } else {
      similarityScores[resonseFromServer[i].email] = -1;
    }
  }

  resonseFromServer.sort((a,b) => {
    let score1 = similarityScores[a.email];
    let score2 = similarityScores[b.email];
    return score2 - score1;
  });

  //to calculate top 5 fruits
  //last calculation
  let lastResult = {};
  let fruitNames = Object.keys(resonseFromServer[0].rate);
  
  for (let i = 0; i < fruitNames.length; i++) {
    let weightScore = 0;
    let fruitName = fruitNames[i];

    for (let j = 0; j < 5; j++ ) {
      let personRate = resonseFromServer[j].rate[fruitName];
      let personSim = similarityScores[resonseFromServer[j].email];
      let MultiplyRS = personRate * personSim;
      weightScore += MultiplyRS;
    }

    //correction
    let handler = 10;
    let correction;
    let userRate = userObj.rate[fruitName]
    if (userRate !== 0) {
      correction = 1 / ( userRate * handler ) ;
    } else {
      correction = 0; 
    }
    lastResult[fruitName] = (weightScore - correction);
  }

  //sorting the result object
  let sortedResult = [];
  for (let i = 0 ; i < fruitNames.length; i++) {
    let fruitName = fruitNames[i]
    sortedResult.push([fruitName,lastResult[fruitName]]);
  }
  sortedResult.sort((a,b) => b[1]-a[1]);
  //only top5 slice the sorted result
  let top5 = sortedResult.slice(0,5);

  //To create an obj to update to "Discover" menu
  let resultArray = [];
  for (let i = 0; i < top5.length; i++) {
    let objForRA = {};
    let name = top5[i][0];
    let score = top5[i][1];
    let img;

    let fruitlist = this.state.fruitlist;
    for (let j = 0; j < fruitlist.length; j++) {
      if (name === fruitlist[j].name) {
        img = fruitlist[j].img
        break;
      }
    }

    objForRA = {name, score, img}
    resultArray.push(objForRA);
  }

  console.log(resultArray);
  this.setState({resultArray});
}



// core of core function for this webapp
// calculate similarity between two person
euclideanSimilarity = (data1, data2) => {
  let personRateArr1 = Object.values(data1.rate);
  //ex [1,2,3,1,2,3,1,1,1,2,2,2]
  let personRateArr2 = Object.values(data2.rate);

  let sumSquares = 0;
  for (let i = 0; i < personRateArr1.length; i++) {
   if (personRateArr1[i] !== 0 && personRateArr2[i] !== 0) {
     let difference = personRateArr1[i] - personRateArr2[i];
     sumSquares += difference * difference;
   }
  }
  let distance = Math.sqrt(sumSquares);
  let similarity = 1 / (1 + distance);
  return similarity;
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
            result = {this.state.resultArray}
            lastrate = {this.state.lastrate}
          />);
    }
  }
}

export default App;
