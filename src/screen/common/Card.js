import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = (props) => {
  return <View style={styles.containerStyle}>{props.children}</View>;
};

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    flex: 1,
  },
});

export {Card};
