import React, {Component} from 'react';
import {Alert, ActivityIndicator, StyleSheet, Text, View, Button, ScrollView, ImageBackground} from 'react-native';
import {StoreGlobal } from '../../../App.js';
import {
  getBiographyQuestionsByQuizID,
  postBiographyTest,
} from '../../services/HTTPService';
/*import {
  Container, Header, Title, Content, Text,
  Button, Icon, Left, Right, Body, Badge,
  List, ListItem, CheckBox
} from 'native-base';*/




export default class YourScore extends Component {
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
    result: -1,
};

  constructor(props){
    super(props);
    const { navigation } = this.props;
    const navResult = navigation.getParam('result', '-1');
    const result = +navResult;
    this.state = {result: result};
  }
  render() {
      return (
        <View>
          <Text>Your score:</Text>
          <Text>{JSON.stringify(this.state.result)}</Text>
          <Button
          color= {(this.state.chosenAnswer === 1)?'red':'green'}//"#841584" 
          title='Home'
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}
      />
        </View>
      );
    }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});