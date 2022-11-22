import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeScreen} from '../../screens';

export type MainStackParams = {
  Home: undefined;
};

const {Navigator, Screen} = createNativeStackNavigator<MainStackParams>();

export const MainStack = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Screen name="Home" component={HomeScreen} />
  </Navigator>
);
