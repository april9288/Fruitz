import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TrainingPic from './training.jpg';

const styles = {
  card: {
    maxWidth: 345,
    margin: "1rem 0",
    display: "flow-root",
    backgroundImage: "linear-gradient(266deg, rgba(235, 81, 103, 0.9) 25%, rgba(244, 92, 67, 0.7) 100%), url(" + TrainingPic + ")",
    height: 140,
    minWidth: 345,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundBlendMode: "multiply"
  },
  header: {
    fontFamily: "'Baloo Tammudu'!important",
    color: "white",
    fontSize: "1.5rem",
    fontWeight: 400,
    lineHeight: "1.35em",
    paddingTop: "0.2rem",
    display: "block",
    marginBottom: 0
  },
  cardContent: {
    margin:0,
    padding:0
  },
  text: {
    fontFamily: "'Montserrat', sans-serif!important",
    color: "white",
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: "1.46429em",
  },
};


function HomeComp1(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
     
          <div className={classes.bg}>
            <p className={classes.header}>Training Mode</p>
          </div>
        <CardContent className={classes.cardContent}>
          <div className={classes.text}>
            <ol>
              <li>Rate at least 5 items
              </li>
              <li>Then go to discover menu
              </li>
              <li>Default value is 'none'
              </li>
            </ol>
          </div>
        </CardContent>
    </Card>
  );
}

HomeComp1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeComp1);




        // <CardMedia
        //   className={classes.media}
        //   image={TrainingPic}
        //   title="Training photo"
        // />