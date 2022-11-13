import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {ActiveScreen} from '../../App';

type LandingScreenProps = {
  setActiveScreen: (screen: ActiveScreen) => void;
};

export const LandingScreen: React.FC<LandingScreenProps> = ({
  setActiveScreen,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setActiveScreen('SignUp')}>
        <Text style={styles.button}>Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setActiveScreen('SignIn')}>
        <Text style={styles.button}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  button: {
    textTransform: 'uppercase',
    fontWeight: '600',
    fontSize: 16,
  },
});
