import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, ImageBackground} from 'react-native';


export default class StatisticsScreen extends Component {
  static navigationOptions = {
    title: 'Статистики',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      alignSelf: 'center', 
      textAlign:"center",
      flex:1,
    },
  };
  render() {
    return (
      <ImageBackground 
        source={require('../../images/Moleskin.png')}
        style={[{width: '100%', height: '100%'}]}>
        <Text>Всички статистики</Text>
        <Button
          title="Статистика върху биографии"
          onPress={() => this.props.navigation.push('BiographyStatistics')}
        />
        <Button
          title="Статистика върху творби"
          onPress={() => this.props.navigation.push('WorkStatistics')}
        />
        <Button
          title="Статистика върху автори"
          onPress={() => this.props.navigation.push('AuthorStatistics')}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff00',
  }
});
