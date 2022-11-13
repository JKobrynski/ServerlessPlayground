import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AWSDateTime: any;
};

export type CreateTodoInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
};

export type CreateUserInput = {
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']>;
  username?: InputMaybe<Scalars['String']>;
};

export type DeleteTodoInput = {
  id: Scalars['ID'];
};

export type DeleteUserInput = {
  id: Scalars['ID'];
};

export enum ModelAttributeTypes {
  Null = '_null',
  Binary = 'binary',
  BinarySet = 'binarySet',
  Bool = 'bool',
  List = 'list',
  Map = 'map',
  Number = 'number',
  NumberSet = 'numberSet',
  String = 'string',
  StringSet = 'stringSet'
}

export type ModelBooleanInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
};

export type ModelFloatInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  eq?: InputMaybe<Scalars['Float']>;
  ge?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  le?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
};

export type ModelIdInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  beginsWith?: InputMaybe<Scalars['ID']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  ge?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  le?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  notContains?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<ModelSizeInput>;
};

export type ModelIntInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
};

export type ModelSizeInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
};

export enum ModelSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type ModelStringInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  beginsWith?: InputMaybe<Scalars['String']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  ge?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  le?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  notContains?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<ModelSizeInput>;
};

export type ModelSubscriptionBooleanInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
};

export type ModelSubscriptionFloatInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  eq?: InputMaybe<Scalars['Float']>;
  ge?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  le?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type ModelSubscriptionIdInput = {
  beginsWith?: InputMaybe<Scalars['ID']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  ge?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  le?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  notContains?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ModelSubscriptionIntInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type ModelSubscriptionStringInput = {
  beginsWith?: InputMaybe<Scalars['String']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  ge?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  le?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  notContains?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ModelSubscriptionTodoFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionTodoFilterInput>>>;
  description?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  name?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionTodoFilterInput>>>;
};

export type ModelSubscriptionUserFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionUserFilterInput>>>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  email?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionUserFilterInput>>>;
  phoneNumber?: InputMaybe<ModelSubscriptionStringInput>;
  updatedAt?: InputMaybe<ModelSubscriptionStringInput>;
  username?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelTodoConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelTodoConditionInput>>>;
  description?: InputMaybe<ModelStringInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelTodoConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelTodoConditionInput>>>;
};

export type ModelTodoConnection = {
  __typename?: 'ModelTodoConnection';
  items: Array<Maybe<Todo>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelTodoFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelTodoFilterInput>>>;
  description?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelTodoFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelTodoFilterInput>>>;
};

export type ModelUserConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelUserConditionInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  email?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelUserConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelUserConditionInput>>>;
  phoneNumber?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  username?: InputMaybe<ModelStringInput>;
};

export type ModelUserConnection = {
  __typename?: 'ModelUserConnection';
  items: Array<Maybe<User>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelUserFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelUserFilterInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  email?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelUserFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelUserFilterInput>>>;
  phoneNumber?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  username?: InputMaybe<ModelStringInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addTodoLambda?: Maybe<Scalars['String']>;
  createTodo?: Maybe<Todo>;
  createUser?: Maybe<User>;
  deleteTodo?: Maybe<Todo>;
  deleteUser?: Maybe<User>;
  updateTodo?: Maybe<Todo>;
  updateUser?: Maybe<User>;
};


