import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';

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
  const { classes, clickMain } = props;
  return (
    <Card className={classes.card}>
     <p className={classes.header}>Profile</p>
        <CardContent>
            <div>
                <Button variant="contained" 
                        className="submit_btn"
                        onClick={()=>clickMain("logout")}
                        >
                  Logout
                </Button>
            </div>
        </CardContent>
    </Card>
  );
}

HomeComp1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeComp1);