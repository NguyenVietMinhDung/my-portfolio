import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './external-libs';
import './main.scss';
import store from './store';
import App from './containers/App';

// Using ReactDOM.render(...) when running on dev mode
// Otherwise using ReactDOM.hydrate(...) for SSR
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
