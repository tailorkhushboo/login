import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {RegistrationFrom} from './screen/RegistrationFrom';
import {Header} from './screen/common';
import Router from './Router';
class App extends Component {
  render() {
    return (
      <View>
        {/*<Header />*/}
        {/*<RegistrationFrom />*/}
        <Router />
      </View>
    );
  }
}
export default App;
