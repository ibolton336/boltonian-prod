import React, { Component } from 'react';
import { Link } from 'react-router';



class BlogItem extends Component {
  render() {
    const title = this.props.item.title.rendered;
    const body = this.props.item.content.rendered;
    console.log('item name', this.props.item)
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

