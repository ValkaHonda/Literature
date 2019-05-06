import React, {Component} from 'react';
import {Alert, StyleSheet, ActivityIndicator, Text, View, Button, ScrollView} from 'react-native';
import {StoreGlobal } from '../../../App.js';
import {getAllBiographyTests} from '../../services/HTTPService';




export default class BiographyTestsScreen extends Component {
  static navigationOptions = {
    title: 'Тестове върху биографии',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

state = {
loading: true,
array: []
};

constructor(props)
{
  super(props);
  getAllBiographyTests().then(
    (response) => {
      this.setState({
        array: response,
        loading: false
      })
    }
  ).catch((error) => console.log(error));

}

renderArray = (array) => 
{
  return array.map(
    (element, index) => {
      return (
        <Button
          title="Първи тест"
          onPress={() => this.props.navigation.push('FirstBiographyTest')}
        />
      );
    }
  );
};

  render() {
    if (this.state.loading) 
    {
      return (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    } else
    {
      return (
        <View style={styles.container}>
          <Text>Тестове върху биографии</Text>
          <ScrollView>
          {this.renderArray(this.state.array)}
          </ScrollView>
          </View>
      );
    }
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