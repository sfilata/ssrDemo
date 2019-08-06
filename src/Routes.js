import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Hello from './client/components/Hello';
import Title from './client/components/Title';
import Login from './client/components/Login';
import App from  './App';

export default [{
  component: App,
  routes: [
    {
      path: '/',
      component: Hello,
      exact: true,
      key: 'Hello',
      loadData: Hello.loadData
    },
    {
      key: '404',
      path: '/404',
      component: Title,
    },
    {
      key: 'login',
      path: '/login',
      component: Login,
      exact: true
    }
  ]
}];