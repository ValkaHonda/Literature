import React, {Component} from 'react';
import {Alert,ImageBackground, StyleSheet, Text, View, Button, ScrollView} from 'react-native';
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
      <ImageBackground 
        source={require('../../images/Moleskin.png')}
        style={[{width: '100%', height: '100%'}, styles.container]}>
        <Text style={{fontWeight: 'bold', fontSize: 40}}>
          {this.state.firstName.toString()+" "+this.state.lastName.toString()}
        </Text>
        <ScrollView>
        <Text style={{fontSize: 20}}
        
        >{this.state.biography.toString()}</Text>
        </ScrollView>
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