import React, {Component} from 'react';
import {Alert, ImageBackground, StyleSheet, Text, View, Button} from 'react-native';
import {StoreGlobal } from '../../../App.js';
import {getUserInfo} from '../../services/HTTPService';




export default class TestsScreen extends Component {
  static navigationOptions = {
    title: 'Тестове',
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
        <Text>Всички тестове</Text>
        <Button
          title="Тестове върху биографии"
          onPress={() => this.props.navigation.push('BiographyTests')}
        />
        <Button
          title="Тестове върху творби"
          onPress={() => this.props.navigation.push('WorkTests')}
        />
        <Button
          title="Тестове върху автори"
          onPress={() => this.props.navigation.push('AuthorTests')}
        />
        
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