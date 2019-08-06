// server/utils.js
import { renderToString } from 'react-dom/server';
import { Route } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

export const render = (req, routes, store) => {
  //构建服务端的路由
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} >
        {renderRoutes(routes)}
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
    <script>
      window.context = {
        state: ${JSON.stringify(store.getState())}
      }
    </script>
    <script src="/index.js"></script>
  </body>
  </html>`;
}