import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';
import persistState from 'redux-localstorage';

import rootReducer from './redux/rootReducer';

import App from './App';

const enhancer = compose(
  persistState(),
);

const store = createStore(rootReducer, enhancer);

ReactDOM.render(<Provider store={store}>
  <App/>
</Provider>, document.getElementById('root'));
