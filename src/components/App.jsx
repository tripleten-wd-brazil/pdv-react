import Main from './Main';
import { useState, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { api } from '../utils/Api';
import EditProfilePopup from './EditProfilePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    job: "",
  });

  useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
  }

  const handleUpdateUser = (userData) => {
    api.patchUserInfo(userData)
      .then((updatedUser) => setCurrentUser(updatedUser))
      .then(() => closeAllPopups())
      .catch(err => console.error(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Main
          onEditProfileClick={handleEditProfileClick}
          isEditProfilePopupOpen={isEditProfilePopupOpen}
          onClosePopup={closeAllPopups}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App
