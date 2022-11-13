import {gql} from '@apollo/client';

export const UserDataFragment = gql`
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
