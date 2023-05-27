import { Navigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

export default function ProtectedRoute({ children }) {
  const { isLogged } = useUser();

  if (!isLogged) {
    localStorage.removeItem("token");
    return <Navigate to="/login" />;
  }

  return children;
}
