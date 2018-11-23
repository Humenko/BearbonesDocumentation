import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import ScrollToTop from './components/Shared/ScrollToTop';
import registerServiceWorker from './registerServiceWorker';
import './styles/css/main.css';

ReactDOM.hydrate(
  <Router>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
