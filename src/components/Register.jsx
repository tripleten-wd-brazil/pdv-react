import { useRef } from "react";

export default function Register() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    console.log(form.entries());
    const userData = Object.fromEntries(form.entries());
    console.log(userData);
  };

  return (
    <div>
      <h1>Register</h1>
      <form className="form" onSubmit={handleSubmit} ref={formRef}>
        <label className="form__label" htmlFor="name">
          Name:
        </label>
        <input className="form__input" name="name" id="name" />
        <div className="form__control"></div>
        <div className="form__control">
          <label className="form__label" htmlFor="job">
            Job:
          </label>
          <input className="form__input" name="job" id="job" />
        </div>
        <div className="form__control">
          <label className="form__label" htmlFor="email">
            Email:
          </label>
          <input className="form__input" name="email" id="email" type="email" />
        </div>
        <div className="form__control">
          <label className="form__label" htmlFor="password">
            Password:
          </label>
          <input
            name="password"
            className="form__input"
            id="password"
            type="password"
          />
        </div>
        <button
          type="submit"
          name="button_submit"
          className="button button_type_success"
        >
          Register
        </button>
      </form>
    </div>
  );
}
