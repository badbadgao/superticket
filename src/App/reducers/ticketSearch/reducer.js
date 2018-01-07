import initialState from './initialState';
import * as constants from './constants';

const app = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_SEARCH_KEY:
      return ({
        ...state,
        key: action.payload,
      });
    default:
      return state;
  }
};

export default app;
