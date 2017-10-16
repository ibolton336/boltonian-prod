import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';

const styles = {
};


class AboutMe extends Component {
  render() {
    return (
        <Row >
          <Col sm={1} md={2} lg={1}/>
          <Col sm={10} md={8} lg={10}>
          </Col>
          <Col sm={1} md={2} lg={1} />
        </Row>
    );
  }
}

export default AboutMe;

