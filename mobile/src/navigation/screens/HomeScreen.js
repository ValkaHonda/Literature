import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, AppRegistry, TextInput } from 'react-native';
import LogIn from './../../components/loginComponent.js';


export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      alignSelf: 'center', 
      textAlign:"center",
      flex:1,
    },
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Typical Log-In Screen.</Text>
        <LogIn></LogIn>
        <Button
          title="Log In"
          onPress={() => this.props.navigation.push('Details')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff00',
  },
  login: {
    backgroundColor: '#ffffff',
  },
});
