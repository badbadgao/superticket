import React from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createStore } from 'redux';

import Search from './containers/Search';

import ticketSearch from './reducers/ticketSearch/reducer';

const generalStore = createStore(ticketSearch);
console.log(generalStore.getState());
const App = () => (
  <Provider store={generalStore}>
    {/* <MuiThemeProvider>
    </MuiThemeProvider> */}
    <Search />
  </Provider>
);

export default App;
