import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import {AuthStackParams} from '../../navigation/FirebaseStack/AuthStack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type SignInScreenProps = NativeStackScreenProps<AuthStackParams, 'SignIn'>;

export const SignInScreen: React.FC<SignInScreenProps> = ({navigation}) => {
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');

  const onSubmit = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.log('[onSubmit] error', err);
    }
  };

  const onSignUp = () => navigation.navigate('SignUp');

  return (
    <View style={styles.container}>
      <Text>Sign in</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        style={styles.input}
        autoCapitalize="none"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        style={styles.input}
        autoCapitalize="none"
      />
      <TouchableOpacity onPress={onSubmit}>
        <Text style={styles.button}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onSignUp}>
        <Text style={styles.button}>Sign up</Text>
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
  input: {
    borderWidth: 1,
    width: '70%',
    padding: 12,
  },
  button: {
    textTransform: 'uppercase',
    fontWeight: '600',
    fontSize: 16,
  },
});
