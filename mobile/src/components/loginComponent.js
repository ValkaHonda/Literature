import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, AppRegistry, TextInput } from 'react-native';


export default class Login extends Component {
  render() {
    return (
      <View>
        <Text>Email:</Text>
        <TextInput
            style={styles.textBox}
        />
        <Text>Password:</Text>
        <TextInput
            style={styles.textBox}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    textBox: {
        height: 40, 
        width: 200,
        borderColor: 'gray', 
        borderWidth: 1, 
        backgroundColor: "#ffffff",
    },
  });