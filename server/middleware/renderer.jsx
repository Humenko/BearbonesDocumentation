import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import App from '../../src/App';

const path = require('path');
const fs = require('fs');

export default (req, res, next) => {
  const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('err', err);
      return res.status(404).end();
    }
    const context = {};

    const html = ReactDOMServer.renderToString(
      <Router location={req.baseUrl} context={context}>
        <App />
      </Router>
    );

    return res.send(
      htmlData.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    );
  });
};
