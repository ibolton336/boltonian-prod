import React, { Component } from 'react';
import { Link } from 'react-router';



class BlogItem extends Component {
  render() {

    console.log('item name', this.props.title)
    const title = this.props.title;
    const body = this.props.body;
    return  (
      <div className="info-item">
        <div className="post-title subhead-b" dangerouslySetInnerHTML={{__html: title }} /> 
        <hr/>
        <div className="post-content cisco-body-copy" dangerouslySetInnerHTML={{__html: body }} /> 
      </div>
    );
  }
}

export default BlogItem;

