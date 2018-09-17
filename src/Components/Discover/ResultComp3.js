import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import StarRatingComponent from 'react-star-rating-component';

const styles = {
  card: {
    width: 345,
    height: 200,
    margin: "4rem 0 0 0",
    display: "flow-root",
  },
  header: {
    fontFamily: "'Baloo Tammudu'!important",
    color: "black",
    fontSize: "1.2rem",
    display: "block",
    margin: "1rem 0 0 0"
  },
  text: {
    color: "black",
    display: "block",
    margin: "1rem 0 1rem 0"
  },
  line: {
    background: "#fc00ff", /* fallback for old browsers */
    background: "-webkit-linear-gradient(to right, #00dbde, #fc00ff)",  /* Chrome 10-25, Safari 5.1-6 */
    background: "linear-gradient(to right, #00dbde, #fc00ff)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    height: 2,
    border: "none",
    display: "block",
    width: "100%",
  }
};

const StarRendering = (nextValue, prevValue, name) => {
  return <i style={{fontSize: "3rem"}} className="fa fa-star" aria-hidden="true"></i>
}

const ResultComp3 = ({ classes, ratingChanged, lastrate }) => {
  return (
    <div className={classes.card}>
          <div>     
          <span className = {classes.line}></span>
            <p className={classes.header}>Rate our suggestions</p>
            <StarRatingComponent 
                name={"lastrate"}
                starCount={5}
                value={lastrate}
                onStarClick={ratingChanged}
                renderStarIcon={()=>StarRendering()}
              />
            <p className={classes.text}>The more data we gather, the better we can suggest. Thank you</p>
          </div>
    </div>
  );
}

ResultComp3.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResultComp3);