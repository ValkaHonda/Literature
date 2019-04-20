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
import { StoreGlobal } from '../../../App.js';


export default class HomeScreen extends Component {
  url = {
    base: 'https://thawing-eyrie-26509.herokuapp.com' // For production.
    // base: 'localhost:8080' //-> For debuging.
  };
  state = {
    email: '',
    pass: '',
    token: '',
    id: ''
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
        AsyncStorage.setItem('token',JSON.stringify(response.token)); // In the next version of React Native this will be deprecated
        this.setState({ token: response.token });
      })
      .catch((error) => {
        Alert.alert("error");
      });
  };
  getUserID = async () => {
    await Alert.alert(JSON.stringify(AsyncStorage.getItem("token")));
      fetch(`${this.url.base}/users/id`,{
        method: 'POST', // or 'PUT'
        body: JSON.stringify({username: 'themadhatter6@gmail.com'}), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0aGVtYWRoYXR0ZXI2QGdtYWlsLmNvbSIsImF1dGgiOiJST0xFX05PUk1BTCIsImV4cCI6MTU1NTg0NjMyMX0.3CjTgZVkp9rWu1NsCxNue9GaVih-YXYXNRfh6ORvkc3ABI3v0EOlSQOSoBAnDINFZSaTeQl8Ch2-lBx4ym0Bpw`
        }
      }).then((response) => response.json())
      .then((response) => {
        AsyncStorage.setItem('id',JSON.stringify(response)); // In the next version of React Native this will be deprecated
        this.setState({ id: JSON.stringify(response)});
        Alert.alert(JSON.stringify(response));
        //Alert.alert(this.state.id);
      })
      .catch((error) => {
        Alert.alert("ID error");
      });
  };
  onLogInButtonPress = async () => {
    //await this.sendRequest();
    await this.getUserID();
    const token = await AsyncStorage.getItem('token'); // In the next version of React Native this will be deprecated
    this.setState({token: token});
/* 
      StoreGlobal({
      type:'set', 
      key:'ok', 
      value:'cool'})
      Alert.alert(StoreGlobal({type:'get', key:'ok'}));
*/
    this.props.navigation.push('Details');
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
