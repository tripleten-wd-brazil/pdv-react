import PopupWithForm from "./PopupWithForm";
import { useContext, useState, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditProfile({ isOpen, onClose }) {
  const { currentUser, handleEditProfile } = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name);
  const [job, setJob] = useState(currentUser.job);

  useEffect(() => {
    setName(currentUser.name);
    setJob(currentUser.job);
  }, [currentUser]);

  const handleSubmit = () => {
    handleEditProfile({ name, job });
    onClose();
  };

  return (
    <PopupWithForm
      id="popup_edit_profile"
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
          className="form__input"
          name="name"
          id="name"
          required=""
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div className="form__control">
        <label className="form__label" htmlFor="about">
          Sobre:
        </label>
        <input
          className="form__input"
          id="about"
          name="job"
          required=""
          onChange={(e) => setJob(e.target.value)}
          value={job}
        />
      </div>
    </PopupWithForm>
  );
}
