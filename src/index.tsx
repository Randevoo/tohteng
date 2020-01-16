import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { Router, Switch, Route } from "react-router";
import { createBrowserHistory } from "history";
import Trip from "./Trip";
import Menu from "./Menu";
import TripsCard from "./Trips/TripsCard";
import * as serviceWorker from "./serviceWorker";
import Search from "./Search";
import TripsTable from "./Trips";

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
          <TripsCard
            title={"2D1N Japan Kyoto Shrine Hopping + Spa"}
            type={"Public Tour"}
            cost={"210"}
            img={
              "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            }
            reviewNo={328}
          />
          <TripsCard
            title={"3D2N Kyoto Temple + Shopping"}
            type={"Private Tour"}
            cost={"420"}
            img={
              "https://amp.businessinsider.com/images/559c2c45ecad04df54fc8f8c-750-562.jpg"
            }
            reviewNo={116}
          />
          <TripsCard
            title={"Day Tour of Kyoto Fushimi Inari Shrine"}
            type={"Single Tour"}
            cost={"160"}
            img={
              "https://www.planetware.com/photos-large/JPN/japan-kyoto-fushimi-inari-taisha-shrine.jpg"
            }
            reviewNo={279}
          />
          <Menu />
        </Route>
        <Route path="/search">
          <Search />
          <Menu />
        </Route>
        <Route path="/trip">
          <Trip />
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
