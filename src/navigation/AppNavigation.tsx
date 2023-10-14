import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/home';

const NavContainer = () => {
  return (
    <NavigationContainer>
      <Home />
    </NavigationContainer>
  );
};

export default NavContainer;
