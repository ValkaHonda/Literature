import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, Button} from 'react-native';
import {StoreGlobal } from '../../../App.js';


export default class AnalysisScreen extends Component {
  static navigationOptions = {
    title: 'Анализ',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  componentWillMount(){
    }



  render() {
    return (
      <View style={styles.container}>
        <Text>Анализ на творбата</Text>
        
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