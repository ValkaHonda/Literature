import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, Button, ScrollView, ImageBackground} from 'react-native';
import {StoreGlobal } from '../../../App.js';
import {getUserInfo} from '../../services/HTTPService';
import Tts from "react-native-tts";



export default class AnalysisScreen extends Component {
  static navigationOptions = {
    title: 'Анализ',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  state = {
    voices: [],
    ttsStatus: "initiliazing",
    selectedVoice: "ru",
    speechRate: 0.3,
    speechPitch: 1,
    text: "This is an example text"
  };

  constructor(props){
    super(props);
    const { navigation } = this.props;
    const title = navigation.getParam('title', 'NO-TITLE');
    const description = navigation.getParam('description', 'NO-DESCRIPTION');
    this.state = {
      title: title,
      description: description
    };
  }

  render() {
    return (
      <ImageBackground 
        source={require('../../images/Moleskin.png')}
        style={[{width: '100%', height: '100%'}]}>
        <Text style={{fontWeight: 'bold'}}>{this.state.title.toString()}</Text>
        <Button
          title="Говори"
          onPress={async () => {
            Tts.stop();
            Tts.setDefaultLanguage('ru')
            Tts.speak(this.state.description.toString());
          }}
        />
        <Button
          title="Спри"
          onPress={async () => {
            Tts.stop();
          }}
        />
        <ScrollView>
          <Text>{this.state.description.toString()}</Text>
        </ScrollView>
      </ImageBackground>
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