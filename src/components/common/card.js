import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = props => {
  return <View style={styles.cardWrapper}>{props.children}</View>;
};

const styles = StyleSheet.create({
  cardWrapper: {
    height: 100,
  },
});

export {Card};
