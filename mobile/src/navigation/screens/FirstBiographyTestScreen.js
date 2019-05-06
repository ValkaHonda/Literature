import React, {Component} from 'react';
import {Alert, ActivityIndicator, StyleSheet, Text, View, Button, ScrollView} from 'react-native';
import {StoreGlobal } from '../../../App.js';
import {getBiographyQuestionsByQuizID} from '../../services/HTTPService';
/*import {
  Container, Header, Title, Content, Text,
  Button, Icon, Left, Right, Body, Badge,
  List, ListItem, CheckBox
} from 'native-base';*/




export default class FirstBiographyTestScreen extends Component {
  static navigationOptions = {
    title: 'Тест #1 - биографии',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  state = {
    id: 0,
    loading: true,
    array: []

  };

  constructor(props){
    super(props);
    const { navigation } = this.props;
    const id = navigation.getParam('biographyTestID', 'NO-ID');
    
getBiographyQuestionsByQuizID(id)
.then(
  (response) => {
    this.setState({
      id: id,
      loading: false,
      array: response
    });
  }
).catch(console.log);

    
  }




  render() {
    if (this.state.loading) 
    {
      return (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <Text>Първи тест върху биографии</Text>
          <ScrollView>
            <Text>{JSON.stringify(this.state.array)}</Text>
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