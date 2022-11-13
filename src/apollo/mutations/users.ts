import {gql} from '@apollo/client';
import {UserDataFragment} from '../fragments';

export const createUser = gql`
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      ...UserData
    }
  }
  ${UserDataFragment}
`;
