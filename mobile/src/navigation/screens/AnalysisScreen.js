import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, Button, ScrollView} from 'react-native';
import {StoreGlobal } from '../../../App.js';
import {getUserInfo} from '../../services/HTTPService';




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
      <View style={styles.container}>
        <Text>{this.state.title.toString()}</Text>
        <ScrollView>
          <Text>{this.state.description.toString()}</Text>
        </ScrollView>
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