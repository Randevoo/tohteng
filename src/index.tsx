import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { Router, Switch, Route } from "react-router";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const graphqlClient = new ApolloClient({
  uri: "https://angjigao.herokuapp.com/"
});

// Wraps the gql client on top of our app.
const app = (
  <ApolloProvider client={graphqlClient}>
    <Router>
      <Switch>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  </ApolloProvider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
