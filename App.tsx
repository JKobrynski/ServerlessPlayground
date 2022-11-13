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
import {
  HomeScreen,
  LandingScreen,
  SignInScreen,
  SignUpScreen,
} from './src/screens';
import awsconfig from './src/aws-exports';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
  uri: awsconfig.aws_appsync_graphqlEndpoint,
  cache: new InMemoryCache(),
  headers: {
    'x-api-key': awsconfig.aws_appsync_apiKey,
  },
});

export type ActiveScreen = 'Landing' | 'SignUp' | 'SignIn' | 'Home';

const App = () => {
  const [activeScreen, setActiveScreen] =
    React.useState<ActiveScreen>('Landing');

  const renderActiveScreen = () => {
    switch (activeScreen) {
      case 'Landing':
        return <LandingScreen setActiveScreen={setActiveScreen} />;
      case 'SignUp':
        return <SignUpScreen setActiveScreen={setActiveScreen} />;
      case 'SignIn':
        return <SignInScreen setActiveScreen={setActiveScreen} />;
      case 'Home':
        return <HomeScreen setActiveScreen={setActiveScreen} />;
    }
  };

  return (
    <ApolloProvider client={client}>{renderActiveScreen()}</ApolloProvider>
  );
};

export default App;
