import React from 'react';

import { Card, CardHeader } from 'material-ui';

import Tickets from './Tickets';

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
          <Tickets />
        </div>
      </Card>
    </div>
  );
};

export default BackGroudCard;

