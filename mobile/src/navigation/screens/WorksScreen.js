import React, {Component} from 'react';
import {Alert, ActivityIndicator, StyleSheet, Text, View, Button, FlatList} from 'react-native';
import {StoreGlobal } from '../../../App.js';
import {getWorksByAuthorID} from '../../services/HTTPService';



export default class WorksScreen extends Component {
  state = {
    array: [], 
    loading: true

  };

  constructor(props){
    super(props);
    const { navigation } = this.props;
    const key = navigation.getParam('key', 'NO-ID');
    console.log("This is key: ------------------>"+ key);
    
    getWorksByAuthorID(key).then((response)=>{
      this.setState({
        array: response,
        loading: false,
      });
    }).catch((err)=>Alert.alert(JSON.stringify(err)));
  }

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

    // renderItem = ({ item, index }) => {
    //   return  (<Button
    //   title= {item.title}
    //   onPress={() => this.props.navigation.push('Analysis')}
    // />);
    // };

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
        <FlatList
          data={this.state.array.map((element, index) => {
              return {
                key: index,
                title: element.title,
                description: element.description
              };
          })}
          renderItem={({item}) => {
            return (<Button
              title={item.title}
              onPress={() => this.props.navigation.push('Analysis', {
                description: item.description,
                title: item.title
              })}
            />);
          }}
        />
      );
    }   
  }

  // render(){
  //   if (this.state.loading){
  //         return (
  //           <View style={[styles.container, styles.horizontal]}>
  //             <ActivityIndicator size="large" color="#0000ff" />
  //           </View>
  //         )
  //       }
  //       else {
  //         return <Text>{JSON.stringify(this.state.array[0].title)}</Text>
  //       }
  // }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff00',
  },
});