// server/utils.js
import Routes from '../client/Routes';
import { renderToString } from 'react-dom/server';

import { StaticRouter } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { getStore } from '../store';

export const render = (req) => {
  //构建服务端的路由
  const content = renderToString(
    <Provider store={getStore()}>
      <StaticRouter location={req.path} >
        {Routes}
      </StaticRouter>
    </Provider>
  );
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    <div id="root">${content}</div>
    <script src="/index.js"></script>
  </body>
  </html>`;
}