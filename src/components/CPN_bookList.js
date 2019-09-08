import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {CPN_bookItem} from './CPN_bookItem';
import * as actions from '../actions';

class CPN_bookList extends Component {
  renderItem({item}) {
    return <CPN_bookItem book={item} />;
  }

  render() {
    const {books} = this.props;
    console.log(this.props);
    return (
      <View>
        <FlatList
          data={books}
          renderItem={this.renderItem}
          keyExtractor={item => item.isbn}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books,
    selectedBook: state.selectedBook,
  };
};

export default connect(
  mapStateToProps,
  actions,
)(CPN_bookList);
