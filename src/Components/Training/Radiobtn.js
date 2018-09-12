import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

const styles = {
  root: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
  checked: {},
  size: {
    width: 40,
    height: 40,
  },
  sizeIcon: {
    fontSize: 20,
  },
};

class Radiobtn extends React.Component {
  state = {
    selectedValue: 'none',
  };

  handleChange = event => {
    this.setState({ selectedValue: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Radio
          checked={this.state.selectedValue === 'none'}
          onChange={this.handleChange}
          value="none"
          name="radio-button-demo"
          aria-label="A"
        />none
        <Radio
          checked={this.state.selectedValue === 'dislike'}
          onChange={this.handleChange}
          value="dislike"
          name="radio-button-demo"
          aria-label="Dislike"
        />dislike
        <Radio
          checked={this.state.selectedValue === 'okay'}
          onChange={this.handleChange}
          value="okay"
          name="radio-button-demo"
          aria-label="Okay"
        />okay
        <Radio
          checked={this.state.selectedValue === 'like'}
          onChange={this.handleChange}
          value="like"
          name="radio-button-demo"
          aria-label="Like"
        />like
        <Radio
          checked={this.state.selectedValue === 'love'}
          onChange={this.handleChange}
          value="love"
          name="radio-button-demo"
          aria-label="Love"
        />love
      </div>
    );
  }
}

Radiobtn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Radiobtn);