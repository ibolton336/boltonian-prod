import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import TabComponent from '../nav/tab-component';
import HeaderLogo from '../misc/header-logo';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index'

const quotePath = "http://159.203.108.56:8079/wp-json/wp/v2/posts?slug=quotes";
const src = require('../../public/images/studio-header.jpg');

const styles = {
  appBar: {
    backgroundColor: 'rgba(252, 250, 249, .65)',
  },
};

class HeaderTemplate extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col sm={1} md={2} lg={1}/>
          <Col sm={6} md={8} lg={10}>
            <HeaderLogo />
            <TabComponent/>
          </Col>
          <Col sm={1} md={2} lg={1} />
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps)(HeaderTemplate);
