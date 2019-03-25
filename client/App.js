import React, {Component} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import  Routes  from './src/navigation/routes';

export default class App extends Component {
  render() {
    return (
      <Routes/>
    );
  }
}
