import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, Button, Image} from 'react-native';
import {StoreGlobal } from '../../../App.js';


export default class AuthorScreen extends Component {
  static navigationOptions = {
    title: 'Информация за автор',
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
    const key = navigation.getParam('key', 'NO-ID'); 
    const URL = navigation.getParam('URL', 'NO-URL');
    console.log("URL:------------ "+URL);
    
    const firstName = navigation.getParam('firstName', 'some default value');
    const lastName = navigation.getParam('lastName', 'some default value');
    this.state = {
      key: key,
      URL: URL,
      firstName: firstName,
      lastName: lastName
    }; 
  }


  componentWillMount(){
    }

    
  render() {
    
    return (
      <View style={styles.container}>
      
        <Image
        style = {{width: 100, height: 100}}
        source={{uri: this.state.URL}} 
      />
        <Text>{this.state.firstName}</Text>
        <Text>{this.state.lastName}</Text>
        <Button
          title="Биография"
          onPress={() => this.props.navigation.push('Biography')}
        />
        <Button
          title="Творби"
          onPress={() => this.props.navigation.push('Works', 
          {
            key: this.state.key
          })}
        />
        <Button
          title="Мотиви"
          onPress={() => this.props.navigation.push('Motifs')}
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