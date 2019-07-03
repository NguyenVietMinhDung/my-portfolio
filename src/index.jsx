/* eslint-disable react/no-render-return-value */
import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import store from './store';
import App from './components/Forms/App';

const render = () => (
  ReactDOM.render(
    <App />,
    document.getElementById('root'),
  )
);

render();
store.subscribe(render);
