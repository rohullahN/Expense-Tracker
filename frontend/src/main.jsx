import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { UpdateTransactionProvider } from "./contexts/UpdateTransactionContext.jsx";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
  credentials: "include",
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <UpdateTransactionProvider value={{}}>
          <App />
        </UpdateTransactionProvider>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);
