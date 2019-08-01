// server/utils.js
import Routes from '../client/components/Routes';
import { renderToString } from 'react-dom/server';
import { renderRoutes } from 'react-router-config';

import { ServerRouter } from 'react-router-dom';
import React from 'react'
import Hello from '../client/components/Hello';

export const render = (req) => {
  //构建服务端的路由
  const content = renderToString(<Hello />);
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