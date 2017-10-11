import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index'
import PostInfo from '../wordpress/post-info';

const src = require('../../assets/images/studio-header.jpg');
//const src = require('../../public/images/breathe.png');
const serverHomePath ="http://159.203.108.56:8079/wp-json/wp/v2/pages?slug=home-page";

const styles = {
  divStyle: {
  },
  container:{
    minHeight:"500px"
  }
};

class HomeTemplate extends Component {
  render() {
    return (
      <Row>
        <div className="home-background">
          <div className="greeting-text" />
          <PostInfo source={serverHomePath} /> 
        </div>
      </Row>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

export default HomeTemplate;

