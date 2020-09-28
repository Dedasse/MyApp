import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../views/Home';
import Single from '../views/Single';
import Profile from '../views/Profile';
import Login from '../views/Login';
import {AuthContext} from '../context/AuthContext';
import {Icon} from 'native-base';
import Upload from '../views/Upload';
import MyFiles from '../views/MyFiles';
import Modify from '../views/Modify';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const TabScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarIcon: ({color}) =>(
            <Icon name={'home'} color={color} size={26}/> ),
      }}
      />
      <Tab.Screen name="Profile" component={Profile}
       options={{
        tabBarIcon: ({color}) =>(
          <Icon name={'finger-print'} color={color} size={26}/> ),
    }}
      />
       <Tab.Screen name="Upload" component={Upload}
        options={{
          tabBarIcon: ({color}) =>(
            <Icon name={'home'} color={color} size={26}/> ),
        }}
        />
      </Tab.Navigator>
  );
 };
const StackScreen = () => {
  const {isLoggedIn} =useContext(AuthContext);
  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <>
          <Stack.Screen name="Home" component={TabScreen}/>
          <Stack.Screen name="Single" component={Single} />
          <Stack.Screen name="MyFiles" component={MyFiles} />
          <Stack.Screen name="Modify" component={Modify}/>
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={Login}/>
        </>
      )}
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
