import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';

const styles = {
  card: {
    width: 345,
    margin: "1rem 0",
    display: "flow-root",
  },
};


const Result = ({ classes, result }) => {

  return (
    <div>
    </div>
  );
}

Result.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Result);