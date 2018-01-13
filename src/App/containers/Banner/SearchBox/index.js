import React from 'react';

import SearchInput from './SearchInput';
import SearchButton from './SearchButton';

const SearchBox = props => {
  const styles = {
    container: {
      display: 'inline-block',
      backgroundColor: '#fff',
      borderRadius: '2px',
    },
    searchInput: {
      display: 'inline-block',
    },
    searchButton: {
      display: 'inline-block',
    },
  };

  return (
    <div style={styles.container}>
      <SearchInput style={styles.searchInput} />
      <SearchButton style={styles.searchButton} />
    </div>
  );
};

export default SearchBox;

