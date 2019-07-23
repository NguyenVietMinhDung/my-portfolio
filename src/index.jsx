import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './containers/App';
import './main.scss';

// Using ReactDOM.render(...) when running on dev mode
// Otherwise using ReactDOM.hydrate(...) for SSR
ReactDOM.hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
