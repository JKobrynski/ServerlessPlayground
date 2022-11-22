import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';

export const SignUpScreen = () => {
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');

  const onSubmit = async () => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
    } catch (err) {
      console.log('[onSubmit] error', err);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Sign up</Text>
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
