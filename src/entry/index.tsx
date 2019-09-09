import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import { configureStore } from '../store/store';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
    Wowzers dad, I ran!
  </Provider>,
  document.getElementById('root')
);