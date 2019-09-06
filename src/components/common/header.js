import React, {Component} from 'react';

import {StyleSheet, Text, View} from 'react-native';

class Header extends Component {
  render() {
    const {header, headerText} = styles;

    return (
      <View style={header}>
        <Text style={headerText}>{this.props.headerText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bfbfbf',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    height: 80,
  },
  headerText: {
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export {Header};
