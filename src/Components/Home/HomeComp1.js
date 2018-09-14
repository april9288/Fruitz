import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Cherry from './cherry.jpg';

const styles = {
  card: {
    maxWidth: 345,
    minWidth: 345,
    margin: "1rem 0"
  },
  media: {
    height: 140,
  },
  header: {
    fontFamily: "'Baloo Tammudu'!important",
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: "1.5rem",
    fontWeight: 400,
    lineHeight: "1.35em",
    paddingTop: "0.2rem",
    display: "block"
  },
  text: {
    fontFamily: "'Montserrat', sans-serif!important"
  }
};


function HomeComp1(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
     <p className={classes.header}>Welcome to Fruitz</p>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Cherry}
          title="Cherry photo"
        />
        <CardContent>
          <Typography component="p" className={classes.text}>
            Hello, We help you find your next favorite fruits. Discover new fruits with us.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

HomeComp1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeComp1);