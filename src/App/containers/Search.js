import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

const Search = props => {
  console.log(props);
  return (
    <div>
      {props.key}
    </div>
  );
};

Search.propTypes = {
  key: PropTypes.string,
};

Search.defaultProps = {
  key: 'Huawei P10',
};

const mapStateToProps = state => ({
  key: state,
});

export default connect(mapStateToProps, undefined)(Search);
