import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {SoftPink, DkGray1, blueGrey500, lightWhite} from './assets/material-ui-styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MyApp from './components/myapp/MyApp';

const muiTheme = getMuiTheme({
  palette: {
  },
  appBar: {
    //height: '350px',
    backgroundColor: 'rgb(252, 250, 249)'
  },
  tabs: {
    backgroundColor: 'transparent'
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <MyApp classname="App">
        </MyApp>
      </MuiThemeProvider>
    );
  }
}

export default App;
