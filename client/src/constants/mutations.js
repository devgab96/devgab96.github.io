import gql from 'graphql-tag';

const LOGIN_MUTATION = gql`
  mutation LoginMutation(
    $username: String!
    $password: String!
  ) {
    login(
      username: $username,
      password: $password
    ) {
      token
      user {
        id
        username
        email
        password
        firstName
        middleName
        lastName
        graduatedFrom
        birthday
        address
        phoneNumber
        company
        referredBy
        rank {
          id
          name
        }
      }
    }
  }
`

const REGISTER_MUTATION = gql`
  mutation RegisterMutation(
    $username: String!
    $email: String!
    $password: String!
    $firstName: String!
    $middleName: String!
    $lastName: String!
    $rank: Int!
    $graduatedFrom: String!
    $birthday: String!
    $address: String!
    $phoneNumber: String!
    $company: String
    $referredBy: String
  ) {
    signup(
      username: $username,
      email: $email,
      password: $password,
      firstName: $firstName,
      middleName: $middleName,
      lastName: $lastName,
      rank: $rank
      graduatedFrom: $graduatedFrom,
      birthday: $birthday,
      address: $address,
      phoneNumber: $phoneNumber,
      company: $company,
      referredBy: $referredBy,
    ) {
      token
      user {
        id
        username
        email
        password
        firstName
        middleName
        lastName
        graduatedFrom
        birthday
        address
        phoneNumber
        company
        referredBy
        rank {
          id
          name
        }
      }
    }
  }
`

export { LOGIN_MUTATION, REGISTER_MUTATION };
