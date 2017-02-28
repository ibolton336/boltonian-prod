import React, { Component } from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import HeaderTemplate from '../template/header';
import FooterTemplate from '../template/footer';


class HomePage extends Component {
  render() {
    return (
      <div>
        <HeaderTemplate/>
        <FooterTemplate />
      </div>
    );
  }
}

export default HomePage;
