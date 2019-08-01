import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Hello from './Hello';
import Title from './Title';
import App from '../index';

export default [{
  component: App,
  routes: [
    {
      path: '/',
      component: Hello,
      exact: true,
    },
    {
      path: '/title',
      component: Title,
      exact: true,
    }
  ]
}]