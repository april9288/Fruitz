import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
  card: {
    width: 345,
    margin: "1rem 0",
    display: "flow-root",
  },
};


function DiscoverResult(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
       <CircularProgress color="secondary" thickness={5} size={100}/>
    </Card>
  );
}

DiscoverResult.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DiscoverResult);