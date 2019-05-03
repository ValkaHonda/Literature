import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, Button} from 'react-native';
import {StoreGlobal } from '../../../App.js';
import {getUserInfo} from '../../services/HTTPService';




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
    getUserInfo("blah")
    .then((res)=> this.setState(res))
    .catch((err)=>console.log('error'));
    }




  render() {
    return (
      <View style={styles.container}>
        <Text>Анализ на творбата</Text>
        <Text>{JSON.stringify(this.state)}</Text>
        
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