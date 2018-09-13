import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import TrainingPic from './training.jpg';
import CloseIcon from '@material-ui/icons/Close';

const styles = {
  card: {
    maxWidth: 345,
    margin: "1rem 0",
    display: "flow-root",
    backgroundImage: "linear-gradient(266deg, rgba(235, 81, 103, 0.9) 25%, rgba(244, 92, 67, 0.7) 100%), url(" + TrainingPic + ")",
    height: 70,
    minWidth: 345,
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
    margin: 0
  },
  closeIcon: {
    color: "white",
    display: "flex",
    justifyContent: "flex-end"
  }
};


function RateComp1(props) {
  const { classes, CompCardSwitch } = props;
  return (
    <Card className={classes.card}>
          <div className={classes.closeIcon}>
          <CloseIcon onClick={()=>CompCardSwitch(false)} />
          </div>
          <div>
            <p className={classes.header}>Please rate at least 5 items</p>
          </div>
    </Card>
  );
}

RateComp1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RateComp1);