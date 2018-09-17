import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
  snack: {
    marginBottom: "5rem"
  },
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
});


const Snack = ({ classes, snackClose, snackOpener }) => {

    return (
      <div>
        <Snackbar
          className={classes.snack}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          autoHideDuration={5000}
          open={snackOpener}
          onClose={snackClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Rate at least 5 items and hit Discover</span>}
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


        // <Button onClick={snackClick}>Open simple snackbar</Button>