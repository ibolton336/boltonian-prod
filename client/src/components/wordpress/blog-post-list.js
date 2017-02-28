import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';
import axios from 'axios';


import BlogItem from './blog-item'

class BlogPostList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      posts: [],
    };
  };


  render() {
    const items = this.props.data.map((item) => {
      return <li><BlogItem item={item} /></li>;
    })
    return (
      <div className="home-page-wp">
        <ul className="blog-info-items">
          {items}
        </ul>
      </div>
    );
  }
}

export default BlogPostList;


