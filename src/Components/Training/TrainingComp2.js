import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

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
    border: '1px solid skyblue',
    marginBottom : "0.5rem"
  }
};


function HomeComp1(props) {
  const { classes, searchInput, fruitlist, clickRateFruits, ratingChanged } = props;
  return (
    <Card className={classes.card}>

     <input type="search" placeholder="    Search fruits" className = {classes.search} onChange={searchInput}/>

        <Scroll>
        {
          (fruitlist.length !== 0) ? <Cardlist fruitlist={fruitlist} clickRateFruits={clickRateFruits} ratingChanged={ratingChanged}/> : <div></div>
        }
        </Scroll>
    </Card>
  );
}

HomeComp1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeComp1);








  

