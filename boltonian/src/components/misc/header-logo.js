import React, { Component } from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';
import Boltlogo from '../../../src/boltlogo.svg';

class HeaderLogo extends Component {
  render() {
    const sx = {
      textAlign: "center"
    }
    const h1 = {
      display: "inline-block",
      fontFamily: "gillsanslight",
      letterSpacing: 3,
      fontSize: 60

    }
    const logoStyle = {
      width: 50,
      display: "inline-block",
      paddingRight: 10 
    }
    return (
      <Row style={sx}>
        <Col xs ={1} sm={1} md={2} lg={1}/>
        <Col xs={10} sm={10} md={8} lg={10} >
          <img src={Boltlogo} style={logoStyle}/>
          <h1 style={h1}>BOLTONIAN</h1>
        </Col>
        <Col xs = {1} sm={1} md={2} lg={1}/>
      </Row>
    );
  }
}

export default HeaderLogo;

