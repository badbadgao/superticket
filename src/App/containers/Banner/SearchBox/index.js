import React from 'react';

import SearchInput from './SearchInput';
import SearchButton from './SearchButton';

const SearchBox = props => {
  const styles = {
    container: {
      display: 'flex',
      backgroundColor: '#fff',
      borderRadius: '2px',
      alignItems: 'center',
      width: '450px',
    },
    searchInput: {
      flex: 1,
    },
    searchButton: {
      textAlign: 'right',
    },
  };

  const onSearch = event => {
    console.log('Search');
  };

  return (
    <div style={styles.container}>
      <SearchInput style={styles.searchInput} />
      <SearchButton style={styles.searchButton} onSearch={onSearch} />
    </div>
  );
};

export default SearchBox;

