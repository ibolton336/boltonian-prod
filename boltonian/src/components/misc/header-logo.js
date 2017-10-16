import React, { Component } from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';
import Boltlogo from '../../../src/boltlogo.svg';
import SocialIcons from '../socialicons/SocialIcons';

class HeaderLogo extends Component {
  render() {
    const sx = {
      textAlign: "center"
    }
    const h1 = {
      display: "inline-block",
      fontFamily: "ralewaythin",
      letterSpacing: 3,
      fontSize: 60,
      color: "#616161"
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
            <div>
              <img src={Boltlogo} style={logoStyle}/>
              <span style={h1}>IAN BOLTON</span>
            </div>
            <SocialIcons/>
          </Col>
          <Col xs = {1} sm={1} md={2} lg={1}/>
        </Row>
    );
  }
}

export default HeaderLogo;

