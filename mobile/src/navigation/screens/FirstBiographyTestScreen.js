import React, {Component} from 'react';
import {Alert, ActivityIndicator, StyleSheet, Text, View, Button, ScrollView, ImageBackground} from 'react-native';
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
    array: [],
    answers: [],
    chosenAnswer: 0,
    currentQuestionIndex: 0,
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
let arr = [];
for (let i = 0; i < response.length; i++) 
{
  arr.push(0);
}

this.setState({
  buttonClicks: arr
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

renderAnswers = (questions, questionIndex) => 
{
  questionIndex = Number(questionIndex);
  const currentQuestion = questions[questionIndex];
  
  return (
    <View
      style={styles.container}>
      <Text>{currentQuestion.question}</Text>
      <Button
          title={currentQuestion.answers[0]}
          onPress={() => this.state.answers.push(1)}
      />
      <Button
          title={currentQuestion.answers[1]}
          onPress={() => this.state.answers.push(2)}
      />
      <Button
          title={currentQuestion.answers[2]}
          onPress={() => this.state.answers.push(3)}
      />
      <Button
          title={currentQuestion.answers[3]}
          onPress={() => this.state.answers.push(4)}
      />
    </View>
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
        <ImageBackground 
        source={require('../../images/Moleskin.png')}
        style={[{width: '100%', height: '100%'},styles.container]}>
          <ScrollView>
            { this.renderAnswers(this.state.array,this.state.currentQuestionIndex) }
            <Button
              style={{marginTop: 10}}
              title="Следващия въпрос:"
              onPress={() => {
                const newIndex = this.state.currentQuestionIndex+1;
                this.setState({currentQuestionIndex: newIndex});
                if(newIndex >= this.state.array.length){
                  
                  Alert.alert('Done');
                }
              }}
            />    
          </ScrollView> 
        </ImageBackground>         
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});