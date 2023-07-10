import { useId, forwardRef } from "react";

function Input({ label, ...inputProps }, ref) {
  const id = useId();
  // Rest operator
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input className="form__control" id={id} {...inputProps} ref={ref} />
      <p className="error">Insira uma URL válida</p>
    </div>
  );
}

export default forwardRef(Input);
