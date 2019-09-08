import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Card} from './common';
import {connect} from 'react-redux';
import * as actions from '../actions';

class CPN_bookItem extends Component {
  render() {
    const {book} = this.props;
    console.log(this.props);
    return (
      <TouchableOpacity onPress={() => {}}>
        <Card>
          <Text style={styles.tityeStyle}>{book.title}</Text>
          <Text style={styles.authourStyle}>{book.author}</Text>
        </Card>
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
});

export {CPN_bookItem};
// export default connect(
//   mapStateToProps,
//   actions,
// )(CPN_bookItem);
