import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import TrainingPic from './training.jpg';

const styles = {
  card: {
    maxWidth: 345,
    margin: "1rem 0"
  },
  media: {
    height: 140,
    minWidth: 345
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
    fontFamily: "'Montserrat', sans-serif!important",
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: "1.46429em",
  }
};


function HomeComp1(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
     <p className={classes.header}>Training Mode</p>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={TrainingPic}
          title="Training photo"
        />
        <CardContent>
          <div className={classes.text}>
            <ol>
              <li>Rate at least 5 items
              </li>
              <li>Default value is 'none'
              </li>
              <li>Hit 'submit' to test
              </li>
            </ol>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

HomeComp1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeComp1);