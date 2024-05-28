import React from "react";
import ReactDOM from "react-dom/client";
import "./pages/index.css";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
// JSX
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
