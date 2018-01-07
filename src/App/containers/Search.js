import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RaisedButton } from 'material-ui';
import PropTypes from 'prop-types';

import * as actions from '../reducers/ticketSearch/actions';


const Search = props => (
  <div>
    {props.searchKey}
    <RaisedButton label="tell me" />
  </div>
);

Search.propTypes = {
  searchKey: PropTypes.string,
};

Search.defaultProps = {
  searchKey: 'Huawei P10',
};

const mapStateToProps = state => ({
  searchKey: state.ticketSearch.searchKey,
});

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators(
    ...actions,
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
