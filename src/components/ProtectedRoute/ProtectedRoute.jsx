import { Redirect } from "react-router-dom";
import UserApi from "../../api/UserApi";
import { useEffect, useState } from "react";

export default function ProtectedRoute({ children }) {
  const userApi = new UserApi();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    userApi.checkLogin().catch(() =>
      setError(true)
    ).finally(() => setLoading(false));
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <Redirect to="/signin" push={false} />
  }

  return children;
}
