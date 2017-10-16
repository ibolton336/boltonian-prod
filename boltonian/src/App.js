import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
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
        <MyApp>
        </MyApp>
      </MuiThemeProvider>
    );
  }
}

export default App;
