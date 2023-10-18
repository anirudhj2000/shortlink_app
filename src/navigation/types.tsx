import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootScreenProps = {
  Login: undefined;
  Home: undefined;
};

export type RootScreenStackProps<T extends keyof RootScreenProps> =
  NativeStackScreenProps<RootScreenProps, T>;

export type HomeStackProps = {
  HomeScreen: undefined;
  Builder: undefined;
};

export type HomeScreenStackPropss<T extends keyof HomeStackProps> =
  NativeStackScreenProps<HomeStackProps, T>;
