import React, {Component} from 'react';
import { 
  Alert, 
  StyleSheet, 
  Text, 
  View,
  Button, 
  TextInput,
  AsyncStorage
} from 'react-native';
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
      this.setState({
         pass: e.target.value,
      });
  };

  sendRequest = () => {
      fetch(`${this.url.base}/authenticate`,{
        method: 'POST', // or 'PUT'
        body: JSON.stringify(this.state), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      }).then((response) => response.json())
      .then((response) => {
        AsyncStorage.setItem('token',JSON.stringify(response.token)); // In the next version of React Native this will be depricated
      })
      .catch((error) => {
        Alert.alert('No such user');
      });
  };
  onLogInButtonPress = async () => {
    await this.sendRequest();
    const token = await AsyncStorage.getItem('token'); // In the next version of React Native this will be depricated
    this.setState({token: token});
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
            onChangeText={(emailInput) => this.setState({email:emailInput})}
        />
        <Text>Password:</Text>
        <TextInput
            style={styles.textBox}
            onChangeText={(passInput) => this.setState({pass:passInput})}
            secureTextEntry={true}
        />
        <Button
          title="Log In"
          onPress={this.onLogInButtonPress}
        />
        <Text>{this.state.token}</Text>
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
