import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import liveui from '@eclipse-muto/liveui-core';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import store from './redux/store';
import * as serviceWorker from './serviceWorker';
import config from './liveui.config';

liveui.initializeApp(config);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
