import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Hello from './components/Hello';
import Title from './components/Title';
import Login from './components/Login';

export default (
  <div>
    <Route path='/' exact component={Hello}></Route>
    <Route path='/404' exact component={Title}></Route>
    <Route path='/login' exact component={Login}></Route>
  </div>
)