import PopupWithForm from "./PopupWithForm";
import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  useEffect(() => {
    setName(currentUser.name);
    setJob(currentUser.job);
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser({ name, job });
  }

  return (
    <PopupWithForm
      name="edit_profile"
      title="Editar Perfil"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
        <p className="form__error"></p>
      </div>
      <p className="form__error"></p>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
