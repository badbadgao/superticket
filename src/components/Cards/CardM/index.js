import React from 'react';
import PropTypes from 'prop-types';
import { CardMedia, CardTitle } from 'material-ui';

const style = {
  cardMedia: {
    width: '200px',
  },
  overlayContainerStyle: {
    width: '200px',
  },
  titleStyle: {
    fontSize: '16px',
  },
};
const CardM = props => (
  <div style={props.style}>
    <CardMedia
      mediaStyle={style.cardMedia}
      overlayContainerStyle={style.overlayContainerStyle}
      overlay={
        <CardTitle titleStyle={style.titleStyle} title={props.title} subtitle={props.subtitle} />
      }
    >
      <img style={style.cardMedia} src={props.img} alt={props.alt} />
    </CardMedia>
  </div>
);

CardM.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  style: PropTypes.object,
};

CardM.defaultProps = {
  alt: '',
  style: {},
};

export default CardM;
