import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from './components/Buttons/RaisedButton';

const App = () => (
  <MuiThemeProvider>
    <RaisedButton />
  </MuiThemeProvider>
);

export default App;
