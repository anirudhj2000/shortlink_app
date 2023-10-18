import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import Builder from '../screens/builder';
import {HomeStackProps} from './types';

const HomeStack = createNativeStackNavigator<HomeStackProps>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="HomeScreen" component={Home} />
      <HomeStack.Screen name="Builder" component={Builder} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
