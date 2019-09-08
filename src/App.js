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
import CPN_bookList from './components/CPN_bookList';
import {
  setJSExceptionHandler,
  getJSExceptionHandler,
} from 'react-native-exception-handler';

const errorHandler = (error, isFatal) => {
  // This is your custom global error handler
  // You do stuff like show an error dialog
  // or hit google analytics to track crashes
  // or hit a custom api to inform the dev team.
};
//Second argument is a boolean with a default value of false if unspecified.
//If set to true the handler to be called in place of RED screen
//in development mode also.
setJSExceptionHandler(errorHandler, true);

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View>
        <Header headerText="Book List" />
        <CPN_bookList />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
