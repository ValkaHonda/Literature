import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, AppRegistry, TextInput } from 'react-native';
import LogIn from './../../components/loginComponent.js';

export default class HomeScreen extends Component {
  url = {
    base: 'https://thawing-eyrie-26509.herokuapp.com'
  };
  state = {
    email: '',
    pass: ''
  };

  onEmailChange = e => {
      this.setState({ email: e.target.value });
  };

  onPassChange = e => {
      this.setState({ pass: e.target.value });
  };

  sendRequest = () => {
      fetch(`${this.url.base}`)
      .then((response) => {
          console.log(response);
          this.props.navigation.push('Details');
      })
      .catch((error) => {
          console.log(error);
          this.props.navigation.push('Tests');
      });
  };
  onLogInButtonPress = () => {
    this.sendRequest();
  };
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
        <Text>Typical Log-In Screen</Text>
        <Text>Email:</Text>
        <TextInput
            style={styles.textBox}
            onChange={this.onEmailChange}
        />
        <Text>Password:</Text>
        <TextInput
            style={styles.textBox}
            onChange={this.onPassChange}
        />
        <Button
          title="Log In"
          onPress={this.onLogInButtonPress}
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
  textBox: {
    height: 40, 
    width: 200,
    borderColor: 'gray', 
    borderWidth: 1, 
    backgroundColor: "#ffffff",
},
});
