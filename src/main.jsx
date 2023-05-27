import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { UserProvider } from "./hooks/useUser";
import App from "./pages/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
