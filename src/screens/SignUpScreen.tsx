import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Auth} from 'aws-amplify';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParams} from '../navigation/AmplifyStack/AuthStack';
import {useCreateUserMutation} from '../apollo/artifacts/resolvers-types';

type SignUpScreenProps = NativeStackScreenProps<AuthStackParams, 'SignUp'>;

export const SignUpScreen: React.FC<SignUpScreenProps> = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [code, setCode] = React.useState('');

  const [createUser] = useCreateUserMutation({
    onCompleted: data => console.log('[useCreateUserMutation] data', data),
    onError: error => console.log('[useCreateUserMutation] error', error),
  });

  const onSubmit = async () => {
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          email,
          phone_number: phoneNumber,
        },
        autoSignIn: {
          enabled: true,
        },
      });
    } catch (err) {
      console.log('[signUp] ERROR', err);
    }
  };

  const onSubmitCode = async () => {
    try {
      await Auth.confirmSignUp(username, code);
      const signInRes = await Auth.signIn(phoneNumber, password);
      console.log('ATTRIBUTES', signInRes.attributes);

      await createUser({
        variables: {
          input: {
            email: signInRes.attributes.email,
            phoneNumber: signInRes.attributes.phone_number,
            id: signInRes.attributes.sub,
          },
        },
      });
    } catch (err) {
      console.log('CODE ERROR', err);
    }
  };

  return (
    <View style={styles.container}>
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
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder="Phone number"
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
      <TextInput
        value={code}
        onChangeText={setCode}
        placeholder="Code"
        style={styles.input}
        autoCapitalize="none"
      />
      <TouchableOpacity onPress={onSubmitCode}>
        <Text style={styles.button}>Submit code</Text>
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
