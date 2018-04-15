import React from 'react';
import PropTypes from 'prop-types';

import CardM from 'components/Cards/CardM';

const Ticket = props => (
  <div>
    <CardM
      img={props.img}
      title={props.title}
      subtitle={props.subtitle}
    />
  </div>
);

Ticket.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number.isRequired,
  img: PropTypes.object.isRequired,
};

export default Ticket;
