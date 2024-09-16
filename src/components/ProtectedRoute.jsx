import { Redirect } from "react-router-dom";

export default function ProtectedRoute({ children, isLogged }) {
  if (!isLogged) {
    return <Redirect to="/signin" />;
  }

  return children;
}
