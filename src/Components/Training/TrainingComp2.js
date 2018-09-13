import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import searchIcon from '../Photo/search.png';
import Cardlist from './Cardlist';
import Scroll from './Scroll';

const styles = {
  card: {
    width: 345,
    margin: "1rem 0",
    boxShadow: "none!important"
  },
  search: {
    width: "100%",
    padding: "1rem 0",
    border: '2px solid #ccc',
    marginBottom : "0.5rem",
    boxSizing: "border-box",
    borderRadius: 4,
    fontSize: 16,
    backgroundColor: "white",
    backgroundImage: "url(" + searchIcon + ")",
    backgroundPosition: "10px 10px", 
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto",
    paddingLeft: 60
  }
};


function HomeComp1(props) {
  const { classes, searchInput, fruitlist, ratingChanged, ratingValue } = props;
  return (
    <Card className={classes.card}>

     <input type="search" placeholder="Search" className = {classes.search} onChange={searchInput}/>

        <Scroll>
        {
          (fruitlist.length !== 0) ? <Cardlist fruitlist={fruitlist} ratingChanged={ratingChanged} ratingValue={ratingValue}/> : <div></div>
        }
        </Scroll>
    </Card>
  );
}

HomeComp1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeComp1);








  

