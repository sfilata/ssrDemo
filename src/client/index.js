import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Routes from './Routes';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';

import Hello from './components/Hello';
import Header from './components/Header';
import store from '../store';

const history = createMemoryHistory();

const App = () => (
  <Provider store={store}>
    <Fragment>
      <BrowserRouter>
        <Header />
        {Routes}
      </BrowserRouter>
    </Fragment>
  </Provider>
)

if (typeof window !== 'undefined') {
  ReactDom.hydrate(<App />, document.getElementById('root'));
}

export default App;