import React from 'react';
import PropTypes from 'prop-types';

import SearchIcon from '../../../../resource/ic_search_black_24.png';

const SearchButton = props => {
  const style = {
    width: '32px',
    margin: '0 8px',
    height: '24px',
  };

  const onSearchClick = event => {
    props.onSearch(event);
  };

  return (
    <div onClick={onSearchClick} style={{ ...style, ...props.style }}>
      <img
        className="PointerHover"
        alt="searchicon"
        src={SearchIcon}
      />
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
