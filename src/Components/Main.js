import React from 'react';
import Home from './Home/Home';
import Training from './Training/Training';
import Discover from './Discover/Discover';
import Person from './Person/Person';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import DashboardIcon from '@material-ui/icons/Dashboard';
import StarIcon from '@material-ui/icons/Star';
import HotIcon from '@material-ui/icons/Whatshot';
import PersonIcon from '@material-ui/icons/Person';

const Main = ({value, handleChange, clickMain, route, searchInput, fruitlist, ratingChanged, CardSwitch, CompCardSwitch, discoverStart, emailString, result, lastrate}) => {

const routeFunction = (route, clickMain, searchInput, fruitlist, ratingChanged, CardSwitch, CompCardSwitch, discoverStart, emailString, result, lastrate) => {
	if (route === "main") {
		return(<Home />);
	} else if (route === "training") {
		return(<Training searchInput={searchInput} fruitlist={fruitlist} ratingChanged={ratingChanged} CardSwitch={CardSwitch} CompCardSwitch={CompCardSwitch}/>);
	} else if (route === "discover") {
		return(<Discover discoverStart={discoverStart} result={result} ratingChanged={ratingChanged} lastrate={lastrate}/>);
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
		          <Tab icon={<DashboardIcon />} label={<span>H<span style={{textTransform: "lowercase"}}>ome</span></span>} onClick={()=>clickMain("main")}/>
		          <Tab icon={<StarIcon />} label={<span>R<span style={{textTransform: "lowercase"}}>ate</span></span>} onClick={()=>clickMain("training")}/>
		          <Tab icon={<HotIcon />} label={<span>D<span style={{textTransform: "lowercase"}}>iscover</span></span>} onClick={()=>clickMain("discover")}/>
		          <Tab icon={<PersonIcon />} label={<span>P<span style={{textTransform: "lowercase"}}>rofile</span></span>} onClick={()=>clickMain("person")}/>
		        </Tabs>
		      </Paper>
		      
		      <div>
		      {routeFunction(route, clickMain, searchInput, fruitlist, ratingChanged, CardSwitch, CompCardSwitch, discoverStart, emailString, result, lastrate)}
		      </div>
		</div>
		);
}

export default Main;