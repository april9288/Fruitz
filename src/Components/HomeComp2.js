import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Gear from './Photo/gear.jpg';

const styles = {
  card: {
    maxWidth: 345,
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
     <p className={classes.header}>How it works</p>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Gear}
          title="Gear photo"
        />
        <CardContent>
          <Typography component="p" className={classes.text}>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
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