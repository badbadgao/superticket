import Movie1 from 'resource/movie_1.jpg';
import Movie2 from 'resource/movie_2.jpg';
import Movie3 from 'resource/movie_3.jpg';
import Movie4 from 'resource/movie_4.png';
import Movie5 from 'resource/movie_5.jpg';

export const Movies = {
  data: [
    {
      id: 1,
      name: 'No1 Play',
      star: 8.2,
      img: { Movie1 },
    },
    {
      id: 2,
      name: '起跑线',
      star: 8.1,
      img: { Movie2 },
    },
    {
      id: 3,
      name: '冰雪女王',
      star: 9.1,
      img: { Movie3 },
    },
    {
      id: 4,
      name: '暴裂无声',
      star: 9.5,
      img: { Movie4 },
    },
    {
      id: 5,
      name: '狂暴巨兽',
      star: 7.2,
      img: { Movie5 },
    },
  ],
};
