import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
  snack: {
    marginTop: "1rem"
  },
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
});

         
const Snack = ({ classes, snackClose, snackOpenerD }) => {

    return (
      <div>
        <Snackbar
          className={classes.snack}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          autoHideDuration={1000} 
          open={snackOpenerD}
          onClose={snackClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Thank you</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={snackClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    );
  }


Snack.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Snack);