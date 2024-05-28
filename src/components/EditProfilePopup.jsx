import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name="edit_profile"
      title="Editar Perfil"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="form__control">
        <label className="form__label" htmlFor="name">
          Nome:
        </label>
        <input
          className="form__input form__input_name"
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

export default EditProfilePopup;
