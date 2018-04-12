import React from 'react';
import PropTypes from 'prop-types';

import SearchBox from './SearchBox';

const SearchBanner = props => {
  const style = {
    container: {
      height: '72px',
      width: '100%',
      backgroundColor: '#FF9800',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  return (
    <div style={style.container}>
      <SearchBox />
    </div>
  );
};

export default SearchBanner;
