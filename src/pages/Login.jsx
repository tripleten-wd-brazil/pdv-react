import { useHistory } from "react-router-dom";
import UserApi from "../api/UserApi";

function Login() {
  const userApi = new UserApi();
  const history = useHistory();
  const handleLogin = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = Object.fromEntries(formData);
    userApi.login(userData).then(response => {
      localStorage.setItem("token", response.token);
      history.replace("/");
    })
  }

  return <div className="container">Login
    <form onSubmit={handleLogin}>
      <input name="email" placeholder="Email" />
      <input name="password" placeholder="Password" type="password" />
      <button type="submit">Logar</button>
    </form>
  </div>
}

export default Login;
