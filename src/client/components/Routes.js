import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Hello from './Hello';
import Title from './Title';
import App from '../index';

export default (
  <div>
    <Route path='/' exact component={Hello}></Route>
    <Route path='/404' exact component={Title}></Route>
  </div>
)