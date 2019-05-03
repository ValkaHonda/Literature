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

  componentWillMount(){
    }

    
  render() {
    const { navigation } = this.props;
    const URL = navigation.getParam('URL', 'NO-ID');
    const firstName = navigation.getParam('firstName', 'some default value');
    const lastName = navigation.getParam('lastName', 'some default value');

    return (
      <View style={styles.container}>
      
        <Image
        style = {{width: 100, height: 100}}
        source={{uri: URL}} 
      />
        <Text>{firstName}</Text>
        <Text>{lastName}</Text>
        <Button
          title="Творби"
          onPress={() => this.props.navigation.push('Works')}
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