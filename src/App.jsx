import { useEffect, useState } from "react";
import { Main } from "./components/Main";
import { ImagePopup } from "./components/ImagePopup";
import { EditProfilePopup } from "./components/EditProfilePopup";
import { CurrentUserContext } from "./contexts/CurrentUserContext";
import { api } from "./utils/api";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({ name: "", job: "" });

  useEffect(() => {
    api.getUserInfo().then(setCurrentUser);
  }, []);

  const handleCardImageClick = (card) => {
    setSelectedCard(card);
  };

  const handleClickEditProfile = () => {
    setIsEditProfilePopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  };

  const handleUpdateUser = (userData) => {
    api.setUserInfo(userData).then(setCurrentUser).then(closeAllPopups);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Main
          onCardImageClick={handleCardImageClick}
          onClickEditProfile={handleClickEditProfile}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