export type MutationAddTodoLambdaArgs = {
  geohashes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreateTodoArgs = {
  condition?: InputMaybe<ModelTodoConditionInput>;
  input: CreateTodoInput;
};


export type MutationCreateUserArgs = {
  condition?: InputMaybe<ModelUserConditionInput>;
  input: CreateUserInput;
};


export type MutationDeleteTodoArgs = {
  condition?: InputMaybe<ModelTodoConditionInput>;
  input: DeleteTodoInput;
};


export type MutationDeleteUserArgs = {
  condition?: InputMaybe<ModelUserConditionInput>;
  input: DeleteUserInput;
};


export type MutationUpdateTodoArgs = {
  condition?: InputMaybe<ModelTodoConditionInput>;
  input: UpdateTodoInput;
};


export type MutationUpdateUserArgs = {
  condition?: InputMaybe<ModelUserConditionInput>;
  input: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  getTodo?: Maybe<Todo>;
  getUser?: Maybe<User>;
  listTodos?: Maybe<ModelTodoConnection>;
  listUsers?: Maybe<ModelUserConnection>;
  testLambda?: Maybe<Scalars['String']>;
};


export type QueryGetTodoArgs = {
  id: Scalars['ID'];
};


export type QueryGetUserArgs = {
  id: Scalars['ID'];
};


export type QueryListTodosArgs = {
  filter?: InputMaybe<ModelTodoFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QueryListUsersArgs = {
  filter?: InputMaybe<ModelUserFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QueryTestLambdaArgs = {
  message?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  onCreateTodo?: Maybe<Todo>;
  onCreateUser?: Maybe<User>;
  onDeleteTodo?: Maybe<Todo>;
  onDeleteUser?: Maybe<User>;
  onUpdateTodo?: Maybe<Todo>;
  onUpdateUser?: Maybe<User>;
};


export type SubscriptionOnCreateTodoArgs = {
  filter?: InputMaybe<ModelSubscriptionTodoFilterInput>;
};


export type SubscriptionOnCreateUserArgs = {
  filter?: InputMaybe<ModelSubscriptionUserFilterInput>;
};


export type SubscriptionOnDeleteTodoArgs = {
  filter?: InputMaybe<ModelSubscriptionTodoFilterInput>;
};


export type SubscriptionOnDeleteUserArgs = {
  filter?: InputMaybe<ModelSubscriptionUserFilterInput>;
};


export type SubscriptionOnUpdateTodoArgs = {
  filter?: InputMaybe<ModelSubscriptionTodoFilterInput>;
};


export type SubscriptionOnUpdateUserArgs = {
  filter?: InputMaybe<ModelSubscriptionUserFilterInput>;
};

export type Todo = {
  __typename?: 'Todo';
  createdAt: Scalars['AWSDateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['AWSDateTime'];
};

export type UpdateTodoInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInput = {
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  email?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']>;
  username?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['AWSDateTime']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  phoneNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
  username?: Maybe<Scalars['String']>;
};

export type TodoItemFragment = { __typename: 'Todo', id: string, name: string, description?: string | null, createdAt: any, updatedAt: any };

export type UserDataFragment = { __typename: 'User', createdAt?: any | null, email?: string | null, id: string, phoneNumber?: string | null, updatedAt?: any | null, username?: string | null };

export type AddTodoLambdaMutationVariables = Exact<{
  geohashes?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type AddTodoLambdaMutation = { __typename?: 'Mutation', addTodoLambda?: string | null };

export type CreateTodoMutationVariables = Exact<{
  input: CreateTodoInput;
  condition?: InputMaybe<ModelTodoConditionInput>;
}>;


export type CreateTodoMutation = { __typename?: 'Mutation', createTodo?: { __typename?: 'Todo', id: string, name: string, description?: string | null, createdAt: any, updatedAt: any } | null };

export type DeleteTodoMutationVariables = Exact<{
  input: DeleteTodoInput;
  condition?: InputMaybe<ModelTodoConditionInput>;
}>;


export type DeleteTodoMutation = { __typename?: 'Mutation', deleteTodo?: { __typename?: 'Todo', id: string, name: string, description?: string | null, createdAt: any, updatedAt: any } | null };

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
  condition?: InputMaybe<ModelUserConditionInput>;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename: 'User', createdAt?: any | null, email?: string | null, id: string, phoneNumber?: string | null, updatedAt?: any | null, username?: string | null } | null };

export type TestLambdaQueryVariables = Exact<{
  message?: InputMaybe<Scalars['String']>;
}>;


export type TestLambdaQuery = { __typename?: 'Query', testLambda?: string | null };

export type ListTodosQueryVariables = Exact<{
  filter?: InputMaybe<ModelTodoFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
}>;


export type ListTodosQuery = { __typename?: 'Query', listTodos?: { __typename?: 'ModelTodoConnection', nextToken?: string | null, items: Array<{ __typename: 'Todo', id: string, name: string, description?: string | null, createdAt: any, updatedAt: any } | null> } | null };

export type GetUserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetUserQuery = { __typename?: 'Query', getUser?: { __typename: 'User', createdAt?: any | null, email?: string | null, id: string, phoneNumber?: string | null, updatedAt?: any | null, username?: string | null } | null };

export const TodoItemFragmentDoc = gql`
    fragment TodoItem on Todo {
  __typename
  id
  name
  description
  createdAt
  updatedAt
}
    `;
export const UserDataFragmentDoc = gql`
    fragment UserData on User {
  __typename
  createdAt
  email
  id
  phoneNumber
  updatedAt
  username
}
    `;
export const AddTodoLambdaDocument = gql`
    mutation AddTodoLambda($geohashes: [String]) {
  addTodoLambda(geohashes: $geohashes)
}
    `;
export type AddTodoLambdaMutationFn = Apollo.MutationFunction<AddTodoLambdaMutation, AddTodoLambdaMutationVariables>;

/**
 * __useAddTodoLambdaMutation__
 *
 * To run a mutation, you first call `useAddTodoLambdaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTodoLambdaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTodoLambdaMutation, { data, loading, error }] = useAddTodoLambdaMutation({
 *   variables: {
 *      geohashes: // value for 'geohashes'
 *   },
 * });
 */
export function useAddTodoLambdaMutation(baseOptions?: Apollo.MutationHookOptions<AddTodoLambdaMutation, AddTodoLambdaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddTodoLambdaMutation, AddTodoLambdaMutationVariables>(AddTodoLambdaDocument, options);
      }
export type AddTodoLambdaMutationHookResult = ReturnType<typeof useAddTodoLambdaMutation>;
export type AddTodoLambdaMutationResult = Apollo.MutationResult<AddTodoLambdaMutation>;
export type AddTodoLambdaMutationOptions = Apollo.BaseMutationOptions<AddTodoLambdaMutation, AddTodoLambdaMutationVariables>;
export const CreateTodoDocument = gql`
    mutation CreateTodo($input: CreateTodoInput!, $condition: ModelTodoConditionInput) {
  createTodo(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
  }
}
    `;
export type CreateTodoMutationFn = Apollo.MutationFunction<CreateTodoMutation, CreateTodoMutationVariables>;

/**
 * __useCreateTodoMutation__
 *
 * To run a mutation, you first call `useCreateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoMutation, { data, loading, error }] = useCreateTodoMutation({
 *   variables: {
 *      input: // value for 'input'
 *      condition: // value for 'condition'
 *   },
 * });
 */
export function useCreateTodoMutation(baseOptions?: Apollo.MutationHookOptions<CreateTodoMutation, CreateTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTodoMutation, CreateTodoMutationVariables>(CreateTodoDocument, options);
      }
export type CreateTodoMutationHookResult = ReturnType<typeof useCreateTodoMutation>;
export type CreateTodoMutationResult = Apollo.MutationResult<CreateTodoMutation>;
export type CreateTodoMutationOptions = Apollo.BaseMutationOptions<CreateTodoMutation, CreateTodoMutationVariables>;
export const DeleteTodoDocument = gql`
    mutation DeleteTodo($input: DeleteTodoInput!, $condition: ModelTodoConditionInput) {
  deleteTodo(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
  }
}
    `;
export type DeleteTodoMutationFn = Apollo.MutationFunction<DeleteTodoMutation, DeleteTodoMutationVariables>;

/**
 * __useDeleteTodoMutation__
 *
 * To run a mutation, you first call `useDeleteTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoMutation, { data, loading, error }] = useDeleteTodoMutation({
 *   variables: {
 *      input: // value for 'input'
 *      condition: // value for 'condition'
 *   },
 * });
 */
export function useDeleteTodoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTodoMutation, DeleteTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(DeleteTodoDocument, options);
      }
export type DeleteTodoMutationHookResult = ReturnType<typeof useDeleteTodoMutation>;
export type DeleteTodoMutationResult = Apollo.MutationResult<DeleteTodoMutation>;
export type DeleteTodoMutationOptions = Apollo.BaseMutationOptions<DeleteTodoMutation, DeleteTodoMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
  createUser(input: $input, condition: $condition) {
    ...UserData
  }
}
    ${UserDataFragmentDoc}`;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *      condition: // value for 'condition'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const TestLambdaDocument = gql`
    query TestLambda($message: String) {
  testLambda(message: $message)
}
    `;

/**
 * __useTestLambdaQuery__
 *
 * To run a query within a React component, call `useTestLambdaQuery` and pass it any options that fit your needs.
 * When your component renders, `useTestLambdaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTestLambdaQuery({
 *   variables: {
 *      message: // value for 'message'
 *   },
 * });
 */
export function useTestLambdaQuery(baseOptions?: Apollo.QueryHookOptions<TestLambdaQuery, TestLambdaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TestLambdaQuery, TestLambdaQueryVariables>(TestLambdaDocument, options);
      }
export function useTestLambdaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TestLambdaQuery, TestLambdaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TestLambdaQuery, TestLambdaQueryVariables>(TestLambdaDocument, options);
        }
