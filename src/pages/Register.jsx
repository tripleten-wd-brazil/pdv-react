import UserApi from "../api/UserApi";

function Register() {
  const userApi = new UserApi();

  const handleRegister = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = Object.fromEntries(formData);
    userApi.register(userData).then(res => console.log(res));
  }

  return <div className="container">Register
    <form onSubmit={handleRegister}>
      <input name="email" placeholder="Email" />
      <input name="password" placeholder="Password" type="password" />
      <button type="submit">Registrar</button>
    </form>
  </div>
}

export default Register;
