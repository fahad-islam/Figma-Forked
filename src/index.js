import React from "react";
import { render } from "react-dom";
import Main from "./Main";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "tachyons";

const client = new ApolloClient({
  uri: "https://figma-graphql-kugtwjokig.now.sh/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <Main />
  </ApolloProvider>
);

render(<App />, document.getElementById("root"));
