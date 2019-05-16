import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, Button, ImageBackground, Image} from 'react-native';
import {StoreGlobal } from '../../../App.js';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AndroidTextToSpeech from 'react-native-tts';



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

  render() {
    return (
      <ImageBackground 
      source={require('../../images/Moleskin.png')}
      style={styles.container}>
      
      <Image style={[{width: 232.32, height: 258.94, alignSelf: 'center'},styles.textPadding]} 
      source={require('../../images/Ivan-Vazov.png')}></Image>
      <Text style={styles.quoteStyle}>"Книгите са най-евтината ваканция, която може да си купите."</Text>
        
        
        <View style={{flexDirection:'row'}}>

        <Button
          color="green"
          title="test sound"
          onPress={() => {
            
          }}
      />

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