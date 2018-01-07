import initialState from './initialState';
import * as constants from './constants';

const ticketSearch = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_SEARCH_KEY:
      return ({
        ...state,
        searchKey: action.payload,
      });
    default:
      return state;
  }
};

export default ticketSearch;
