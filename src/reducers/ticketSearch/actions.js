import * as constants from './constants';

export const setKeyForSearch = searchKey => (
  dispatch => {
    dispatch({
      type: constants.SET_SEARCH_KEY,
      payload: searchKey,
    });
  }
);
