import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { Router, Switch, Route } from "react-router";
import { createBrowserHistory } from "history";
import Trip from "./Trip";
import Menu from "./Menu";
import * as serviceWorker from "./serviceWorker";
import Search from "./Search";
import TripsTable from "./Trips/TripTable/components/TripTable";

const graphqlClient = new ApolloClient({
  uri: "https://angjigao.herokuapp.com/"
});

// Wraps the gql client on top of our app.
const app = (
  <ApolloProvider client={graphqlClient}>
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route path="/">
          <TripsTable />
        </Route>
        <Route path="/search">
          <Search />
          <Menu />
        </Route>
        <Route path="/trip">
          <Trip />
        </Route>
      </Switch>
      <Menu />
    </Router>
  </ApolloProvider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
