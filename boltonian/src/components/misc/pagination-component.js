import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index'
import ReactPaginate from 'react-paginate';
import BlogItem from '../wordpress/blog-item';
import axios from 'axios';
import $ from 'jquery';
const updatedPath = "http://159.203.108.56:8079/wp-json/wp/v2/posts?page=";



class PaginationComponent extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      myData: [],
      pageCount: 0,
      perPage: 1,
      currentPostIndex: 0 
    };
    this.handlePageClick = this.handlePageClick.bind(this);
    this.loadPosts = this.loadPosts.bind(this);
  };
	loadPosts() {
    console.log('load');
    axios.get(this.props.source)
      .then(res => {
        const posts = res.data;
        const count = res.data.length;
        console.log(count);
        this.setState({ myData: posts, pageCount: count});
      })
      


  }
  componentDidMount() {
    this.loadPosts();
  }

	handlePageClick(data){
    this.setState({ currentPostIndex:data.selected});

    // let selected = data.selected + 1;
    // const currentPath = updatedPath + selected
    // console.log('curr', currentPath);
	};

  render() {
        for(var i = 0; this.state.myData.length> i; i++){
          if(i === this.state.currentPostIndex){
            var currentPost = this.state.myData[i];
            console.log('currentPost', currentPost)
            var title = currentPost.title.rendered;
            var body = currentPost.content.rendered;
          }
        }
    return (
      <div>
        <Row start="xs">
          <Col xs={12}>
            <BlogItem title={title} body={body}/>
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={6} className="react-paginate">
              <ReactPaginate 
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={<a href="">...</a>}
                breakClassName={"break-me"}
                pageCount={this.state.pageCount}
                marginPagesDisplayed={10}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"} 
              />
          </Col>
        </Row>
        </div>
    );
  }
}


export default PaginationComponent;


