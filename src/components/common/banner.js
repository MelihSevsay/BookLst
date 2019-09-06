import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import { Image } from 'react-native-elements';

class Banner extends Component {
  render() {
    return (
      <View style={styles.bannerContainer}>
        {/* <Image source={require('../wwwroot/img/Lion.ico')} style={{ width: 200, height: 200 }} /> */}
        <Text style={styles.bannerText}> {this.props.text} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bannerContainer: {
    width: 'auto',
    height: 370,
    backgroundColor: '#E87879',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerText: {
    fontSize: 24,
    color: '#FFF',
  },
});

export default Banner;
