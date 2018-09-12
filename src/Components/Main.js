import React from 'react';
import Home from './Home/Home';
import Training from './Training/Training';
import Discover from './Discover/Discover';
import Person from './Person/Person';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import DashboardIcon from '@material-ui/icons/Dashboard';
import AndroidIcon from '@material-ui/icons/Android';
import PollIcon from '@material-ui/icons/Poll';
import PersonIcon from '@material-ui/icons/Person';

const Main = ({value, handleChange, clickMain, route, fruitlist, clickRateFruits, ratingChanged}) => {

const routeFunction = (route, clickMain, fruitlist, clickRateFruits, ratingChanged) => {
	if (route === "main") {
		return(<Home />);
	} else if (route === "training") {
		return(<Training fruitlist={fruitlist} clickRateFruits={clickRateFruits} ratingChanged={ratingChanged}/>);
	} else if (route === "discover") {
		return(<Discover />);
	} else if (route === "person") {
		console.log(`person clicked`);
		return(<Person clickMain={clickMain} />);
	}
} 

	return (
		<div className = 'main'> 
		      <Paper square>
		        <Tabs
		          value={value}
		          onChange={handleChange}
		          fullWidth
		          indicatorColor="secondary"
		          textColor="secondary"
		        >
		          <Tab icon={<DashboardIcon />} label="Home" onClick={()=>clickMain("main")}/>
		          <Tab icon={<AndroidIcon />} label="Training" onClick={()=>clickMain("training")}/>
		          <Tab icon={<PollIcon />} label="Discover" onClick={()=>clickMain("discover")}/>
		          <Tab icon={<PersonIcon />} label="Profile" onClick={()=>clickMain("person")}/>
		        </Tabs>
		      </Paper>
		      
		      <div>
		      {routeFunction(route, clickMain, fruitlist, clickRateFruits, ratingChanged)}
		      </div>
		</div>
		);
}

export default Main;