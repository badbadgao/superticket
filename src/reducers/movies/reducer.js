import * as constants from './constants';
import initialState from './initialState';

const app = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default app;
