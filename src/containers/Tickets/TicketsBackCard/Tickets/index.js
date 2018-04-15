import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { map } from 'lodash';

import { fetchMovies } from 'reducers/movies/actions';

import Ticket from './Ticket';

class Tickets extends React.Component {
  constructor(props) {
    super(props);
    props.actions.fetchMovies();
  }

  render() {
    const style = {
      container: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '16px 8px',
      },
      ticket: {
        marginLeft: '8px',
      },
    };

    const TicketsComponents = map(this.props.data.data, movie => (
      <Ticket
        key={movie.id}
        title={movie.name}
        subtitle={`评分 ${movie.star}`}
        img={movie.img}
        style={style.ticket}
      />
    ));
    return (
      <div style={style.container}>
        {TicketsComponents}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.movies.data,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    fetchMovies,
  }, dispatch),
});

Tickets.propTypes = {
  actions: PropTypes.object.isRequired,
  data: PropTypes.object,
};

Tickets.defaultProps = {
  data: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(Tickets);
