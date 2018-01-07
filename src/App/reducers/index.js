import { createStore } from 'redux';

import ticketSearch from './ticketSearch/reducer';

const store = createStore(ticketSearch);

export default store;
