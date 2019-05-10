import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, Button, ImageBackground} from 'react-native';
import {StoreGlobal } from '../../../App.js';
import {getUserInfo} from '../../services/HTTPService';




export default class RangListsScreen extends Component {
  static navigationOptions = {
    title: 'Ранглисти',
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
        <Text>Всички ранглисти</Text>
        <Button
          title="Ранглист върху биографии"
          onPress={() => this.props.navigation.push('BiographyRangList')}
        />
        <Button
          title="Ранглист върху творби"
          onPress={() => this.props.navigation.push('WorkRangList')}
        />
        <Button
          title="Ранглист върху автори"
          onPress={() => this.props.navigation.push('AuthorRangList')}
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