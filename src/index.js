import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.sass';
import './responsive.sass';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from "redux";
import allReducers from './Components/reducers'

const store = createStore(allReducers)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
