import React, { useEffect, useState } from "react";

import { useQuery, useMutation } from "@apollo/client";
import { addBookMutation, getAuthorsQuery, getBooksQuery } from "../queries/queries";

export const AddBook = () => {
  const [bookInfo, setBookInfo] = useState({
    name: "",
    genre: "",
    authorId: "",
  });

  const { loading, data, error } = useQuery(getAuthorsQuery);
  const [addBook, { loading: mutationLoading }] = useMutation(addBookMutation);

  const onChange = (e) => {
    const { name, value } = e.target;
    setBookInfo({
      ...bookInfo,
      [name]: value,
    });
  };

  const displayAuthors = () => {
    if (loading) {
      return <option disabled>Loading Authors...</option>;
    } else if (!error) {
      return data?.authors.map((author) => (
        <option key={author.id} value={author.id}>
          {author.name}
        </option>
      ));
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    const { name, genre, authorId } = bookInfo;
    addBook({ variables: { name, genre, authorId }, refetchQueries: [{ query: getBooksQuery }] });
  };

  return (
    <form id="add-book" onSubmit={submitForm}>
      <div className="field">
        <label htmlFor="name">Book name:</label>
        <input onChange={onChange} type="text" name="name" />
      </div>

      <div className="field">
        <label htmlFor="genre">Genre:</label>
        <input onChange={onChange} type="text" name="genre" />
      </div>

      <div className="field">
        <label htmlFor="author">Author</label>
        <select onChange={onChange} name="authorId" id="author">
          <option>Select author</option>
          {displayAuthors()}
        </select>
      </div>
      {mutationLoading === true && <div>Adding book...</div>}
      <button>+</button>
    </form>
  );
};
