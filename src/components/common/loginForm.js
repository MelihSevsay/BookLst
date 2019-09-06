import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Input} from './input'; //find index.js in common file and execute command over there, which our input.js called.
import firebase from 'firebase';

import AwesomeButtonAuth from './style/button/authButtonStyle';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    errorMsg: '',
    loggedIn: null,
  };

  onButtonClicked() {
    const {email, password, errorMsg} = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess())
      .catch(err => {
        if (err) {
        }
        this.setState({errorMsg: 'email olmadı'});
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess())
          .catch(err => {
            if (err) {
              this.onLoginFailed();
            }
          });
      });
  }

  onLoginSuccess() {
    debugger;
    this.setState({
      errorMsg: 'Başarılı',
      loggedIn: true,
    });
  }

  onLoginFailed() {
    debugger;
    this.setState({
      errorMsg: 'Authenticaiton Failed',
    });
  }

  render() {
    const {errorMsg} = this.state;
    const errorLbl = errorMsg ? (
      <Text style={styles.errorStyle}>{errorMsg}</Text>
    ) : null;

    return (
      <View style={{padding: 30}}>
        <View>
          <Input
            text="Email"
            inputPlaceHolder="Enter Email"
            onChangeText={text => {
              this.setState({email: text});
            }}
            value={this.state.email}
          />
        </View>
        <View>
          <Input
            text="Password"
            inputPlaceHolder="Enter Password"
            onChangeText={text => {
              this.setState({password: text});
            }}
            secureTextEntry
            value={this.state.password}
          />
        </View>
        {errorLbl}
        <View style={styles.buttonWrapper}>
          <AwesomeButtonAuth
            stretch={true}
            progress
            onPress={next => {
              /** Do Something **/
              this.onButtonClicked();
              next();
            }}>
            Login
          </AwesomeButtonAuth>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  errorStyle: {
    fontSize: 20,
    paddingTop: 5,
    color: 'red',
    alignSelf: 'center',
  },
});

export default LoginForm;
