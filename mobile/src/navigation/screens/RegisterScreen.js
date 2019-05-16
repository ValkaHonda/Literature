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
import { register } from '../../services/HTTPService';
import { StoreGlobal } from '../../../App.js';
import AsyncStorage from '@react-native-community/async-storage';

export default class RegisterScreen extends Component {

  state = {
    email: '',
    pass: '',
    passTwo:'',
    loading: false,
  };

  constructor(props){
    super(props);
  }

  onEmailChange = e => {
      this.setState({ email: e.target.value });
  };

  onPassChange = e => {
      this.setState({
        pass: e.target.value,
      });
  };
  onPassTwoChange = e => {
      this.setState({
        passTwo: e.target.value,
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
      register(this.state).then((response) => {
        this._storeData('save','false');
        this.setState({loading:false});
        this.props.navigation.navigate('Home');
      }).catch(
        (error) => {
          this.props.navigation.navigate('Home');
          this.setState({loading:false});
        }
      );
  };
  onRegisterButtonPress = () => {
    if(this.state.pass !== this.state.passTwo){
      Alert.alert('Passwords must match!');
    } else {
      this.sendRequest();
    }
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
        <TextInput
            style={styles.textBox}
            onChangeText={(passInput) => this.setState({passTwo:passInput})}
            secureTextEntry={true}
            placeholder = "Повторете паролата"
            placeholderTextColor = "rgba(0, 0, 0, 0.3)"
            textAlign={'center'}
            selectionColor={"rgba(0, 0, 0, 0.4)"}
        />
        <Text></Text>
          <Button 
            color = "rgba(52, 52, 52, 0.7)"
            title = "регистрация"
            onPress = {this.onRegisterButtonPress}
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
