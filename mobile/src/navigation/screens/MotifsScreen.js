import React, {Component} from 'react';
import {Alert, ActivityIndicator, StyleSheet, Text, ScrollView, View, Button} from 'react-native';
import {StoreGlobal } from '../../../App.js';
import {getMotifsByAuthorID} from '../../services/HTTPService';




export default class MotifsScreen extends Component {
  static navigationOptions = {
    title: 'Мотиви',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

    state = {
    array: [],
    loading: true,
    firstName: "",
    lastName: ""
  };

  constructor(props){
    super(props);
    const { navigation } = this.props;
    const key = navigation.getParam('key', 'NO-ID');
    const firstName = navigation.getParam('firstName', 'NO-FIRST-NAME');
    const lastName = navigation.getParam('lastName', 'NO-LAST-NAME');
    
    
    getMotifsByAuthorID(key).then((response)=>{
      this.setState({
        array: response,
        loading: false,
        firstName: firstName,
        lastName: lastName
      });
    }).catch((err)=>Alert.alert(JSON.stringify(err)));
  }

renderMotifs = (motifs) => {
  return motifs.map(
    (element, index, array) => {
      if (index === array.length-1) 
      {
        return (
          <View>
            <Text style={{fontWeight: 'bold'}}>
              {`${index+1}. ${element.title}`}
            </Text>
            <Text>{element.description}</Text>
          </View>
        );
      } else 
      {
        return (
          <View>
            <Text style={{fontWeight: 'bold'}}>
              {`${index+1}. ${element.title}`}
            </Text>
            <Text>{element.description}</Text>
            <Text></Text>
          </View>
        );
      }
    }
  );
};

  render() {
    if (this.state.loading){
      return (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }
    else {
      return (
        <View style={styles.container}>
          <Text style={{fontWeight: 'bold'}}>
            {this.state.firstName.toString()+" "+this.state.lastName.toString()}
          </Text>  
          <ScrollView>
          {this.renderMotifs(this.state.array)}
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