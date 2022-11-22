import React from 'react';
import auth from '@react-native-firebase/auth';
import {ActivityIndicator} from 'react-native';
import {AuthStack} from './AuthStack';
import {MainStack} from './MainStack';

export const FirebaseStack = () => {
  const [initializing, setInitializing] = React.useState(true);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  function onAuthStateChanged(user: any) {
    if (user) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    if (initializing) {
      setInitializing(false);
    }
  }

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (initializing) {
    return <ActivityIndicator />;
  }

  return isAuthenticated ? <MainStack /> : <AuthStack />;
};
