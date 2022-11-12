import {gql} from '@apollo/client';

export const testLambda = gql`
  query TestLambda($message: String) {
    testLambda(message: $message)
  }
`;
