import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = props => {
  return <View style={styles.cardWrapper}>{props.children}</View>;
};

const styles = StyleSheet.create({
  cardWrapper: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#97bd00',
    borderWidth: 1,
    padding: 5,
    margin: 5,
  },
});

export {Card};
