import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/login';
import HomeStackNavigator from './HomeStack';
import {RootScreenProps} from './types';

const MainStack = createNativeStackNavigator<RootScreenProps>();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen name="Login" component={Login} />
      <MainStack.Screen name="Home" component={HomeStackNavigator} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
