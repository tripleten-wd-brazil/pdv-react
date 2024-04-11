import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "./App";
import Register from "./components/Register";
import Login from "./components/Login";

export default function Auth() {
  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="*">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}
