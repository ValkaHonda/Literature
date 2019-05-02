import React, {Component} from 'react';
import {AppRegistry, TouchableOpacity, Alert, StyleSheet, Text, View, Button, FlatList, Dimensions, Image} from 'react-native';



authors = [
  {firstName: "Иван", lastName: "Вазов", URL: "https://res.cloudinary.com/literature-image-api/image/upload/v1556274310/literature/Ivan-Vazov_o6aedz.jpg"},
  {firstName: "Йордан", lastName: "Йовков", URL: "https://res.cloudinary.com/literature-image-api/image/upload/v1556274309/literature/Jordan-Jovkov_sygsir.jpg"},
]; 
const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

const numColumns = 3;
export default class AuthorScreen extends React.Component {
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
  renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
    <TouchableOpacity onPress={() => Alert.alert(item.firstName+" "+item.lastName)}>
      <Image
        key={index}
        style = {{width: 100, height: 100}}
        source={{uri: item.URL}}    
        onPress={() => {
          Alert.alert('You tapped the button!');
        }}
      />
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <FlatList
        data={formatData(authors, numColumns)}
        style={styles.container}
        renderItem={this.renderItem}
        numColumns={numColumns}
      />
    );
  }

  

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  item: {
    backgroundColor: '#4D243D',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    height: Dimensions.get('window').width / numColumns, // approximate a square
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
  },
});