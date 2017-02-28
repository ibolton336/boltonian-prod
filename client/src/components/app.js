import React, { Component } from 'react';
import HeaderTemplate from './template/header';
import FooterTemplate from './template/footer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {SoftPink, DkGray1, blueGrey500, lightWhite} from '../public/material-ui-styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

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
        {this.props.children}
      </MuiThemeProvider>	
    );
  }
}

export default App;
