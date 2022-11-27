import {gql} from '@apollo/client';

export const TodoItemFragment = gql`
  fragment TodoItem on Todo {
    __typename
    id
    name
    createdAt
    updatedAt
    owner
    user {
      email
      id
      phoneNumber
      username
    }
  }
`;
