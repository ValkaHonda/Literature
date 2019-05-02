import React, {Component} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';


export default class RangListScreen extends Component {
  static navigationOptions = {
    title: 'Ранглисти',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      alignSelf: 'center', 
      textAlign:"center",
      flex:1,
    },
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Ранглисти</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff00',
  }
});
