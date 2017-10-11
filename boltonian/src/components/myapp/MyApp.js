import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from '../../logo.svg';
import HeaderTemplate from '../template/header';


class MyApp extends Component {
  render() {
    return (
      <div>
        <HeaderTemplate/>
      </div>
    );
  }
}

export default MyApp;

