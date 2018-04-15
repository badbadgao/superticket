import { Movies } from './DataSource';

export const getMovieList = () => new Promise(resolve => {
  setTimeout(() => {
    console.log('tesdfdsts');
    resolve(Movies);
  }, 100);
});
