import React, {Component} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import AuthorsScreen from './screens/AuthorsScreen';
import TestsScreen from './screens/TestsScreen';
import StatisticsScreen from './screens/StatisticsScreen';
import RangListsScreen from './screens/RangListsScreen';
import AuthorScreen from './screens/AuthorScreen';
import BiographyScreen from './screens/BiographyScreen';
import WorksScreen from './screens/WorksScreen';
import AnalysisScreen from './screens/AnalysisScreen';
import MotifsScreen from './screens/MotifsScreen';
import BiographyTestsScreen from './screens/BiographyTestsScreen';
import WorkTestsScreen from './screens/WorkTestsScreen';
import AuthorTestsScreen from './screens/AuthorTestsScreen';
import BiographyStatisticsScreen from './screens/BiographyStatisticsScreen';
import WorkStatisticsScreen from './screens/WorkStatisticsScreen';
import AuthorStatisticsScreen from './screens/AuthorStatisticsScreen';
import BiographyRangListScreen from './screens/BiographyRangListScreen';
import WorkRangListScreen from './screens/WorkRangListScreen';
import AuthorRangListScreen from './screens/AuthorRangListScreen';



const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Authors: AuthorsScreen,
    Tests: TestsScreen,
    Statistics: StatisticsScreen,
    RangLists: RangListsScreen,
    Author: AuthorScreen,
    Biography: BiographyScreen,
    Works: WorksScreen,
    Analysis: AnalysisScreen,
    Motifs: MotifsScreen,
    BiographyTests: BiographyTestsScreen,
    WorkTests: WorkTestsScreen,
    AuthorTests: AuthorTestsScreen,
    BiographyStatistics: BiographyStatisticsScreen,
    WorkStatistics: WorkStatisticsScreen,
    AuthorStatistics: AuthorStatisticsScreen,
    BiographyRangList: BiographyRangListScreen,
    WorkRangList: WorkRangListScreen,
    AuthorRangList: AuthorRangListScreen,
    
  },
  {
    initialRouteName: 'Home',
  }
);

const Routes = createAppContainer(RootStack);
export default Routes;