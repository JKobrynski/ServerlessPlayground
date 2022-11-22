import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const SignUpScreen = () => {
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');

  const onSubmit = async () => {
    try {
      const res = await auth().createUserWithEmailAndPassword(email, password);
      console.log('NEW USER ID', res.user.uid);
      const newUser = await firestore().collection('users').add({
        id: res.user.uid,
        email,
        username,
      });

      console.log('NEW USER', newUser);
    } catch (err) {
      console.log('[onSubmit] error', err);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Sign up</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
        style={styles.input}
        autoCapitalize="none"
      />
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
