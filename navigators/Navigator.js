import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../views/Home';
import SingleScreen from '../views/Single';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const TabScreen = () => {
  return (
    // TODO: move content of <NavigationContainer> here
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen}/>
      </Tab.Navigator>
  );
 };
const StackScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={TabScreen}/>
      <Stack.Screen name="Single" component={SingleScreen}/>
    </Stack.Navigator>
  );
 };
const Navigator = () => {
  return (
    <NavigationContainer>
      <StackScreen/>
    </NavigationContainer>
  );
};

export default Navigator;
