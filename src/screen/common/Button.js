 import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
const Button = ({onPress, children}) => {
  const {buttonStyle, textStyle} = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderColor: '#007aff',
    borderWidth: 1,
    marginBottom: 5,
    borderRadius: 10,
    marginRight: 5,
  },
});

export {Button};