export type TestLambdaQueryHookResult = ReturnType<typeof useTestLambdaQuery>;
export type TestLambdaLazyQueryHookResult = ReturnType<typeof useTestLambdaLazyQuery>;
export type TestLambdaQueryResult = Apollo.QueryResult<TestLambdaQuery, TestLambdaQueryVariables>;
export const ListTodosDocument = gql`
    query ListTodos($filter: ModelTodoFilterInput, $limit: Int, $nextToken: String) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      ...TodoItem
    }
    nextToken
  }
}
    ${TodoItemFragmentDoc}`;

/**
 * __useListTodosQuery__
 *
 * To run a query within a React component, call `useListTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useListTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListTodosQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *      nextToken: // value for 'nextToken'
 *   },
 * });
 */
export function useListTodosQuery(baseOptions?: Apollo.QueryHookOptions<ListTodosQuery, ListTodosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListTodosQuery, ListTodosQueryVariables>(ListTodosDocument, options);
      }
export function useListTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListTodosQuery, ListTodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListTodosQuery, ListTodosQueryVariables>(ListTodosDocument, options);
        }
export type ListTodosQueryHookResult = ReturnType<typeof useListTodosQuery>;
export type ListTodosLazyQueryHookResult = ReturnType<typeof useListTodosLazyQuery>;
export type ListTodosQueryResult = Apollo.QueryResult<ListTodosQuery, ListTodosQueryVariables>;
export const GetUserDocument = gql`
    query GetUser($id: ID!) {
  getUser(id: $id) {
    ...UserData
  }
}
    ${UserDataFragmentDoc}`;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    