import React from 'react';
import PropTypes from 'prop-types';
import AutoComplete from 'material-ui/AutoComplete';
import { cyan500 } from 'material-ui/styles/colors';

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      hintText: 'UGG iphone5s',
    };
  }

  handleUpdateInput = searchText => {
    console.log('handler update');
    this.setState({
      searchText,
    });
  };

  handleNewRequest = () => {
    console.log('handler handleNewRequest');
  };

  render() {
    const styles = {
      searchInput: {
        outline: 'none',
        height: '42px',
        paddingLeft: '14px',
        backgroundColor: 'transparent',
        display: 'inline-block',
      },
      textFieldStyle: {
        fontSize: '15px',
        height: '42px',
        width: '100%',
      },
      listStyle: {
        fontSize: '15px',
      },
      hintStyle: {
        lineHeight: '42px',
        bottom: '0px',
      },
      menuStyle: {
        backgroundColor: '#e08a1e',
        fontSize: '30px',
      },
      underlineStyle: {
        display: 'none',
      },
    };
    const dataSource = ['iphone5s', 'iphone6s', '5s'];
    return (
      <AutoComplete
        style={{ ...styles.searchInput, ...this.props.style }}
        textareaStyle={styles.textareaStyle}
        underlineStyle={styles.underlineStyle}
        searchText={this.state.searchText}
        onUpdateInput={this.handleUpdateInput}
        onNewRequest={this.handleNewRequest}
        filter={(searchText, key) => key.indexOf(searchText) !== -1}
        dataSource={dataSource}
        hintStyle={styles.hintStyle}
        hintText={this.state.hintText}
        textFieldStyle={styles.textFieldStyle}
        listStyle={styles.listStyle}
      />
    );
  }
}

SearchInput.propTypes = {
  style: PropTypes.object.isRequired,
};

export default SearchInput;
