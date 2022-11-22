import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AmplifyStack} from './AmplifyStack';
import {LandingScreen} from '../screens/Amplify';
import {FirebaseStack} from './FirebaseStack';

export type RootStackParams = {
  LandingScreen: undefined;
  AmplifyStack: undefined;
  FirebaseStack: undefined;
};

const {Navigator, Screen} = createNativeStackNavigator<RootStackParams>();

export const RootStack = () => (
  <Navigator>
    <Screen name="LandingScreen" component={LandingScreen} />
    <Screen name="AmplifyStack" component={AmplifyStack} />
    <Screen name="FirebaseStack" component={FirebaseStack} />
  </Navigator>
);
