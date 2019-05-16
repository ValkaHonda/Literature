import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, Button, ImageBackground, Image, TouchableWithoutFeedback} from 'react-native';
import {StoreGlobal } from '../../../App.js';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SpeechAndroid from 'react-native-android-voice';



export default class DetailsScreen extends Component {
  static navigationOptions = {
    title: 'Изход',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  componentWillMount(){
  
  }

  record = async () => {
    try{
      //More Locales will be available upon release.
      const spokenText = await SpeechAndroid.startSpeech("Моля, говорете", SpeechAndroid.BULGARIAN);
      const command = spokenText.toString().toLowerCase();
      //Alert.alert(JSON.stringify(spokenText));
      if(command === 'автор' || command === 'автори'){
        this.props.navigation.push('Authors')
      } else if(command === 'тест' || command === 'тестове'){
        this.props.navigation.push('Tests');
      } else if(command === 'аз' || command === 'профил'|| command === 'потребител'|| command === 'клиент'){
        this.props.navigation.push('User');
      }
      else {
        Alert.alert('Моля, пробвайте отново');
      }
  }catch(error){
    Alert.alert(JSON.stringify(error));
      /*switch(error){
          case SpeechAndroid.E_VOICE_CANCELLED:
              ToastAndroid.show("Voice Recognizer cancelled" , ToastAndroid.LONG);
              break;
          case SpeechAndroid.E_NO_MATCH:
              ToastAndroid.show("No match for what you said" , ToastAndroid.LONG);
              break;
          case SpeechAndroid.E_SERVER_ERROR:
              ToastAndroid.show("Google Server Error" , ToastAndroid.LONG);
              break;
          /*And more errors that will be documented on Docs upon release*/
      }
  
  };
  render() {
    return (
      
      <ImageBackground 
      source={require('../../images/Moleskin.png')}
      style={styles.container}>
      <TouchableWithoutFeedback onLongPress={()=>this.record()}>
        <Image style={[{width: 232.32, height: 258.94, alignSelf: 'center'},styles.textPadding]} 
          source={require('../../images/Ivan-Vazov.png')}></Image>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onLongPress={()=>this.record()}>
        <Text style={styles.quoteStyle}>"Книгите са най-евтината ваканция, която може да си купите."</Text>
      </TouchableWithoutFeedback>
        
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={() => {
          this.props.navigation.push('Authors')}}>
        <Image style={[{width: 120, height: 120}]} 
      source={require('../../images/Author-Book-Updated.png')}/>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => {
          this.props.navigation.push('Tests')}}>
        <Image style={[{width: 120, height: 120}]} 
      source={require('../../images/Test-Book-Updated.png')}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          this.props.navigation.push('User')}}>
        <Image style={[{width: 120, height: 120}]} 
      source={require('../../images/User-Book-Updated.png')}/>
        </TouchableOpacity>
        </View>

      </ImageBackground>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  textPadding: {
    marginTop: 30,
  },
  quoteStyle: 
  {
    fontFamily: 'Lorenco Font4You',
    fontSize: 30,
    color: 'black',
    textAlign: 'center'
  }
});