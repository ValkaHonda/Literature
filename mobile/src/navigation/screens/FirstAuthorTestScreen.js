import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, Button, ImageBackground} from 'react-native';
import {StoreGlobal } from '../../../App.js';
import {getUserInfo} from '../../services/HTTPService';




export default class FirstAuthorTestScreen extends Component {
  static navigationOptions = {
    title: 'Тест #1 - автори',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };





  render() {
    return (
      <ImageBackground 
        source={require('../../images/Moleskin.png')}
        style={[{width: '100%', height: '100%'}]}>
        <Text>Първи тест върху автори</Text>
        
        
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffff00',
    justifyContent: 'space-between',
  },
});