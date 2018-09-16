import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from './Avatar';
import Button from '@material-ui/core/Button';

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


const PersonComp1 = ({ classes, clickMain, emailString }) => {
  return (
    <Card className={classes.card}>
     <p className={classes.header}>Profile</p>
        <Avatar emailString={emailString}/>
        <CardContent>
              <p>{emailString}</p>
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

PersonComp1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PersonComp1);