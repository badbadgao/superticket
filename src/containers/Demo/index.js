import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import HomePage from 'resource/demo/home.PNG';
import Gallery from 'resource/demo/gallery.PNG';
import FilmDetail from 'resource/demo/film_details.png';
import Contact from 'resource/demo/contact_us.PNG';
import About from 'resource/demo/about_us.PNG';
import NewsDetails from 'resource/demo/news_page_details.PNG';
import NewsPage from 'resource/demo/news_page.png';

const style = {
  imgContainer: {
    width: 'auto',
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
  },
  img: {
    width: '1344px',
    height: 'auto',
  },
  carouse1: {
    display: 'flex',
    justifyContent: 'center',
  },
};

const webApp = () =>
  (
    <div style={style.parent}>
      <Carousel
        autoPlay
        showArrows
        style={style.carouse1}
        showThumbs={false}
      >
        <div style={style.imgContainer}>
          <img style={style.img} src={HomePage} alt="homepage" />
        </div>
        <div style={style.imgContainer}>
          <img style={style.img} src={FilmDetail} alt="filmdetail" />
        </div>
        <div style={style.imgContainer}>
          <img style={style.img} src={Gallery} alt="gallerypage" />
        </div>
        <div style={style.imgContainer}>
          <img style={style.img} src={NewsPage} alt="news" />
        </div>
        <div style={style.imgContainer}>
          <img style={style.img} src={NewsDetails} alt="newsdetails" />
        </div>
        <div style={style.imgContainer}>
          <img style={style.img} src={About} alt="about" />
        </div>
        <div style={style.imgContainer}>
          <img style={style.img} src={Contact} alt="contact" />
        </div>
      </Carousel>
    </div>
  );

export default webApp;
