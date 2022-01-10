import React from 'react';

import { useQuery } from '@apollo/client';
import { getBooksQuery } from '../queries/queries';

const BookList = () => {
  const { loading, data } = useQuery(getBooksQuery);

  const displayBooks = () => {
    if (loading) {
      return <div>Loading books...</div>;
    } else if (data) {
      return data?.books.map((book) => <li key={book.id}>{book.name}</li>);
    }
  };

  return (
    <div>
      <ul id="book-list">{displayBooks()}</ul>
    </div>
  );
};

export default BookList;
