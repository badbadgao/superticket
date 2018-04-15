import * as Service from 'service';

import * as constants from './constants';

export const fetchMovies = () => (dispatch, getState) => {
  Service.getMovieList().then(response => {
    dispatch({
      type: constants.SET_DATA,
      payload: response,
    });
  });
};
