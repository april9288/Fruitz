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

const tapmenu = {
    position: "fixed",
    bottom: 0,
    zIndex: 100,
    width: "100%",
}

const routeFunction = (route, clickMain, searchInput, fruitlist, ratingChanged, discoverStart, emailString, result, lastrate, snackClose, snackOpener, snackOpenerD, fruitnews) => {
	if (route === "main") {
		return(<Home fruitnews={fruitnews}/>);
	} else if (route === "training") {
		return(<Training searchInput={searchInput} fruitlist={fruitlist} ratingChanged={ratingChanged} snackClose={snackClose} snackOpener={snackOpener}/>);
	} else if (route === "discover") {
		return(<Discover discoverStart={discoverStart} result={result} ratingChanged={ratingChanged} lastrate={lastrate} snackClose={snackClose} snackOpenerD={snackOpenerD}/>);
	} else if (route === "person") {
		return(<Person clickMain={clickMain} emailString={emailString} />);
	}
} 


const Main = ({value, handleChange, clickMain, route, searchInput, fruitlist, ratingChanged, discoverStart, emailString, result, lastrate, snackClose, snackOpener, snackOpenerD, fruitnews}) => {

	return (
		<div className = 'main'> 
		      <Paper square style={tapmenu}>
		        <Tabs
		          value={value}
		          onChange={handleChange}
		          fullWidth
		          indicatorColor="secondary"
		          textColor="secondary"
		        >
		          <Tab icon={<DashboardIcon />} label={<span>F<span style={{textTransform: "lowercase"}}>eatured</span></span>} onClick={()=>clickMain("main")}/>
		          <Tab icon={<StarIcon />} label={<span>R<span style={{textTransform: "lowercase"}}>ate</span></span>} onClick={()=>clickMain("training")}/>
		          <Tab icon={<HotIcon />} label={<span>D<span style={{textTransform: "lowercase"}}>iscover</span></span>} onClick={()=>clickMain("discover")}/>
		          <Tab icon={<PersonIcon />} label={<span>A<span style={{textTransform: "lowercase"}}>ccount</span></span>} onClick={()=>clickMain("person")}/>
		        </Tabs>
		      </Paper>
		      
		      <div>
		      {routeFunction(route, clickMain, searchInput, fruitlist, ratingChanged, discoverStart, emailString, result, lastrate, snackClose, snackOpener, snackOpenerD, fruitnews)}
		      </div>
		</div>
		);
}

export default Main;