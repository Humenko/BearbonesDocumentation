import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-snapshot';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './styles/sass/main.scss';

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

serviceWorker.register();
