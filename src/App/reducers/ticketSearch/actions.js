import * as constants from './constants';

export const setKeyForSearch = key => (
  dispatch => {
    dispatch({
      type: constants.SET_SEARCH_KEY,
      payload: key,
    });
  }
);
