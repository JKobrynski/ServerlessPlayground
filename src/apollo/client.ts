import {awsmobile} from '../aws.config';
import {createAuthLink, AUTH_TYPE} from 'aws-appsync-auth-link';
import {Auth} from 'aws-amplify';
import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  DefaultOptions,
  InMemoryCache,
} from '@apollo/client';
import {createSubscriptionHandshakeLink} from 'aws-appsync-subscription-link';

const url = awsmobile.aws_appsync_graphqlEndpoint;
const region = awsmobile.aws_appsync_region;

const httpLink = createHttpLink({uri: url});

const publicAuth = {
  type: AUTH_TYPE.AWS_IAM as const,
  credentials: () => Auth.currentCredentials(),
};

const privateAuth = {
  type: awsmobile.aws_appsync_authenticationType,
  jwtToken: async () =>
    (await Auth.currentSession()).getIdToken().getJwtToken(),
};

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};

const client = new ApolloClient({
  link: ApolloLink.from([
    createAuthLink({url, region, auth: privateAuth}),
    createSubscriptionHandshakeLink({url, region, auth: privateAuth}, httpLink),
  ]),
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
});
const publicClient = new ApolloClient({
  link: ApolloLink.from([
    createAuthLink({url, region, auth: publicAuth}),
    createSubscriptionHandshakeLink({url, region, auth: publicAuth}, httpLink),
  ]),
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
});

export {client, publicClient};
