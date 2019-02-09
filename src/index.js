import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
      <Provider store={configureStore()}>
        <App />
      </Provider>,
    document.getElementById('root'),
  );

serviceWorker.unregister();
