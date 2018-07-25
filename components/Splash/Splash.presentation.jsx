import React, { Component } from 'react';
import './Splash.css';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

class Splash extends Component {

  render() {
    return (
      <div className="PageWrapper">
        <h1 className="title">Queue</h1>
        <TextField
          hintText="Phone Number"
          className="numberField"
          onKeyPress={ (e) => {
            (e.key === 'Enter') && this.props.history.push(process.env.PUBLIC_URL + '/dashboard');
          }}
        />
        <RaisedButton
          label="Continue"
          className="button"
          onClick={() => (this.props.history.push(process.env.PUBLIC_URL + '/dashboard'))}
        />
      </div>
    );
  }
}

Splash.propTypes = {
  history: PropTypes.object.isRequired
};

export default Splash;
