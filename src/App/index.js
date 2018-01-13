import React from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import Banner from './containers/Banner';
import appReducers from './reducers/';

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  appReducers,
  applyMiddleware(...middleware),
);

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <Banner />
    </MuiThemeProvider>
  </Provider>
);

export default App;
