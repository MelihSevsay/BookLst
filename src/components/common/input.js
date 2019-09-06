import React from 'react';
import {Text, TextInput, StyleSheet, View} from 'react-native';

const Input = ({
  text,
  inputPlaceHolder,
  onChangeText,
  value,
  secureTextEntry,
}) => {
  const {inputStyle, inputWrapperStyle, textStyle} = styles;
  return (
    <View style={inputWrapperStyle}>
      <Text style={textStyle}> {text} </Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        style={inputStyle}
        placeholder={inputPlaceHolder}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapperStyle: {
    flexDirection: 'row',
    height: 50,
    width: 'auto',
    borderColor: '#E5E5E8',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  textStyle: {
    paddingLeft: 20,
    flexGrow: 1,
    fontSize: 17,
    width: 50,
  },
  inputStyle: {
    flexGrow: 3,
    fontSize: 17,
    width: 80,
  },
  inputPlaceHolderStyle: {},
});

export {Input};
