import React, {Component} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';


export default class Login extends Component {
  render() {
    return (
      <view>
        <text>Email:</text>
        <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        />
        <text>Password:</text>
        <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        />
      </view>
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
});