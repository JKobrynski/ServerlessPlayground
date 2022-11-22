import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';

export const HomeScreen = () => {
  const onLogout = async () => {
    try {
      await auth().signOut();
    } catch (err) {
      console.log('[onLogout] err', err);
    }
  };

  const onDeleteUser = async () => {
    try {
      await auth().currentUser?.delete();
    } catch (err) {
      console.log('[onDeleteUser] err', err);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity onPress={onLogout}>
          <Text style={styles.logout}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDeleteUser}>
          <Text style={styles.logout}>Delete account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    ...StyleSheet.absoluteFillObject,
  },
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-evenly',
    paddingVertical: 6,
  },
  column: {
    flexDirection: 'column',
  },
  x: {
    color: 'red',
    fontWeight: '800',
    fontSize: 14,
  },
  logout: {
    textTransform: 'uppercase',
    fontWeight: '600',
    fontSize: 16,
    color: 'red',
  },
});
