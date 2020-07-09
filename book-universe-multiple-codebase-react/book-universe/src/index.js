import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import liveui from '@composiv/liveui-core';

import App from './App';
import store from './redux/store';
import config from './liveui.config';
import * as serviceWorker from './serviceWorker';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'office-ui-fabric-react/dist/css/fabric.css';

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
