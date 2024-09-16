import Input from "./Input";
import auth from "../utils/Auth";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    auth
      .signin(data)
      .then((res) => {
        localStorage.setItem("token", res.token);
        history.replace("/");
      })
      .catch((err) => {
        console.error(err);
        localStorage.removeItem("token");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form_login">
        <h2>Sign in</h2>
        <Input type="email" name="email" placeholder="Email" />
        <Input type="password" name="password" placeholder="Password" />
        <button className="button" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
}
