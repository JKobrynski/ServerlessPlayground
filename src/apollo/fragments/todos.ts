import {gql} from '@apollo/client';

export const TodoItemFragment = gql`
  fragment TodoItem on Todo {
    __typename
    id
    name
    description
    createdAt
    updatedAt
  }
`;
