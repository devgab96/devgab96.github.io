import gql from 'graphql-tag';

const HELLO_QUERY = gql`{ hello }`;

const RANKS_QUERY = gql`
  query {
    ranks {
      id
      name
    }
  }
`

export { HELLO_QUERY, RANKS_QUERY };
