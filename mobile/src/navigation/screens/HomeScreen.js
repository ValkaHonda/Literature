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

componentDidMount(){
  
}

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
      }).then(
        () => {
          fetch(`${this.url.base}/users/id`,{
            method: 'POST', // or 'PUT'
            body: JSON.stringify({username: `${this.state.email}`}), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${this.state.token}`
            }
          }).then((response) => response.json())
          .then(async (response) => {
            //AsyncStorage.setItem('id',JSON.stringify(response)); // In the next version of React Native this will be deprecated
            await this.setState({ id: JSON.stringify(response)});
            await this.setState({ login: true});
            await AsyncStorage.setItem("id", this.state.id);
            await AsyncStorage.setItem("token", this.state.token);
            await AsyncStorage.setItem("login", JSON.stringify(this.state.login));
            StoreGlobal({
              type:'set', 
              key:'id', 
              value: `${this.state.id}`});
            StoreGlobal({
              type:'set', 
              key:'login', 
              value: `${this.state.login}`});
              
              this.props.navigation.push('Details');
          })
          .catch((error) => {
            Alert.alert("ID error");
          });
      }

      )
      .catch((error) => {
        Alert.alert("error");
      });
  };
  onLogInButtonPress = async () => {
    await this.sendRequest();
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
