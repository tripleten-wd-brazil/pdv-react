import bebidasUrl from "./assets/images/bebidas.svg";
import docesUrl from "./assets/images/doces.svg";
import lanchesUrl from "./assets/images/lanches.svg";

function App() {
  return (
    <div className="page">
      <nav className="menu">
        <ul className="menu__bar">
          <li>
            <button className="menu__item">
              <img
                className="menu__image"
                src={bebidasUrl}
                alt="Ícone de garrafa para opção do menu bebidas"
              />
              <span className="menu__paragraph">Bebidas</span>
            </button>
          </li>
          <li>
            <button className="menu__item">
              <img
                className="menu__image"
                src={docesUrl}
                alt="Ícone de bolo para opção do menu doces"
              />
              <span className="menu__paragraph">Doces</span>
            </button>
          </li>
          <li>
            <button className="menu__item">
              <img
                className="menu__image"
                src={lanchesUrl}
                alt="Ícone de batata frita para opção de menu lanches"
              />
              <span className="menu__paragraph">Lanches</span>
            </button>
          </li>
        </ul>
        <hr className="menu__ruler" />
      </nav>
      <main>
        <section>
          <ul className="products">
            <template id="product-card">
              <li>
                <article className="product">
                  <img className="product__image" alt="" />
                  <p className="product__price"></p>
                  <p className="product__name"></p>
                  <p className="product__category"></p>
                  <button className="product__button">Selecionar</button>
                </article>
              </li>
            </template>
          </ul>
        </section>
        <button className="button button_add_item">Adicionar Item</button>
        <aside className="order">
          <h2>Resumo da Venda</h2>
          <p>José Costa</p>
          <ul className="order__list">
            <template id="template-item">
              <li className="order__item item">
                <div>
                  <p className="item__name"></p>
                  <p className="item__price"></p>
                </div>
                <button>-</button>
                <p className="item__quantity">1</p>
                <button>+</button>
                <p className="item__total"></p>
              </li>
            </template>
          </ul>
          <div>
            <p>Sub Total</p>
            <p className="order__subtotal">R$ 0,00</p>
          </div>
          <div>
            <p>Descontos</p>
            <p>R$ 0,00</p>
          </div>
          <div>
            <p>Total</p>
            <p className="order__total">R$ 0,00</p>
          </div>
        </aside>
      </main>
      <div className="modal modal_add_item">
        <div className="modal__container">
          <button className="button button_close_modal">X</button>
          <form name="form_add_item" className="form form_add_item" noValidate>
            <div>
              <label htmlFor="image">Imagem do Produto</label>
              <input
                className="form__control"
                id="image"
                name="image"
                type="url"
              />
              <p className="error">Insira uma URL válida</p>
            </div>
            <div>
              <label htmlFor="name">Nome do Produto</label>
              <input
                className="form__control"
                id="name"
                name="name"
                type="text"
                minLength="2"
                required
              />
              <p className="error">Campo obrigatório</p>
            </div>
            <div>
              <label htmlFor="price">Valor do Produto</label>
              <input
                className="form__control"
                id="price"
                name="price"
                type="number"
                required
                step="0.01"
              />
              <p className="error">Campo obrigatório</p>
            </div>
            <div>
              <label htmlFor="category">Categoria do Produto</label>
              <select name="category" id="category">
                <option value="Bebidas">Bebidas</option>
                <option value="Doces">Doces</option>
                <option value="Lanches">Lanches</option>
              </select>
            </div>
            <button type="reset" className="button">
              Cancelar
            </button>
            <button name="submit" className="button button_submit" disabled>
              Salvar Produto
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
