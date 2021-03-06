import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';
const styles = {
};


class Footer extends Component {
  render() {
      const footerStyle={
          padding: 5,
          textAlign: "center",
          fontSize:10
      }

    return (
        <Row >
          <Col xs={1} sm={1} md={2} lg={1}/>
          <Col xs={12} sm={10} md={8} lg={10}>
                <div style={footerStyle}>
                    Made with ♥ by Ian Bolton
                </div>
          </Col>
          <Col xs={1} sm={1} md={2} lg={1} />
        </Row>

    );
  }
}

export default Footer;

