import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useContext } from 'react';

export default function Header({ onEditProfileClick }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="seller">
      <article className="seller__card">
        <figure>
          <img src="./avatar_mock.png" alt="Seller avatar image" className="seller__avatar" />
        </figure>
        <div className="seller__data">
          <h2 className="seller__name">{currentUser.name}</h2>
          <h3 className="seller__job">{currentUser.job}</h3>
        </div>
        <button className="seller__edit" onClick={onEditProfileClick}>
          <img src="./edit.svg" alt="Edit seller data" className="seller__edit-icon" />
          <span className="seller__edit-label">Editar</span>
        </button>
      </article>
    </div>
  )
}
