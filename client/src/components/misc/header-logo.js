import React, { Component } from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index'

class HeaderLogo extends Component {
  render() {
    return (
      <div className="logo-container">
        <h1>Debra Benfield</h1>
        <ul>
          <li className="site-tagline">Yoga</li>
          <li className="doodle">b</li>
          <li className="site-tagline">Nutrition</li>
        </ul>
      </div>
    );
  }
}

export default HeaderLogo;

