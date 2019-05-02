import React, {Component} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import AuthorScreen from './screens/AuthorScreen';
import TestScreen from './screens/TestScreen';
import StatisticsScreen from './screens/StatisticsScreen';
import RangListScreen from './screens/RangListScreen';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Authors: AuthorScreen,
    Tests: TestScreen,
    Statistics: StatisticsScreen,
    RangLists: RangListScreen
  },
  {
    initialRouteName: 'Home',
  }
);

const Routes = createAppContainer(RootStack);
export default Routes;