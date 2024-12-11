import { NavLink } from "react-router";
import { useState } from "react";
import auth from "./utils/auth";

function Signin() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    auth
      .signin(data)
      .then()
      .catch((error) => setErrorMessage(error));
  };

  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div>
      <div>{errorMessage}</div>
      <h1>Signin</h1>
      <NavLink to="/signup">Inscrever-se</NavLink>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Signin;
