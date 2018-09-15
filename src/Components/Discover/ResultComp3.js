import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import OrangePic from './orange.jpg';
import StarRatingComponent from 'react-star-rating-component';

const styles = {
  card: {
    width: 345,
    height: 180,
    margin: "1rem 0",
    display: "flow-root",
    backgroundImage: "linear-gradient(266deg, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.2) 50%), url(" + OrangePic + ")",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundBlendMode: "multiply"
  },
  header: {
    fontFamily: "'Baloo Tammudu'!important",
    color: "white",
    fontSize: "1.2rem",
    display: "block",
    margin: "1rem 0 0 0"
  },
  text: {
    color: "white",
    display: "block",
    margin: "0 0 1rem 0"
  },
};

const StarRendering = (nextValue, prevValue, name) => {
  return <i style={{fontSize: "1.7rem"}} className="fa fa-star" aria-hidden="true"></i>
}

function ResultComp3(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
          <div>
            <p className={classes.header}>Last Rate!</p>
            <p className={classes.text}>How do you like our recommendation? The more user data I gather, the better I can recommend</p>
            <StarRatingComponent 
                name={"lastrate"}
                starCount={5}
                value={0}
                renderStarIcon={()=>StarRendering()}
              />
          </div>
    </Card>
  );
}

ResultComp3.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResultComp3);