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
  AsyncStorage
} from 'react-native';
import { login } from '../../services/HTTPService';
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
    loading: false,
  };


  onEmailChange = e => {
      this.setState({ email: e.target.value });
  };

  onPassChange = e => {
      this.setState({
        pass: e.target.value,
      });
  };
  _storeData = async (token) => {
    try {
      await AsyncStorage.setItem('token', token);
    } catch (error) {
      // Error saving data
    }
  };
  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
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
        this.setState({ token: response.token });
        StoreGlobal({
          type:'set', 
          key:'token', 
          value: `${response.token}`
        });
        

        this.props.navigation.push('Details');
      }).catch(
        (error) => {
          this.setState({loading:false});
          console.log("User log-in error!")
          console.log(error);
        }
      );
  };
  onLogInButtonPress = async () => {
    await this.sendRequest();
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
  },
  textBox: {
    height: 40, 
    width: 200,
    borderColor: 'rgb(104, 0, 0)', 
    borderWidth: 1, 
    backgroundColor: "rgba(255, 255, 255, 0.4)",
},

});
