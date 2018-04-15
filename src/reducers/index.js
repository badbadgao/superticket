import { combineReducers } from 'redux';

import ticketSearch from './ticketSearch/reducer';
import movies from './movies/reducer';

const appReducers = combineReducers({
  ticketSearch,
  movies,
});

export default appReducers;
