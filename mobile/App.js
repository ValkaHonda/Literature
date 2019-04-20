import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import  Routes  from './src/navigation/routes';
const globalState={};
export const StoreGlobal = (obj)=>
{
if(obj.type==='set'){
globalState[obj.key]=obj.value;
return true;
}else 
if(obj.type==='get'){
  return globalState[obj.key];
  }else{
    return null;
  } 

};


export default class App extends Component {
  render() {
    return (
      <Routes/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});