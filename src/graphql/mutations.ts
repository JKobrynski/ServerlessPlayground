/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const addTodoLambda = /* GraphQL */ `
  mutation AddTodoLambda($geohashes: [String]) {
    addTodoLambda(geohashes: $geohashes)
  }
`;
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      owner
      user {
        createdAt
        email
        id
        phoneNumber
        updatedAt
        username
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      owner
      user {
        createdAt
        email
        id
        phoneNumber
        updatedAt
        username
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      owner
      user {
        createdAt
        email
        id
        phoneNumber
        updatedAt
        username
      }
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      createdAt
      email
      id
      phoneNumber
      updatedAt
      username
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      createdAt
      email
      id
      phoneNumber
      updatedAt
      username
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      createdAt
      email
      id
      phoneNumber
      updatedAt
      username
    }
  }
`;
