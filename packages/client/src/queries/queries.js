import { gql } from '@apollo/client';

const getBooksQuery = gql`
  query GetBooks {
    books {
      name
      id
    }
  }
`;

const getAuthorsQuery = gql`
  query GetAuthors {
    authors {
      name
      id
    }
  }
`;
export { getAuthorsQuery, getBooksQuery };