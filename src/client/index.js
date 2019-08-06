import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import routes from '../Routes';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';

import Hello from './components/Hello';
import Header from './components/Header';
import { getClientStore } from '../store';

const history = createMemoryHistory();


const App = () => {
  return (
    <Provider store={getClientStore()}>
      <Fragment>
        <BrowserRouter>
          <div>
            {renderRoutes(routes)}
          </div>
        </BrowserRouter>
      </Fragment>
    </Provider>
  )
}

if (typeof window !== 'undefined') {
  ReactDom.hydrate(<App />, document.getElementById('root'));
}

export default App;