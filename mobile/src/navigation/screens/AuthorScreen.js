import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';


export default class AuthorScreen extends Component {
  static navigationOptions = {
    title: 'Автори',
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
  authors = [
    {firstName: "Иван", lastName: "Вазов", URL: "https://res.cloudinary.com/literature-image-api/image/upload/v1556274310/literature/Ivan-Vazov_o6aedz.jpg"},
    {firstName: "Йордан", lastName: "Йовков", URL: "https://res.cloudinary.com/literature-image-api/image/upload/v1556274309/literature/Jordan-Jovkov_sygsir.jpg"},
    {firstName: "Йордан", lastName: "Йовков", URL: "https://res.cloudinary.com/literature-image-api/image/upload/v1556274309/literature/Jordan-Jovkov_sygsir.jpg"},
    {firstName: "Йордан", lastName: "Йовков", URL: "https://res.cloudinary.com/literature-image-api/image/upload/v1556274309/literature/Jordan-Jovkov_sygsir.jpg"},
    {firstName: "Йордан", lastName: "Йовков", URL: "https://res.cloudinary.com/literature-image-api/image/upload/v1556274309/literature/Jordan-Jovkov_sygsir.jpg"},
    {firstName: "Йордан", lastName: "Йовков", URL: "https://res.cloudinary.com/literature-image-api/image/upload/v1556274309/literature/Jordan-Jovkov_sygsir.jpg"},
    {firstName: "Йордан", lastName: "Йовков", URL: "https://res.cloudinary.com/literature-image-api/image/upload/v1556274309/literature/Jordan-Jovkov_sygsir.jpg"},
    {firstName: "Йордан", lastName: "Йовков", URL: "https://res.cloudinary.com/literature-image-api/image/upload/v1556274309/literature/Jordan-Jovkov_sygsir.jpg"}
  ]; 
  getAuthors = () => {
    return this.authors.map((element, index) => {
      return (
        <Image
          key={index}
          style = {{width: 100, height: 100}}
          source={{uri: element.URL}}            
        />
      );
    });
  };
  render() {
    return (
      <View style={styles.container}>
        {this.getAuthors()}
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
