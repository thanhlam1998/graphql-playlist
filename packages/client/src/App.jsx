import BookList from "./components/BookList";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import "./App.css";
import { AddBook } from "./components/AddBook";

// apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <main id="main">
        <h1>Graphql reading list</h1>
        <BookList />
        <AddBook />
      </main>
    </ApolloProvider>
  );
}

export default App;
