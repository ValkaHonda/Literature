import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, Button, FlatList} from 'react-native';
import {StoreGlobal } from '../../../App.js';



export default class WorksScreen extends Component {
  works = [
    {
      key: 1, 
      title: "Българският език"
    },
    {
      key: 2, 
      title: "Една българка"
    },
    ]; 

  static navigationOptions = {
    title: 'Творби',
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

    renderItem = ({ item, index }) => {
      return  (<Button
      title= {item.title}
      onPress={() => this.props.navigation.push('Analysis')}
    />);
    };

  render() {
    return (
      <FlatList
        data={this.works}
        renderItem={({item}) => {
          return (<Button
            title={item.title}
            onPress={() => this.props.navigation.push('Analysis')}
          />);
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff00',
  },
});