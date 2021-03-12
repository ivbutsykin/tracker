import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import persistState from 'redux-localstorage';

import reducer from './store/reducer';

import App from './App';

const store = createStore(reducer, persistState());

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
