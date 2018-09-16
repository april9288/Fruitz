import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import StarRatingComponent from 'react-star-rating-component';

const styles = {
  card: {
    width: 345,
    margin: "1rem 0",
    display: "flex",
    justifyContent: "space-evenly",
  },
};

const StarRendering = (nextValue, prevValue, name) => {
  return <i style={{fontSize: "1.7rem"}} className="fa fa-star" aria-hidden="true"></i>
}

const ResultComp2 = ({ classes, result }) => {
  return (
    <div className = {classes.card}>
      <img src = {result.img} alt= '' width = {"50"} height = {"50"}/>
      <div>
        <h5 style={{padding: 0, margin: 0}}>{result.name}</h5>
        <StarRatingComponent 
                starColor={"#f50057"}
                name={result.name}
                editing={false}
                starCount={5}
                value={Math.ceil(result.score)}
                renderStarIcon={()=>StarRendering()}
              />
      </div>
    </div>
  );
}

ResultComp2.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResultComp2);

