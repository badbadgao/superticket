import React from 'react';

import { Card, CardHeader } from 'material-ui';

import CardM from '../../../components/Products/CardM';
import Movie1 from 'resource/movie_1.jpg';
import Movie2 from '../../../../resource/movie_2.jpg';
import Movie3 from '../../../../resource/movie_3.jpg';
import Movie4 from '../../../../resource/movie_4.png';
import Movie5 from '../../../../resource/movie_5.jpg';

const BackGroudCard = () => {
  const style = {
    container: {
      margin: '32px 8px',
    },
    rootStyle: {
      borderRadius: '18px',
    },
    cardHeader: {
      color: '#ffffff',
      fontSize: '14px',
      borderTopRightRadius: '4px',
      borderTopLeftRadius: '4px',
    },
    productsContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: '16px 8px',
    },
  };

  return (
    <div>
      <Card style={style.container} containerStyle={style.rootStyle}>
        <CardHeader
          className="BannerBackGroudRed"
          style={style.cardHeader}
          title="Movie"
        />
        <div style={style.productsContainer}>
          <CardM
            img={Movie1}
            title="观众评9.1"
            subtitle="头号玩家"
          />
          <CardM
            img={Movie2}
            title="观众评9.1"
            subtitle="头号玩家"
          />
          <CardM
            img={Movie3}
            title="观众评9.1"
            subtitle="头号玩家"
          />
          <CardM
            img={Movie4}
            title="观众评9.1"
            subtitle="头号玩家"
          />
          <CardM
            img={Movie5}
            title="观众评9.1"
            subtitle="头号玩家"
          />
        </div>
      </Card>
    </div>
  );
};

export default BackGroudCard;

