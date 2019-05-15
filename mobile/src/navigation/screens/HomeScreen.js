import React, {Component} from 'react';
import { 
  Alert, 
  StyleSheet, 
  Text, 
  View,
  ActivityIndicator,
  ImageBackground,
  Button, 
  TextInput,
} from 'react-native';
import { login } from '../../services/HTTPService';
import { StoreGlobal } from '../../../App.js';
import AsyncStorage from '@react-native-community/async-storage';


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
    loading: false,
  };

  constructor(props){
    super(props);
    
  }

  componentWillMount(){
    this._retrieveData('save').then(
      async (res)=>{
        if(!!res){
          const email = await this._retrieveData('email');
          const pass = await this._retrieveData('pass');
          this.setState({
            email: email,
            pass: pass,
          },()=>
          this.sendRequest({
            email: email,
            pass: pass,
          }));
        }
      }
    ).catch(console.log);
}
  onEmailChange = e => {
      this.setState({ email: e.target.value });
  };

  onPassChange = e => {
      this.setState({
        pass: e.target.value,
      });
  };
  _storeData = async (key,item) => {
    try {
      await AsyncStorage.setItem(key, item);
    } catch (error) {
      // Error saving data
    }
  };
  _retrieveData = async (item) => {
    try {
      const value = await AsyncStorage.getItem(item);
      if (value !== null) {
        // We have data!!
        return value;
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  sendRequest = () => {
    this.setState({loading:true});
      login(this.state)
      .then((response) => {
        this.setState({loading:false});
        if(JSON.stringify(response).includes("Bad credentials")){
          Alert.alert("Няма такъв потребител.");
          return;
        }
        setTimeout(() => {this.props.navigation.navigate('Home');}, 5000); // logout after 5 seconds
        this.setState({ token: response.token });
        StoreGlobal({
          type:'set', 
          key:'token', 
          value: `${response.token}`
        });
        this._storeData('email',this.state.email);
        this._storeData('pass',this.state.pass);
        this._storeData('save','true');
        this.props.navigation.push('Details');
      }).catch(
        (error) => {
          this.setState({loading:false});
          Alert.alert('Wi-fi error');
        }
      );
  };
  onLogInButtonPress = async () => {
    await this.sendRequest();
  };
  onRegisterButtonPress = () => {
    this.props.navigation.navigate('Register');
  };
  render() {
    if(this.state.loading){
      return (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
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
        <View style={{flexDirection:'row'}}>
          <Button 
            color = "rgba(52, 52, 52, 0.7)"
            title = "Вход"
            onPress = {this.onLogInButtonPress}
          />
          <Button 
            color = "rgba(52, 52, 52, 0.7)"
            title = "регистрация"
            onPress = {this.onRegisterButtonPress}
          />
        </View>
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
  },
  textBox: {
    height: 40, 
    width: 200,
    borderColor: 'rgb(104, 0, 0)', 
    borderWidth: 1, 
    backgroundColor: "rgba(255, 255, 255, 0.4)",
},

});
