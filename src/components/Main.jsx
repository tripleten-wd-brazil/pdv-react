import Header from "./Header";

export function Main({ onEditProfileClick, onProductPopupOpen }) {
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
      <Header onEditProfileClick={onEditProfileClick} />
      <ul className="products">
        <template id="product-card">
          <li className="product">
            <p className="product__category"></p>
            <img className="product__image" />
            <p className="product__text">
              <span className="product__price"></span>
              <span className="product__name"></span>
            </p>
            <button className="button product__button">Selecionar</button>
            <button className="button product__trash">Deletar</button>
          </li>
        </template>
      </ul>
      <div className="cta">
        <button className="button button_type_primary">Editar itens</button>
        <button
          onClick={onProductPopupOpen}
          id="open-product-popup"
          className="button button_type_success"
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
          <template id="order__entry">
            <li className="order__item item">
              <div>
                <span className="item__product"></span>
                <span className="item__price"></span>
              </div>
              <div>
                <button className="order__item-button">
                  <img src="./minus_button.svg" alt="remover item" />
                </button>
                <span className="item__quantity">1</span>
                <button className="order__item-button">
                  <img src="./plus_button.svg" alt="adicionar item" />
                </button>
              </div>
              <span className="item__total"></span>
            </li>
          </template>
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
}

export default Main;
