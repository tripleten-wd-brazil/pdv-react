import { forwardRef } from "react";

function Input({ label, id, ...props }, ref) {
  return (
    <div className="form__control">
      <label className="form__label" htmlFor={id}>
        {label}:
      </label>
      <input
        className="form__input"
        id={id}
        {...props}
        ref={ref}
      />
      <p className="form__error"></p>
    </div>
  );
}

// HOF: high order function;
export default forwardRef(Input);

