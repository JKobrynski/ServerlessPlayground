import {View, Text} from 'react-native';
import React from 'react';
import {ActiveScreen} from '../../App';

type SignInScreenProps = {
  setActiveScreen: (screen: ActiveScreen) => void;
};

export const SignInScreen: React.FC<SignInScreenProps> = ({
  setActiveScreen,
}) => {
  return (
    <View>
      <Text>SignInScreen</Text>
    </View>
  );
};
