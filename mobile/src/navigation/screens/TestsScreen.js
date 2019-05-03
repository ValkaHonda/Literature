import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, Button} from 'react-native';
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
      <View style={styles.container}>
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