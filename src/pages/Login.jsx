import AuthApi from "../api/AuthApi";
import Input from "../components/Input/Input";
import { useState } from "react";
import { useUser } from "../hooks/useUser";
import { useNavigate } from "react-router-dom";
const authApi = new AuthApi();

function Login() {
  const [error, setError] = useState(null);
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const userData = Object.fromEntries(new FormData(e.target));
    authApi
      .login(userData)
      .then(({ token, email }) => {
        setError(null);
        setUser({ email, token });
        localStorage.setItem("token", token);
        navigate("/");
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <main className="container">
      {error && <p className="error">{error.message || ""}</p>}
      <form className="login-form" onSubmit={handleLogin}>
        <Input name="email" label="Email" />
        <Input name="password" label="Password" type="password" />
        <div>
          <button type="submit" className="button">
            Login
          </button>
        </div>
      </form>
    </main>
  );
}

export default Login;
