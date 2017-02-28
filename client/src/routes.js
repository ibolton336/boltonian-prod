import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Import miscellaneous routes and other requirements
import App from './components/app';

// Import static pages
import HomePage from './components/pages/home-page';

// Import billing pages
export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="home" component={HomePage} />
    <Route path="about" component={HomePage} />
    <Route path="services" component={HomePage} />
    <Route path="blog" component={HomePage} />
    <Route path="connect" component={HomePage} />
  </Route>
);
