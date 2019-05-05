import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, Button, ScrollView} from 'react-native';
import {StoreGlobal } from '../../../App.js';
import {getUserInfo} from '../../services/HTTPService';




export default class BiographyScreen extends Component {
  static navigationOptions = {
    title: 'Биография',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  constructor(props){
    super(props);
    const { navigation } = this.props;
    const firstName = navigation.getParam('firstName', 'NO-FIRST-NAME');
    const lastName = navigation.getParam('lastName', 'NO-LAST-NAME');
    const biography = navigation.getParam('biography', 'NO-BIOGRAPHY');
    this.state = {
      firstName: firstName,
      lastName: lastName,
      biography: biography
    }; 
  }




  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.firstName.toString()+" "+this.state.lastName.toString()}</Text>
        <ScrollView>
        <Text>{this.state.biography.toString()}</Text>
        </ScrollView>
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