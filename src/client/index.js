import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Routes from './components/Routes';
import { renderRoutes } from 'react-router-config';
import Hello from './components/Hello';

const history = createMemoryHistory();

const App = () => (
  <Hello />
)

if (typeof window !== 'undefined') {
  ReactDom.hydrate(<App />, document.getElementById('root'));
}

export default App;