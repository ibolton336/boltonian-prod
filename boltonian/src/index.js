import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './assets/stylesheets/base.scss';
import './assets/stylesheets/fonts/isabel/isabel.scss';
import ReactGA from 'react-ga';

// Initialize Google Analytics
ReactGA.initialize('UA-92678054-1');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
