import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./pages/index.css";
import App from "./components/App";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import auth from "./utils/Auth";

const root = ReactDOM.createRoot(document.getElementById("root"));
// JSX
root.render(
  <React.StrictMode>
    <Pages />
  </React.StrictMode>,
);

function Pages() {
  // const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem("token");
  const [isLogged, setIsLogged] = useState(!!token);
  // console.log("Pages", isLoading);

  useEffect(() => {
    auth
      .me(token)
      .then(() => setIsLogged(true))
      .catch(() => setIsLogged(false));
    // .finally(() => setIsLoading(false));
  }, []);

  // if (isLoading) return <div>"Loading..."</div>;

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
          <Route path="/">
            <ProtectedRoute isLogged={isLogged}>
              <App />
            </ProtectedRoute>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
