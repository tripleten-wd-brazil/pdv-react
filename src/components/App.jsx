import Main from './Main';
import { useState } from 'react';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }

  return (
    <div className="page">
      <Main
        onEditProfileClick={handleEditProfileClick}
        isEditProfilePopupOpen={isEditProfilePopupOpen}
      />
    </div>
  )
}

export default App
