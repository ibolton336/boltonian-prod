import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index'
import PostInfo from '../wordpress/post-info';

const serverConnectPath ="http://159.203.108.56:8079/wp-json/wp/v2/pages?slug=connect-page";

const styles = {
  divStyle: {
  },
  container:{
    minHeight:"500px"
  }
};

class ConnectTemplate extends Component {
  render() {
    return (
      <div className="home-background">
        <div className="greeting-text" />
        <PostInfo source={serverConnectPath} /> 
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps)(ConnectTemplate);

