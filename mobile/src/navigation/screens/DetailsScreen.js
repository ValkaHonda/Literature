import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, Button} from 'react-native';
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



  render() {
    return (
      <View style={styles.container}>
        <Text>Details Screen</Text>
        <Button
          title="Автори"
          onPress={() => this.props.navigation.push('Authors')}
        />

        <Button
          title="Тестове"
          onPress={() => this.props.navigation.push('Tests')}
        />

        <Button
          title="Статистики"
          onPress={() => this.props.navigation.push('Statistics')}
        />

        <Button
          title="Ранглисти"
          onPress={() => this.props.navigation.push('RangLists')}
        />
      </View>
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