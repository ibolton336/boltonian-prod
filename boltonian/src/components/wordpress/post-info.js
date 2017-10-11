import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

import PostItem from './post-item';

class PostInfo extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      posts: [],
    };
    this.loadPosts = this.loadPosts.bind(this);
  };

	loadPosts() {
    axios.get(this.props.source)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      })
  }
	
  componentDidMount() {
    this.loadPosts();
  }

  render() {
    const items = this.state.posts.map((item) => {
      return <li><PostItem item={item} /></li>;
    })
    return (
      <div className="home-page-wp">
        <ul className="info-items">
          {items}
        </ul>
      </div>
    );
  }
}

export default PostInfo;

