import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigation/RootStack';

type LandingScreenProps = NativeStackScreenProps<
  RootStackParams,
  'LandingScreen'
>;

export const LandingScreen: React.FC<LandingScreenProps> = ({navigation}) => {
  const onAmplifyPress = () => navigation.navigate('AmplifyStack');

  const onFirebasePress = () => navigation.navigate('FirebaseStack');

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onAmplifyPress}>
        <Text style={styles.button}>Amplify</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onFirebasePress}>
        <Text style={styles.button}>Firebase</Text>
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
