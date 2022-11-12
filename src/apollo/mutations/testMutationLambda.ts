import {gql} from '@apollo/client';

export const testMutationLambda = gql`
  mutation TestMutationLambda($geohashes: [String]) {
    testMutationLambda(geohashes: $geohashes)
  }
`;
