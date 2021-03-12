import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import persistState from 'redux-localstorage';

import rootReducer from './redux/rootReducer';

import App from './App';

const store = createStore(rootReducer, persistState());

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
