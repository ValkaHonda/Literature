import React, {Component} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import AuthorsScreen from './screens/AuthorsScreen';
import TestScreen from './screens/TestScreen';
import StatisticsScreen from './screens/StatisticsScreen';
import RangListScreen from './screens/RangListScreen';
import AuthorScreen from './screens/AuthorScreen';
import WorksScreen from './screens/WorksScreen';
import AnalysisScreen from './screens/AnalysisScreen';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Authors: AuthorsScreen,
    Tests: TestScreen,
    Statistics: StatisticsScreen,
    RangLists: RangListScreen,
    Author: AuthorScreen,
    Works: WorksScreen,
    Analysis: AnalysisScreen
  },
  {
    initialRouteName: 'Home',
  }
);

const Routes = createAppContainer(RootStack);
export default Routes;