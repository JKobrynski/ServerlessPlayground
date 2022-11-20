import {gql} from '@apollo/client';
import {UserDataFragment} from './users';

export const TodoItemFragment = gql`
  fragment TodoItem on Todo {
    __typename
    id
    name
    description
    createdAt
    updatedAt
    owner
    user {
      ...UserData
    }
  }
  ${UserDataFragment}
`;
