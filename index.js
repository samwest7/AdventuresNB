import React from 'react';
import ReactDOM from 'react-dom';
import { getMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import {
  darkBlack,
  white,
  grey300
} from 'material-ui/styles/colors';
import Router from './router/Router';
import registerServiceWorker from './util/registerServiceWorker';
import './index.css';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: 'rgb(23,147,207)',
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
  }
});

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router />
  </MuiThemeProvider>,
  document.getElementById('root')
);

registerServiceWorker();
