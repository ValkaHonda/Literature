import React, {Component} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <view>
        <text>Hello!</text>
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
