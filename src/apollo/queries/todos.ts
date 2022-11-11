import {gql} from '@apollo/client';
import {TodoItemFragment} from '../fragments';

export const listTodos = gql`
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        ...TodoItem
      }
      nextToken
    }
  }
  ${TodoItemFragment}
`;
