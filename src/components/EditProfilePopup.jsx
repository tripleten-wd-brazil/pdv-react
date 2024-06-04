import PopupWithForm from "./PopupWithForm";
import Input from "./Input";
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
      <Input
        label="Nome"
        name="name"
        id="name"
        minLength="2"
        maxLength="40"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        label="Profissão"
        id="job"
        name="job"
        required
        minLength="2"
        maxLength="40"
        value={job}
        onChange={(e) => setJob(e.target.value)}
      />
    </PopupWithForm>
  );
}

export default EditProfilePopup;
