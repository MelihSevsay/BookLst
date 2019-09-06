import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {Card} from './common';

class CPN_BookList extends Component {
  renderItem({item}) {
    return (
      <Card>
        <Text>{item.title}</Text>
      </Card>
    );
  }

  render() {
    const {books} = this.props;
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
  };
};

export default connect(mapStateToProps)(CPN_BookList);
