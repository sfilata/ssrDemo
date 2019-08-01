import express from 'express';
import React from 'react';
var app = express();

import App from '../client/index';
import { render } from './utils';

app.use(express.static('public'));

app.get('*', function (req, res) {
  res.send(render(req));
});

app.listen(3000, function () {
  console.log('Server is listening on 3000...');
});
