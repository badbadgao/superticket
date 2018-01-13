import React from 'react';
import PropTypes from 'prop-types';

const SearchButton = props => {
  const onSearchClick = event => {
    props.onSearch(event);
  };

  return (
    <div onClick={onSearchClick} className="PointerHover" style={props.style}>
      Search
    </div>
  );
};

SearchButton.propTypes = {
  onSearch: PropTypes.func.isRequired,
  style: PropTypes.object,
};

SearchButton.defaultProps = {
  style: {},
};

export default SearchButton;
