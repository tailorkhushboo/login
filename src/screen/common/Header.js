import React from 'react';
import {StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
// import {AlbumList} from './AlbumList.js';

const Header = () => {
  return (
    <View>
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}> Registration </Text>
      </View>
      {/*<AlbumList />*/}
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    elevation: 10,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
  },
});

export {Header};
