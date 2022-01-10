import React, { useCallback } from "react";
import { useQuery } from "@apollo/client";
import { getBookQuery } from "../queries/queries";

const BookDetails = ({ bookId }) => {
  const { data } = useQuery(getBookQuery, {
    skip: !bookId,
    variables: { id: bookId },
  });

  const displayBookDetails = useCallback(() => {
    const book = data?.book;
    if (book) {
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All books by this author</p>
          <ul className="other-books">
            {book?.author?.books.map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return <div>No books selected...</div>;
    }
  }, [data]);

  return (
    <div>
      <div id="book-details">{displayBookDetails()}</div>
    </div>
  );
};

export default BookDetails;
