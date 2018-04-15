import React from 'react';
import PropTypes from 'prop-types';

import CardM from 'components/Cards/CardM';

const Ticket = props => (
  <div style={props.style}>
    <CardM
      img={props.img}
      title={props.title}
      subtitle={props.subtitle}
    />
  </div>
);

Ticket.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  style: PropTypes.object,
};

Ticket.defaultProps = {
  style: {},
};

export default Ticket;
