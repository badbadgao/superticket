import * as Service from 'service';

import * as constants from './constants';

export const fetchMovies = () => (state, dispatch) => {
  console.log(Service);
  Service.getMovieList().then(response => {
    console.log(response);
    dispatch({
      type: constants.SET_DATA,
      payload: response,
    });
  });
};
