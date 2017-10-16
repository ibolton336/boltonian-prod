import React, { Component } from 'react';
import { Link } from 'react-router';



class BlogItem extends Component {
  render() {

    console.log('item name', this.props.title)
    const title = this.props.title;
    const body = this.props.body;
    const titleStyle ={
      textAlign: "center"
    }
    const contentStyle = {
      padding: 10
    }
    return  (
      <div className="info-item">
        <div style={titleStyle} dangerouslySetInnerHTML={{__html: title }} /> 
        <hr/>
        <div style={contentStyle} dangerouslySetInnerHTML={{__html: body }} /> 
      </div>
    );
  }
}

export default BlogItem;

