import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from '../../logo.svg';
import TabComponent from '../nav/tab-component';
import HeaderLogo from '../misc/header-logo';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';
import AboutMe from '../aboutme/AboutMe';

const quotePath = "http://159.203.108.56:8079/wp-json/wp/v2/posts?slug=quotes";

const styles = {
  appBar: {
    backgroundColor: 'rgba(252, 250, 249, .65)',
  },
};


class MyApp extends Component {
  render() {
    return (
      <Grid>
        <Row >
          <Col sm={1} md={2} lg={1}/>
          <Col sm={10} md={8} lg={10}>
            <HeaderLogo />
            <AboutMe/>
          </Col>
          <Col sm={1} md={2} lg={1} />
        </Row>
      </Grid>
    );
  }
}

export default MyApp;
