import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, Button, ImageBackground, Image} from 'react-native';
import {StoreGlobal } from '../../../App.js';


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


//480 / 535 = 96/107
  render() {
    return (
      <ImageBackground 
      source={require('../../images/Moleskin.png')}
      style={styles.container}>
      
      <Image style={[{width: 211.2, height: 235.4, alignSelf: 'center'},styles.textPadding]} source={require('../../images/Ivan-Vazov.png')}></Image>
        <Button
          title="Автори"
          onPress={() => this.props.navigation.push('Authors')}
        />

        <Button
          title="Тестове"
          onPress={() => this.props.navigation.push('Tests')}
        />

        <Button
          title="Потребител"
          onPress={() => this.props.navigation.push('User')}
        />


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