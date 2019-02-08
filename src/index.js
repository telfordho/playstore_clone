import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import * as serviceWorker from './serviceWorker';

const typographyV1Theme = (theme) => {
  return createMuiTheme({
    ...theme,
    typography: {
      useNextVariants: false,
    },
  });
}

ReactDOM.render(
    <MuiThemeProvider theme={typographyV1Theme}>
      <Provider store={configureStore()}>
        <App />
      </Provider>
    </MuiThemeProvider>,
    document.getElementById('root'),
  );


serviceWorker.unregister();
