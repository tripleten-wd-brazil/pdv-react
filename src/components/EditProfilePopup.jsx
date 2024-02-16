import { useState, useEffect, useContext } from "react";
import { PopupWithForm } from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export const EditProfilePopup = ({ isOpen, onClose, onUpdateUser }) => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setJob(currentUser.job);
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser({ name, job });
  };

  return (
    <PopupWithForm
      title="Editar Perfil"
      name="edit_profile"
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
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form__control">
        <label className="form__label" htmlFor="job">
          Posição:
        </label>
        <input
          className="form__input form__input_job"
          id="job"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
      </div>
    </PopupWithForm>
  );
};
