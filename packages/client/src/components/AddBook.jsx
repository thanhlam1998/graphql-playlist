import React, { useState } from "react";

import { useQuery } from "@apollo/client";
import { getAuthorsQuery } from "../queries/queries";

export const AddBook = () => {
  const [bookInfo, setBookInfo] = useState({
    name: "",
    genre: "",
    authorId: "",
  });

  const { loading, data, error } = useQuery(getAuthorsQuery);

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
    console.log(bookInfo);
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

      <button>+</button>
    </form>
  );
};
