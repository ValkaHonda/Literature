import React, {Component} from 'react';
import {AppRegistry, ImageBackground, ActivityIndicator, TouchableOpacity, Alert, StyleSheet, Text, View, Button, FlatList, Dimensions, Image} from 'react-native';
import {getAuthors} from '../../services/HTTPService';
import { SearchBar } from 'react-native-elements';



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
  state = {
    arr: [],
    loading: true,
    search: '',
  };
  constructor(props){
    super(props);
    getAuthors().then((response)=>{
      this.setState({
        arr: response,
        loading: false,
      });
    }).catch((err)=>Alert.alert(JSON.stringify(err)));
  }
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
        <TouchableOpacity 
        style={{margin: 10}}
        onPress={() => {
          this.props.navigation.push('Author',{
            key: item.key,
            firstName: item.firstName, 
            lastName: item.lastName,
            biography: item.biography,
            URL: item.url}
          );}}>
          <Image
            key={index}
            style={{width: 100, height: 100}}
            source={{uri: item.url}}    
          />
          <Text style={styles.authorName}>{item.firstName+" "+item.lastName}</Text>
          </TouchableOpacity>
    );
  };
  updateSearch = search => {
    this.setState({ search });
  };
  render() {
    const { search } = this.state;

    if(this.state.loading){
      return (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    } else {
      return (
        <ImageBackground 
        source={require('../../images/Moleskin.png')}
        style={[{width: '100%', height: '100%'}, styles.container]}>
        <SearchBar
          placeholder="Потърсете автор"
          onChangeText={this.updateSearch}
          value={search}
        />
            <FlatList
              data={formatData(this.state.arr.filter(
                (element)=>(element.firstName+" "+element.lastName).toLowerCase().includes(this.state.search.toLowerCase())
              ), numColumns)}
              style={[styles.MainScreenBox]}
              renderItem={this.renderItem}
              numColumns={numColumns}
            />
        </ImageBackground>
      );  
    }
    
  }

  componentWillMount(){

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 0,
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
  authorName: 
  {
    textAlign: 'center',
    fontSize: 11,
  },
  MainScreenBox: {
    flex:1,
    display: "flex",
    flexDirection: "column"
},
});