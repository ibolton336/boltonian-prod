import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index'
import ReactPaginate from 'react-paginate';
import BlogPostList from '../wordpress/blog-post-list';
import axios from 'axios';
import $ from 'jquery';
const updatedPath = "http://159.203.108.56:8079/wp-json/wp/v2/posts?page=";


const styles = {
  divStyle: {
  },
  container:{
    minHeight:"500px"
  }
};

class PaginationComponent extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      myData: [],
      pageCount: 0,
      perPage: 10,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
    this.loadPosts = this.loadPosts.bind(this);
  };
	loadPosts() {
    console.log('load');
    axios.get(this.props.source)
      .then(res => {
        const posts = res.data;
        const count = Number(res.headers["x-wp-totalpages"]);
        console.log(count);
        this.setState({ myData: posts, pageCount: count});
      })
  }
  componentDidMount() {
    this.loadPosts();
  }


	handlePageClick(data){
    let selected = data.selected + 1;
    const currentPath = updatedPath + selected
    console.log('curr', currentPath);

    axios.get(currentPath)
      .then(res => {
        const posts = res.data;
        const count = Number(res.headers["x-wp-totalpages"]);
        this.setState({ myData: posts, pageCount: count});
      })
    //
	};


  render() {
    return (
      <div className="home-background">
      <Grid style={styles.container}>
        <Row start="xs">
          <Col xs={12}>
            <BlogPostList data={this.state.myData}/>
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
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"} 
              />
          </Col>
        </Row>
      </Grid>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

export default PaginationComponent;


