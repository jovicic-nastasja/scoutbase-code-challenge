import React from "react";
import ReactDOM from "react-dom";
import "./countries-styles.css";
import App from "./App";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import styled from "styled-components";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com"
});

const AppStyle = styled.div`
  font-family: sans-serif;
  text-align: center;
  max-width: 1100px;
  margin: 0 auto;
  min-height: 100vn;
`;

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Header />
      <AppStyle>
        <App />
      </AppStyle>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);
