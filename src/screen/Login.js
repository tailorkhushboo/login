import React, {Component} from 'react';
import {View, Alert, Text} from 'react-native';

class Login extends Component {
  render() {
    return (
      <View>
        <Text>Login</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Profile: ProfileScreen
    },
    {
        initialRouteName: "Home"
    }
);


export default Login;
