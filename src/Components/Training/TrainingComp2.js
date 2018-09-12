import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import Cardlist from './Cardlist';
import Scroll from './Scroll';

const styles = {
  card: {
    width: 345,
    margin: "1rem 0"
  },
  search: {
    width: "90%",
    margin: "1rem",
    padding: "1rem 0"
  }
};


function HomeComp1(props) {
  const { classes, fruitlist, clickRateFruits, ratingChanged } = props;
  return (
    <Card className={classes.card}>
     <input type="search" placeholder="    Search fruits" className = {classes.search}/>
        <Scroll>
        {
          (fruitlist.length >= 1) ? <Cardlist fruitlist={fruitlist} clickRateFruits={clickRateFruits} ratingChanged={ratingChanged}/> : <div>Loading</div>
        }
        </Scroll>
    </Card>
  );
}

HomeComp1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeComp1);








  

