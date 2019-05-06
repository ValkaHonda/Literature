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
    // base: 'localhost:8080' //-> For debugging.
  };
  state = {
    email: '',
    pass: '',
    token: '',
    id: '',
    login: false
  };
/*
  async componentWillMount(){
    const loginString = await AsyncStorage.getItem("login");
    const token = await AsyncStorage.getItem("token");
    const id = await AsyncStorage.getItem("id");
    const loginBoolean = !!loginString;
    if(loginBoolean === true) 
    {
      
      StoreGlobal({
        type:'set', 
        key:'login', 
        value: `${loginBoolean}`
      });
      StoreGlobal({
        type:'set', 
        key:'token', 
        value: `${token}`
      });
      StoreGlobal({
        type:'set', 
        key:'id', 
        value: `${id}`
      });
    //  Alert.alert(StoreGlobal({type: 'get', key: 'token'}));
    }
    
}
*/


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
        this.setState({ token: response.token });
        StoreGlobal({
          type:'set', 
          key:'token', 
          value: `${response.token}`});
        this.props.navigation.push('Details');
      }).catch(
        (error) => {
          console.log("User log-in error!")
          console.log(error);
        }
      );
  };
  onLogInButtonPress = async () => {
    await this.sendRequest();
  };
  static navigationOptions = {
    title: 'Българска литература',
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
        <Text>Потребителско име:</Text>
        <TextInput
            style={styles.textBox}
            onChangeText={(emailInput) => this.setState({email:emailInput})}
        />
        <Text>Парола:</Text>
        <TextInput
            style={styles.textBox}
            onChangeText={(passInput) => this.setState({pass:passInput})}
            secureTextEntry={true}
        />
        <Button
          title="Вход"
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
