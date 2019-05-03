import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, Button} from 'react-native';
import {StoreGlobal } from '../../../App.js';
import {getUserInfo} from '../../services/HTTPService';




export default class AuthorTestsScreen extends Component {
  static navigationOptions = {
    title: 'Тестове върху автори',
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
      <View style={styles.container}>
        <Text>Тестове върху автори</Text>
        
        
      </View>
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