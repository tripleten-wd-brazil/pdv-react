function Input({ label, id, ...props }) {
  return (
    <div className="form__control">
      <label className="form__label" htmlFor={id}>
        {label}:
      </label>
      <input
        className="form__input"
        id={id}
        {...props}
      />
      <p className="form__error"></p>
    </div>
  );
}

export default Input;

