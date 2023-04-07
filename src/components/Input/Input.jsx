const Input = ({
  variant,
  label,
  id,
  error = false,
  errorMessage,
  ...props
}) => {
  const variants = {
    default: "",
    image: "modal__input_image",
  };

  const selectedVariant = variants[variant] || variants.default;

  return (
    <div className="form__control">
      <label className="form__label" htmlFor="image">
        {label}
      </label>
      <input
        name={id}
        id={id}
        className={`modal__input ${selectedVariant}`}
        {...props}
      />
      {error && <p className="form__error">{errorMessage}</p>}
    </div>
  );
};

export default Input;
