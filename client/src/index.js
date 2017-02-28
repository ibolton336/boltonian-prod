import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import ReactGA from 'react-ga';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import { createStore  } from 'redux'
import todoApp from './reducers'
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
let store = createStore(todoApp)

// Import stylesheets
import './public/stylesheets/base.scss';
import './public/stylesheets/fonts/isabel/isabel.scss';
// Initialize Google Analytics
ReactGA.initialize('UA-92678054-1');

function logPageView() {
  ReactGA.pageview(window.location.pathname);
}

ReactDOM.render(

    <Provider store={store}>
      <Router history={browserHistory} routes={routes} onUpdate={logPageView} />
    </Provider>,
  document.querySelector('.wrapper'));
