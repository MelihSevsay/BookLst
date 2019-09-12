import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Card, myDebugger} from './common';
import {connect} from 'react-redux';
import * as actions from '../actions';

class CPN_bookItem extends Component {
  onPressed() {
    const {book, selected} = this.props;

    selected ? this.props.deselectBook() : this.props.selectBook(book);
  }

  render() {
    const {book, selected} = this.props;

    const description = selected ? (
      <Text style={styles.descriptionStyle}>{book.description}</Text>
    ) : null;

    myDebugger('Book =>', book);
    console.log(this.props);
    return (
      <TouchableOpacity onPress={() => this.onPressed()}>
        <Card>
          <Text style={styles.tityeStyle}>{book.title}</Text>
          <Text style={styles.authourStyle}>{book.author}</Text>
        </Card>
        {description}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  authourStyle: {
    fontSize: 14,
    color: '#bd0000',
  },
  descriptionStyle: {
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 13,
    color: 'gray',
  },
});

const mapStateToProps = (state, props) => {
  //console.log(state);
  //console.log(props);
  const selected =
    state.selectedBook && state.selectedBook.isbn === props.book.isbn;
  return {
    selected,
  };
};

export default connect(
  mapStateToProps,
  actions,
)(CPN_bookItem);
