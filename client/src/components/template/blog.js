import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index'
import PostInfo from '../wordpress/post-info';
import PaginationComponent from '../misc/pagination-component';
const serverPath = "http://159.203.108.56:8079/wp-json/wp/v2/posts?per_page=10";

const styles = {
  divStyle: {
  },
  container:{
    minHeight:"500px"
  }
};

class BlogTemplate extends Component {
  render() {
    return (
      <div className="home-background">
        <div className="greeting-text" />
        <PaginationComponent source={serverPath}/>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps)(BlogTemplate);

