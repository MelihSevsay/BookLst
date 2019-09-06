/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import {Header} from './components/common';
import CPN_BookList from './components/CPN_bookList';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View>
        <Header headerText="Book List" />
        <CPN_BookList />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
