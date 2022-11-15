/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import awsconfig from './src/aws-exports';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import {Auth, Hub} from 'aws-amplify';
import {AuthStack, MainStack} from './src/navigation';

const client = new ApolloClient({
  uri: awsconfig.aws_appsync_graphqlEndpoint,
  cache: new InMemoryCache(),
  headers: {
    'x-api-key': awsconfig.aws_appsync_apiKey,
  },
});

const App = () => {
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

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        {isAuthenticated ? <MainStack /> : <AuthStack />}
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
