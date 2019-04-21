import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, Button} from 'react-native';
import {StoreGlobal } from '../../../App.js';


export default class DetailsScreen extends Component {
  static navigationOptions = {
    title: 'Details',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  componentWillMount(){

      Alert.alert(StoreGlobal({type: 'get', key: 'id'}));
    }



  render() {
    return (
      <View style={styles.container}>
        <Text>Details Screen</Text>
        <Button
          title="Authors"
          onPress={() => this.props.navigation.push('Authors')}
        />

        <Button
          title="Tests"
          onPress={() => this.props.navigation.push('Tests')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000000',
    justifyContent: 'space-between',
  },
});