import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
import ErrorIcon from '@material-ui/icons/ErrorOutline';

const styles = {
  card: {
    maxWidth: 345,
    margin: "1rem 0",
    display: "flow-root",
    height: "50vh",
    minWidth: 345,
  },
  header: {
    fontFamily: "'Baloo Tammudu'!important",
    color: "rgba(0, 0, 0, 0.54)",
    fontSize: "1.5rem",
    display: "block",
    margin: 0
  },
  ErrorIconDiv: {
    color: "#f50057",
    transition: "all .5s ease-in-out",
    '&:hover': {
      transform: "scale(1.1)"
    },
  },
  ErrorIcon : {
    fontSize:"10rem",
    '&:hover': {
      color: "rgba(0, 0, 0, 0.54)"
    },
  }
};


const DiscoverError = ({ classes }) => {
  return (
      <div>
        <div className={classes.ErrorIconDiv}>
        <ErrorIcon className={classes.ErrorIcon}/>
        </div>
        <div>
          <p className={classes.header}>Please rate at least 5 items</p>
        </div>
      </div>
  );
}

DiscoverError.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DiscoverError);