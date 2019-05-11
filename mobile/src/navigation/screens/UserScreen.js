import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, Button, ImageBackground} from 'react-native';
import {StoreGlobal } from '../../../App.js';
import {getUserInfo} from '../../services/HTTPService';




export default class TestsScreen extends Component {

  _storeData = async (key,item) => {
    try {
      await AsyncStorage.setItem(key, item);
    } catch (error) {
      // Error saving data
    }
  };

  render() {
    return (
      <ImageBackground 
        source={require('../../images/Moleskin.png')}
        style={[{width: '100%', height: '100%'}]}>
        <Button
          title="Статистики"
          onPress={() => this.props.navigation.push('Statistics')}
        />
        <Button
          title="Ранглисти"
          onPress={() => this.props.navigation.push('RangLists')}
        />
        <Button
          title="Изход"
          onPress={() => {
              this.props.navigation.navigate('Home');
              this._storeData('save','true');
            }
          }
        />
        
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