import express from 'express';
import React from 'react';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config';
import routes from '../Routes';
import { getStore } from '../store';
var app = express();

import App from '../client/index';
import { render } from './utils';

app.use(express.static('public'));

app.use('/api', proxy('http://localhost:3000', {
  proxyReqPathResolver: function (req) {
    return '/api' + req.url
  }
}));

app.get('/', function (req, res) {
  const store = getStore();
  const matchedRoutes = matchRoutes(routes, req.path);
  const promises = [];
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      const promise = new Promise((resolve, reject) => {
        item.route.loadData(store).then(resolve).catch(reject);
      });
      promises.push(promise);
    }
  });
  Promise.all(promises).then(() => {
    res.send(render(req, routes, store));
  });
});

app.listen(3000, function () {
  console.log('Server is listening on 3000...');
});
