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

const Main = ({value, handleChange, clickMain, route, searchInput, fruitlist, ratingChanged, emailString}) => {

const routeFunction = (route, clickMain, searchInput, fruitlist, ratingChanged, emailString) => {
	if (route === "main") {
		return(<Home />);
	} else if (route === "training") {
		return(<Training searchInput={searchInput} fruitlist={fruitlist} ratingChanged={ratingChanged}/>);
	} else if (route === "discover") {
		return(<Discover />);
	} else if (route === "person") {
		return(<Person clickMain={clickMain} emailString={emailString}/>);
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
		      {routeFunction(route, clickMain, searchInput, fruitlist, ratingChanged, emailString)}
		      </div>
		</div>
		);
}

export default Main;