import React from "react";
import ReactDOM from "react-dom/client";
import "./pages/index.css";
import Auth from "./Auth";

const root = ReactDOM.createRoot(document.getElementById("root"));
// JSX
root.render(
  <React.StrictMode>
    <Auth />
  </React.StrictMode>,
);
