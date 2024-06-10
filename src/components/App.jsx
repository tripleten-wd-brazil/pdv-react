import Main from './Main';
import { useState, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { api } from '../utils/Api';
import EditProfilePopup from './EditProfilePopup';
import ProductPopup from './ProductPopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isProductPopupOpen, setIsProductPopupOpen] = useState(false);
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

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsProductPopupOpen(false);
  }

  const handleUpdateUser = (userData) => {
    api.patchUserInfo(userData)
      .then((updatedUser) => setCurrentUser(updatedUser))
      .then(() => closeAllPopups())
      .catch(err => console.error(err));
  }

  const handleProductPopupOpen = () => {
    setIsProductPopupOpen(true);
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }

  const handleAddProduct = (product) => {
    console.log('Product added', product);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Main
          onClosePopup={closeAllPopups}
          onProductPopupOpen={handleProductPopupOpen}
          onEditProfileClick={handleEditProfileClick}
          isProductPopupOpen={isProductPopupOpen}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <ProductPopup
          isOpen={isProductPopupOpen}
          onClose={closeAllPopups}
          onAddProduct={handleAddProduct}
        />
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App
