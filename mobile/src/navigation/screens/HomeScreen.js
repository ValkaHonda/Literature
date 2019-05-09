import React, {Component} from 'react';
import { 
  Alert, 
  StyleSheet, 
  Text, 
  View,
  ImageBackground,
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
  // static navigationOptions = {
  //   title: 'Българска литература',
  //   headerStyle: {
  //     backgroundColor: '#f4511e',
  //   },
  //   headerTintColor: '#fff',
  //   headerTitleStyle: {
  //     fontWeight: 'bold',
  //     alignSelf: 'center', 
  //     textAlign:"center",
  //     flex:1,
  //   },
  // };
  render() {
    return (
    
      <ImageBackground 
      source={require('../../images/Book-Cover.jpg')}
      style={[{width: '100%', height: '100%'}, styles.container]}
        >
        <Text style={styles.baseText}>Не се гаси туй,</Text>
        <Text style={styles.baseText}>що не гасне.</Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>

        <TextInput
            style={styles.textBox}
            onChangeText={(emailInput) => this.setState({email:emailInput})}
            placeholder = "Потребителско име"
            placeholderTextColor = "rgba(0, 0, 0, 0.3)"
            textAlign={'center'}
            selectionColor={"rgba(0, 0, 0, 0.4)"}
        />
        <Text></Text>
        <TextInput
            style={styles.textBox}
            onChangeText={(passInput) => this.setState({pass:passInput})}
            secureTextEntry={true}
            placeholder = "Парола"
            placeholderTextColor = "rgba(0, 0, 0, 0.3)"
            textAlign={'center'}
            selectionColor={"rgba(0, 0, 0, 0.4)"}
        />
        <Text></Text>
        <Button 
          color = "rgba(52, 52, 52, 0.7)"
          title = "Вход"
          onPress = {this.onLogInButtonPress}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'HilandarskiUstav5',
    fontSize: 30
    },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff00',
  },
  textBox: {
    height: 40, 
    width: 200,
    borderColor: 'rgb(104, 0, 0)', 
    borderWidth: 1, 
    backgroundColor: "rgba(255, 255, 255, 0.4)",
},

});
