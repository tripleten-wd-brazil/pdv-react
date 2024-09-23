import { useState } from "react";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="page">
      <main className="container">
        <Navigation />
        <div className="seller">
          <article className="seller__card">
            <figure>
              <img
                src="<%=require('./images/avatar_mock.png')%>"
                alt="Seller avatar image"
                className="seller__avatar"
              />
            </figure>
            <div className="seller__data">
              <h2 className="seller__name" />
              <h3 className="seller__job" />
            </div>
            <button className="seller__edit">
              <img
                src="<%=require('./images/edit.svg')%>"
                alt="Edit seller data"
                className="seller__edit-icon"
              />
              <span className="seller__edit-label">Editar</span>
            </button>
          </article>
        </div>
        <ul className="products">
          <template id="product-template" />
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
      <div className="popup popup_edit_profile">
        <article className="popup__container popup__container_product">
          <header className="popup__header">
            <h1 className="popup__title">Editar Perfil</h1>
            <button className="popup__close-button">X</button>
          </header>
          <form className="form" noValidate="">
            <div className="form__control">
              <label className="form__label" htmlFor="name">
                Nome:
              </label>
              <input
                className="form__input"
                name="name"
                id="name"
                required=""
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
              />
            </div>
            <button
              name="button_submit"
              className="button button_type_success button_submit"
            >
              Salvar
            </button>
          </form>
        </article>
      </div>
      <div className="popup popup_add_product">
        <article className="popup__container popup__container_product">
          <header className="popup__header">
            <h1 className="popup__title">Novo Produto</h1>
            <button className="popup__close-button">X</button>
          </header>
          <form className="form">
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
            <button name="button_submit" className="button button_type_success">
              Salvar
            </button>
          </form>
        </article>
      </div>
      <div className="popup popup_image">
        <button className="popup__close-button">X</button>
        <img src="" alt="" className="popup__image" />
        <p className="popup__image-text" />
      </div>
    </div>
  );
}

export default App;
