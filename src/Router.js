import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {RegistrationFrom} from './screen/RegistrationFrom';
import Login from './screen/Login';
const Route = createStackNavigator(
  {
    RegistrationFrom: {screen: RegistrationFrom},
    Login: {screen: Login},
  },
  {
    initialRouteName: 'RegistrationFrom',
  },
);
export default createAppContainer(Route);
