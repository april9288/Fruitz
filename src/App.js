import React, { Component } from 'react';
import {fruitlist} from './fruitlist';
import Searchbox from './Components/Searchbox';
import Cardlist from './Components/Cardlist';
import Scroll from './Components/Scroll';
import Submit from './Components/Submit';
import Login from './Components/Login';
import Main from './Components/Main';

import {sampleuser} from './sampleuser';

class App extends Component {
constructor() {
		super();
		this.state = {
			route: 'login',
			input_email: '',
			email_valid: '',
			// fruitlist: [],
			// searchField : '',
			// personal_rating: '',
			// sampleuser:[],
			// similarity: ''
		}
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
	if (this.state.email_valid){
		this.setState({route: route});
	} else {
		this.setState({route: 'login'});
	}    
  }







// onInputChange = (event) => {
// 		this.setState({searchField: event.target.value});
// 	}

// componentDidMount() {
// 	this.setState({fruitlist});
// 	this.setState({sampleuser});
// 	this.rating_setup();
// 	}

// click = (rating) => {
// 	let indexx = rating[0];
// 	// ex... rating[0] would be from 1 to 12 in integer.
// 	let new_rating = this.state.personal_rating;
// 	for (let i = 0; i < new_rating.length; i++) {
// 		if (Number(Object.keys(new_rating[i])) === indexx) {
// 			new_rating[i][i+1] = rating[1];
// 		}
// 		this.setState({personal_rating:new_rating});
// 	}
//   }

// rating_setup = () => {
// 	if (fruitlist.length >= 0){
// 		let personal_rating = [];
// 		for (let i = 0; i < fruitlist.length; i ++) {
// 			personal_rating.push({[fruitlist[i].id] : 'none'});
// 			//important!!!  i must [] for object key if it's dynamic.
// 		}	
// 		this.setState({personal_rating});
// 	}
// }

// submit = () => {

// 	let data1 = this.state.personal_rating;
// 	let data2 = this.state.sampleusers;
// 	let similarityScores = {};

// 	for (let i = 0 ; i < data1.length; i++) {
// 		if () {
// 			this.euclideanSimilarity(data1, data2);
// 		} else {

// 		}
// 	}

	

// }

// euclideanSimilarity = (data1, data2) => {
// 	let sumSquares = 0;
// 	for (let i = 0; i < data1.length; i++) {
// 		let rate1 = data1[i][i+1];
// 		let rate2 = data2[i][i+1];
// 		if (rate1 !== "none" && rate2 !== "none") {
// 			let difference = rate1 - rate2;
// 			sumSquares += difference * difference;
// 		}
// 	}

// 	let distance = Math.sqrt(sumSquares);
// 	let similarity = 1 / (1 + distance);
// 	console.log("distance : ", distance);
// 	console.log("similarity : ", similarity);
// 	this.setState({similarity});

// }


render() {
	// console.log("rating array",this.state.personal_rating);
	// console.log("sample user", this.state.sampleuser);
	// const filtered_fruits = this.state.fruitlist.filter(fruit => {
	// 		return fruit.name.toLowerCase().includes(this.state.searchField.toLowerCase());
	// 	});

	if (this.state.route === 'login') {
		return (<Login 
				input = {this.inputEmail}
				click = {this.click}
				Isvalid = {this.state.email_valid}
				/>);
	} else {
		return (<Main />);
	}
    		
      		
      		

{/*        <h2 className="card-title text-center">Fruitz</h2>
        <h4 className="card-title text-center">Fruit Recommendation App</h4>
		<Searchbox onInput = {this.onInputChange}/>
		<Scroll>
			<Cardlist fruitlist ={filtered_fruits}
					  click = {this.click}	 />
		</Scroll>
		<Submit submit = {this.submit}/>
*/}

  }
}

export default App;
