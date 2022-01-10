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

const addBookMutation = gql`
  mutation AddBooks($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

const getBookQuery = gql`
  query ($id: ID!) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;

export { addBookMutation, getAuthorsQuery, getBookQuery, getBooksQuery };