import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import KiwiPic from './kiwi.jpg';

const styles = {
  card: {
    width: 345,
    height: 100,
    display: "flow-root",
    backgroundImage: "linear-gradient(266deg, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.2) 50%), url(" + KiwiPic + ")",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundBlendMode: "multiply"
  },
  header: {
    paddingTop: "1.5rem",
    fontFamily: "'Baloo Tammudu'!important",
    color: "white",
    fontSize: "1.2rem",
    display: "block",
    margin: 0
  }
};


function ResultComp1(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
          <div>
            <p className={classes.header}>You would like these fruits</p>
          </div>
    </Card>
  );
}

ResultComp1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResultComp1);