import {gql} from '@apollo/client';
import {UserDataFragment} from '../fragments';

export const getUser = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      ...UserData
    }
  }
  ${UserDataFragment}
`;
