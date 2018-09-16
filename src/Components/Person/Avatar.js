import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
    backgroundColor: "rgba(0, 0, 0, 0.24)"
  },
  bigAvatar: {
    width: 100,
    height: 100,
  },
};

const ImageAvatars = ({ classes, emailString }) => {
  return (
    <div className={classes.row}>
      <Avatar
        alt="profile pic"
        src={`https://robohash.org/${emailString}?size=150x150`}
        className={classNames(classes.avatar, classes.bigAvatar)}
      />
    </div>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);