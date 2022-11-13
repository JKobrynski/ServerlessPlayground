import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignInScreen, SignUpScreen} from '../screens';

export type AuthStackParams = {
  SignIn: undefined;
  SignUp: undefined;
};

const {Navigator, Screen} = createNativeStackNavigator<AuthStackParams>();

export const AuthStack = () => (
  <Navigator>
    <Screen name="SignIn" component={SignInScreen} />
    <Screen name="SignUp" component={SignUpScreen} />
  </Navigator>
);
