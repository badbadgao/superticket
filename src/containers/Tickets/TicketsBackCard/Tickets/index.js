import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { fetchMovies } from 'reducers/movies/actions';

import Ticket from './Ticket';

class Tickets extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    props.actions.fetchMovies();
    console.log('getmovies in constructor');
  }

  // componentDidMount() {
  //   console.log('getmovies in componentDidMount');
  //   this.props.actions.fetchMovies();
  // }

  render() {
    console.log(this.props.data);
    const TicketsComponents = this.props.data.data.map(movie => (
      <Ticket
        title={movie.name}
        subtitle={movie.star}
        img={movie.img}
      />
    ));
    return (
      <div>
        <TicketsComponents />
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
  data: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tickets);
