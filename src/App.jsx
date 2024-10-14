import Navigation from "./components/Navigation";
import PopupWithForm from "./components/PopupWithForm";
import Card from "./components/Card";
import { useState, useEffect } from "react";
import api from "./utils/api";
import { CurrentUserContext } from "./contexts/CurrentUserContext";
import Seller from "./components/Seller";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isProductPopupOpen, setIsProductPopupOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api.getUserInfo().then((apiUserInfo) => {
      setCurrentUser(apiUserInfo);
    });
  }, []);

  useEffect(() => {
    api.getProducts().then((apiProducts) => {
      setCards(apiProducts);
    });
  }, []);

  const handleSellerClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddProductClick = () => {
    setIsProductPopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsProductPopupOpen(false);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <main className="container">
          <Navigation card={cards} />
          <Seller onEditProfile={handleSellerClick} />
          <ul className="products">
            {cards.map((item) => {
              return <Card key={item._id} data={item} />;
            })}
          </ul>
          <div className="cta">
            <button className="button button_type_primary cta_product_edit">
              Editar itens
            </button>
            <button
              className="button button_type_success cta_product_add"
              onClick={handleAddProductClick}
            >
              Adicionar item
            </button>
          </div>
          <aside className="order mobile-hidden" id="order">
            <div className="order__header">
              <p className="order__title">Resumo da Venda</p>
              <p className="order__author">José Costa</p>
            </div>
            <ul className="order__list">
              <template id="order__entry" />
            </ul>
            <div className="order__total-container">
              <div>
                <span className="order__total-text-bold">Sub total</span>
                <span className="order__total-text">Descontos</span>
                <span className="order__total-text-bold">Total</span>
              </div>
              <div>
                <span className="order__total order__total-text-bold">
                  R$ 0,00
                </span>
                <span className="order__total-text">R$ 0,00</span>
                <span className="order__subtotal order__total-text-bold">
                  R$ 0,00
                </span>
              </div>
            </div>
            <button
              className="button button_type_success order__button"
              id="order__button"
            >
              Finalizar
            </button>
          </aside>
        </main>
        <PopupWithForm
          id="popup_edit_profile"
          title="Editar Perfil"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <div className="form__control">
            <label className="form__label" htmlFor="name">
              Nome:
            </label>
            <input className="form__input" name="name" id="name" required="" />
          </div>
          <div className="form__control">
            <label className="form__label" htmlFor="about">
              Sobre:
            </label>
            <input className="form__input" id="about" name="job" required="" />
          </div>
        </PopupWithForm>
        <PopupWithForm
          id="popup_add_product"
          title="Novo Produto"
          isOpen={isProductPopupOpen}
          onClose={closeAllPopups}
        >
          <div className="form__control">
            <label className="form__label" htmlFor="image">
              Imagem:
            </label>
            <input className="form__input" id="image" />
          </div>
          <div className="form__control">
            <label className="form__label" htmlFor="productName">
              Nome:
            </label>
            <input className="form__input" name="name" id="productName" />
          </div>
          <div className="form__control">
            <label className="form__label" htmlFor="price">
              Preço:
            </label>
            <input className="form__input" id="price" />
          </div>
        </PopupWithForm>
        <div className="popup popup_image">
          <button className="popup__close-button">X</button>
          <img src="" alt="" className="popup__image" />
          <p className="popup__image-text" />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
