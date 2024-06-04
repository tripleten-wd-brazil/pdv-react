import PopupWithForm from "./PopupWithForm";

function ProductPopup({ isOpen, onClose, handleSubmit }) {
  return (
    <PopupWithForm
      name="add_product"
      title="Novo Produto"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="form__control">
        <label className="form__label" htmlFor="name">
          Nome:
        </label>
        <input
          className="form__input"
          name="name"
          id="name"
          required
          minLength="2"
          maxLength="40"
        />
        <p className="form__error"></p>
      </div>
      <div className="form__control">
        <label className="form__label" htmlFor="job">
          Posição:
        </label>
        <input
          className="form__input form__input_job"
          id="job"
          name="job"
          required
          minLength="2"
          maxLength="40"
        />
        <p className="form__error"></p>
      </div>
      <p className="form__error"></p>
    </PopupWithForm>
  );
}

export default ProductPopup;
