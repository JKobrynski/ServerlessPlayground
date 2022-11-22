import {Auth, Hub} from 'aws-amplify';
import React from 'react';
import {AuthStack} from './AuthStack';
import {MainStack} from './MainStack';

export const AmplifyStack = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const checkAuthenticatedUser = async () => {
    try {
      const res = await Auth.currentAuthenticatedUser();
      if (res.username) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (err) {
      console.log('[currentAuthenticatedUser] ERR', err);
    }
  };

  React.useEffect(() => {
    checkAuthenticatedUser();

    const removeHubListener = Hub.listen('auth', ({payload}) => {
      const {event} = payload;

      if (['autoSignIn', 'signIn'].includes(event)) {
        setIsAuthenticated(true);
      } else if (['signOut', 'userDeleted'].includes(event)) {
        setIsAuthenticated(false);
      } else {
        console.log('EVENT', event);
      }
    });

    return () => {
      removeHubListener();
    };
  }, []);

  return isAuthenticated ? <MainStack /> : <AuthStack />;
};
