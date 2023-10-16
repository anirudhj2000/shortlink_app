import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {ReactNode} from 'react';
import {useNavigation} from '@react-navigation/core';
import {RootScreenStackProps} from '../navigation/types';

const Login = ({navigation}: RootScreenStackProps<'Login'>) => {
  return (
    <View>
      <Text style={{color: '#000'}}>Login</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text>Sup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
