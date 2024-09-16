import Input from "../components/Input";
import auth from "../utils/Auth";
import { useHistory } from "react-router-dom";

export default function Register() {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.name = "Thiago Puntar";
    data.job = "Tutor";

    auth
      .signup(data)
      .then(() => {
        history.replace("/signin");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form_login">
        <h2>Sign up</h2>
        <Input type="email" name="email" placeholder="Email" />
        <Input type="password" name="password" placeholder="Password" />
        <button className="button" type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
}
