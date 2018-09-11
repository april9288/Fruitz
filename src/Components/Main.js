import React from 'react';
import Home from './Home';
import Training from './Training';
import Test from './Test';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import DashboardIcon from '@material-ui/icons/Dashboard';
import AndroidIcon from '@material-ui/icons/Android';
import PollIcon from '@material-ui/icons/Poll';

const Main = ({value, handleChange, clickMain, route}) => {

const routeFunction = (route) => {
	console.log(`routeFunction's route is ${route}`);
	if (route === "main") {
		return(<Home />);
	} else if (route === "training") {
		return(<Training />);
	} else if (route === "test") {
		return(<Test />);
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
		          <Tab icon={<PollIcon />} label="Test" onClick={()=>clickMain("test")}/>
		        </Tabs>
		      </Paper>
		      
		      <div>
		      {routeFunction(route)}
		      </div>
		</div>
		);
}

export default Main;