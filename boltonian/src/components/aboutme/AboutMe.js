import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import PaginationComponent from '../misc/pagination-component';
const serverPath = "http://159.203.108.56:8079/wp-json/wp/v2/posts?per_page=100";

const styles = {
};


class AboutMe extends Component {
  render() {
    return (
      <Card>
        <CardHeader
          title="Designer & Developer"
          subtitle="Raleigh, NC"
          avatar="https://i.imgur.com/UhFf5Vi.jpg"
        />
        <PaginationComponent source={serverPath}/>

      </Card>
    );
  }
}

export default AboutMe;

