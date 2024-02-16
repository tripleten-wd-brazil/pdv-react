import { useState, useEffect, useContext } from "react";
import { api } from "../utils/api";
import { ProductCard } from "./ProductCard";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export const Main = ({ onCardImageClick, onClickEditProfile }) => {
  const [products, setProducts] = useState([]);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    api.getInitialProducts().then(setProducts);
  }, []);

  return (
    <main className="container">
      <nav className="categories">
        <ul className="categories__list">
          <li>
            <button className="categories__item">
              <img
                className="categories__icon"
                src="./bebidas.svg"
                alt="Bebidas"
              />
              <span className="categories__text">Bebidas</span>
            </button>
          </li>
          <li>
            <button className="categories__item">
              <img
                className="categories__icon"
                src="./doces.svg"
                alt="Bebidas"
              />
              <span className="categories__text">Doces</span>
            </button>
          </li>
          <li>
            <button className="categories__item">
              <img
                className="categories__icon"
                src="./lanches.svg"
                alt="Bebidas"
              />
              <span className="categories__text">Lanches</span>
            </button>
          </li>
        </ul>
      </nav>
      <div className="seller">
        <article className="seller__card">
          <figure>
            <img
              src="./avatar_mock.png"
              alt="Seller avatar image"
              className="seller__avatar"
            />
          </figure>
          <div className="seller__data">
            <h2 className="seller__name">{currentUser.name}</h2>
            <h3 className="seller__job">{currentUser.job}</h3>
          </div>
          <button className="seller__edit" onClick={onClickEditProfile}>
            <img
              src="./edit.svg"
              alt="Edit seller data"
              className="seller__edit-icon"
            />
            <span className="seller__edit-label">Editar</span>
          </button>
        </article>
      </div>
      <ul className="products">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            data={product}
            onImageClick={onCardImageClick}
          />
        ))}
      </ul>
      <div className="cta">
        <button className="button button_type_primary cta_product_edit">
          Editar itens
        </button>
        <button className="button button_type_success cta_product_add">
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
            <span className="order__total order__total-text-bold">R$ 0,00</span>
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
  );
};
