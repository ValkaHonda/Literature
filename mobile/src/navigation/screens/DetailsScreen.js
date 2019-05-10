import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, Button, ImageBackground, Image} from 'react-native';
import {StoreGlobal } from '../../../App.js';
import { TouchableOpacity } from 'react-native-gesture-handler';


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
      
      <Image style={[{width: 211.2, height: 235.4, alignSelf: 'center'},styles.textPadding]} 
      source={require('../../images/Ivan-Vazov.png')}></Image>
        
        
        <View style={{flexDirection:'row'}}>


        <TouchableOpacity onPress={() => {
          this.props.navigation.push('Authors')}}>
        <Image style={[{width: 100, height: 100}]} 
      source={require('../../images/Author-Book-Updated.png')}/>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => {
          this.props.navigation.push('Tests')}}>
        <Image style={[{width: 100, height: 100}]} 
      source={require('../../images/Test-Book-Updated.png')}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          this.props.navigation.push('User')}}>
        <Image style={[{width: 100, height: 100}]} 
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
  }
});