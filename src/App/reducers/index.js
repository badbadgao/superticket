import { combineReducers } from 'redux';

import ticketSearch from './ticketSearch/reducer';

const appReducers = combineReducers({
  ticketSearch,
});

export default appReducers;
