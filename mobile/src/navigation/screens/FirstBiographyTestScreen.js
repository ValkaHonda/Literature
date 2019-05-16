import React, {Component} from 'react';
import {Alert, ActivityIndicator, StyleSheet, Text, View, Button, ScrollView, ImageBackground, TouchableOpacity, Image} from 'react-native';
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
    result:-1,
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
          img: element.img,
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
          })/*.sort((el1,el2)=>el2-el1)*/
        };
      
      });
  }
sendRequest = async () => {
  const answersArr = this.state.answers;
  const questions = this.state.array;
  const answersToSend = [];
  for (let i = 0; i < answersArr.length; i++) {
    answersToSend.push(questions[i].answers[answersArr[i]-1]);
  }
  console.log(JSON.stringify(answersToSend));
  postBiographyTest({
    answers: answersToSend
  },this.state.id)
    .then((res)=>{
      console.log(res);
      this.props.navigation.push('Score',{
        result:Number(res),
      });
    })
    .catch((err)=>console.log(err));
};

renderAnswers = (questions, questionIndex) => 
{
  questionIndex = Number(questionIndex);
  
  
  const currentQuestion = questions[questionIndex];

  // if(!currentQuestion){
  //   this.props.navigation.navigate('Home');
  //   return;
  // }


  // Start Start Start Start Start
  /*
      <Button
          color= {(this.state.chosenAnswer === 1)?'red':'green'}//"#841584" 
          title={currentQuestion.answers[0]}
          onPress={() => {
            this.state.answers[questionIndex] = 1;
            this.setState({chosenAnswer:1});
          }}
      />
      */ // https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Flag_of_Libya_%281977%E2%80%932011%29.svg/300px-Flag_of_Libya_%281977%E2%80%932011%29.svg.png
  
  return (
    <View
      style={styles.container}>

      <Image
          style={{width: 200, height: 200}}
          source={{uri: currentQuestion.img}}
        />

      <Text
        style={{fontSize: 20}}
      >{currentQuestion.question}</Text>
        <TouchableOpacity 
        style={{margin: 10}}
        onLongPress={()=>this.record()}
        onPress={() => {
          
            this.state.answers[questionIndex] = 1;
            this.setState({chosenAnswer:1});
          
          }}>
                
        </TouchableOpacity>

        <TouchableOpacity 
        style={{margin: 10}}
        onLongPress={()=>this.record()}
        onPress={() => {
          
            this.state.answers[questionIndex] = 1;
            this.setState({chosenAnswer:1});
          
          }}>
        
        </TouchableOpacity>

        <TouchableOpacity 
        style={{margin: 10}}
        onLongPress={()=>this.record()}
        onPress={() => {
          
            this.state.answers[questionIndex] = 1;
            this.setState({chosenAnswer:1});
          
          }}>
        
        
      </TouchableOpacity>





<TouchableOpacity 
        style={{margin: 10}}
        onLongPress={()=>this.record()}
        onPress={() => {
          
            this.state.answers[questionIndex] = 1;
            this.setState({chosenAnswer:1});
          
          }}>
      
        </TouchableOpacity>

      <Button
          color= {(this.state.chosenAnswer === 1)?'red':'green'}//"#841584" 
          title={currentQuestion.answers[0]}
          onPress={() => {
            this.state.answers[questionIndex] = 1;
            this.setState({chosenAnswer:1});
          }}
      />
      <Button
          color={(this.state.chosenAnswer === 2)?'red':'green'}
          title={currentQuestion.answers[1]}
          onPress={() => {
            this.state.answers[questionIndex] = 2;
            this.setState({chosenAnswer:2});
          }}
      />
      <Button
          color= {(this.state.chosenAnswer === 3)?'red':'green'}
          title={currentQuestion.answers[2]}
          onPress={() => {
            this.state.answers[questionIndex] = 3;
            this.setState({chosenAnswer:3});
          }}
      />
      <Button
          color={(this.state.chosenAnswer === 4)?'red':'green'}
          title={currentQuestion.answers[3]}
          onPress={() => {
            this.state.answers[questionIndex] = 4;
            this.setState({chosenAnswer:4});
          }}
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
              title={(this.state.currentQuestionIndex < this.state.array.length-1) ? "Следващия въпрос:" : "Изпрати"}
              onPress={() => {
                if(this.state.currentQuestionIndex > this.state.array.length-2){
                  
                  this.sendRequest();
                  return;
                }
                if(this.state.answers[this.state.currentQuestionIndex] > 0){
                  const newIndex = this.state.currentQuestionIndex+1;
                  this.setState({currentQuestionIndex:0});
                  this.setState({chosenAnswer:0});
                  this.setState({currentQuestionIndex: newIndex});
                } else {
                  Alert.alert("Choose an answer!")
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
  borders: {
    borderColor: 'green',
    borderWidth: 10
  }
});

