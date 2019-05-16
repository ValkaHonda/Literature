import React, {Component} from 'react';
import {Alert, TouchableWithoutFeedback, ImageBackground, StyleSheet, Text, View, Button, Image} from 'react-native';
import {StoreGlobal } from '../../../App.js';
import SpeechAndroid from 'react-native-android-voice';


export default class AuthorScreen extends Component {
  static navigationOptions = {
    title: 'Информация за автор',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  constructor(props){
    super(props);
    const { navigation } = this.props;
    const key = navigation.getParam('key', 'NO-ID'); 
    const URL = navigation.getParam('URL', 'NO-URL');
    const firstName = navigation.getParam('firstName', 'NO-FIRST-NAME');
    const lastName = navigation.getParam('lastName', 'NO-LAST-NAME');
    const biography = navigation.getParam('biography', 'NO-BIOGRAPHY');
    this.state = {
      key: key,
      URL: URL,
      firstName: firstName,
      lastName: lastName,
      biography: biography
    }; 
  }


  componentWillMount(){
    }

    record = async () => {
      try{
        //More Locales will be available upon release.
        const spokenText = await SpeechAndroid.startSpeech("Моля, говорете", SpeechAndroid.BULGARIAN);
        const command = spokenText.toString().toLowerCase();
        if(command === "биография"){
          this.props.navigation.push('Biography', {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            biography: this.state.biography
          });
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
      <TouchableWithoutFeedback onLongPress={()=>this.record()}>
        <ImageBackground 
          source={require('../../images/Moleskin.png')}
          style={[{width: '100%', height: '100%'}, styles.container]}>
        
          <Image
          style = {{width: 100, height: 100}}
          source={{uri: this.state.URL}} 
        />
          <Text>{this.state.firstName}</Text>
          <Text>{this.state.lastName}</Text>
          <Button
            title="Биография"
            onPress={() => this.props.navigation.push('Biography', {
              firstName: this.state.firstName,
              lastName: this.state.lastName,
              biography: this.state.biography
            })}
          />
          <Button
            title="Творби"
            onPress={() => this.props.navigation.push('Works', 
            {
              key: this.state.key
            })}
          />
          <Button
            title="Мотиви"
            onPress={() => this.props.navigation.push('Motifs', {
              key: this.state.key,
              firstName: this.state.firstName,
              lastName: this.state.lastName
            })}
          />

        </ImageBackground>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffff00',
    justifyContent: 'space-between',
  },
});