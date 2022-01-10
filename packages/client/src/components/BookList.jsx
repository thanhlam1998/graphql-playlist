import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";

const BookList = () => {
  const [selected, setSelected] = useState(null);
  const { loading, data } = useQuery(getBooksQuery);

  const displayBooks = () => {
    if (loading) {
      return <div>Loading books...</div>;
    } else if (data) {
      return data?.books.map((book) => (
        <li onClick={() => setSelected(book.id)} key={book.id}>
          {book.name}
        </li>
      ));
    }
  };

  return (
    <div>
      <ul id="book-list">{displayBooks()}</ul>
      <BookDetails bookId={selected} />
    </div>
  );
};

export default BookList;
