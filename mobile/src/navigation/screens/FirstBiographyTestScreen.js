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
      array: this.transformArray(response)
    });
  }
).catch(console.log);  
  }

  transformArray = (array) =>
  {
    return array.map(
      (element) => 
      {
        return {
          key: element.id,
          question: element.question,
          answers: [
            element.rightAnswer, 
            element.wrongAnswer1, 
            element.wrongAnswer2, 
            element.wrongAnswer3
          ].sort((el1, el2) => {
            if(el1 < el2) {return -1;}
            if(el1 > el2) {return 1;}
            return 0;
          })
        };
      
      });
  }

renderAnswers = (answers) => 
{
  return answers.map(
    (answer) => 
    {
      return (
        <View>
          <Button
            title = {answer}
          />
          <Text style={{fontSize: 2}}></Text>
        </View>
      );
    }
  ); 
};

renderQuestions = (questions) => 
{
  return questions.map(
    (question) => {
      return (
        <View>
          <Text style={{textAlignVertical: "center", textAlign: "center", fontWeight: 'bold'}}>{question.key}. {question.question}</Text>
          {this.renderAnswers(question.answers)}
        </View>
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
    } else {
      return (
        <View style={styles.container}>
          <ScrollView>
            {this.renderQuestions(this.state.array)}
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