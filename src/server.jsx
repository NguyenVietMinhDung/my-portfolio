/* eslint-disable no-console */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import express from 'express';
import path from 'path';
import store from './store';
import App from './containers/App';

const PORT = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'pug');

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/*', (req, res) => {
  const reactDom = renderToString(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  res.render(path.resolve(__dirname, 'template.pug'), {
    reactDom,
  });
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
