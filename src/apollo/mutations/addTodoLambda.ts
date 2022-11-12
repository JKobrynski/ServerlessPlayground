import {gql} from '@apollo/client';

export const addTodoLambda = gql`
  mutation AddTodoLambda($geohashes: [String]) {
    addTodoLambda(geohashes: $geohashes)
  }
`;
