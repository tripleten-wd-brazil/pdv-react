import Menu from "./components/Menu";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <main className="container">
        <Menu />
        <section className="store">
          <ul className="products">
            <template id="product-card" />
          </ul>
          <div>
            <div className="action-buttons">
              <button
                id="open-product-modal"
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
          </div>
        </section>
        <button
          className="order__mobile-button button button_type_edit"
          id="order__mobile-button"
        >
          Resumo de vendas
        </button>
        <button className="button button-teste">Teste</button>
      </main>
      <Modal opened={false}>
        <article className="modal__container modal__container_product">
          <header className="modal__header">
            <h1 className="modal__title">Novo Produto</h1>
            <button id="close-product-modal" className="modal__close">
              <img src="./images/close.svg" alt="Close modal" />
            </button>
          </header>
          <main>
            <form name="form-product" className="form" noValidate>
              <div className="form__control">
                <label className="form__label" htmlFor="image">
                  Imagem do Produto
                </label>
                <span className="form__icon" />
                <input
                  name="image"
                  id="image"
                  className="modal__input modal__input_image"
                  placeholder="Digite o link da imagem"
                  type="url"
                />
                <p className="form__error">
                  Este campo precisa conter uma url para a imagem.
                </p>
              </div>
              <div className="form__control">
                <label className="form__label" htmlFor="name">
                  Nome do Produto
                </label>
                <input
                  name="name"
                  id="name"
                  className="modal__input"
                  placeholder="Digite o nome do produto"
                  required
                />
                <p className="form__error">Campo obrigatório</p>
              </div>
              <div className="form__control">
                <label className="form__label" htmlFor="price">
                  Preço do Produto
                </label>
                <input
                  className="modal__input"
                  type="number"
                  name="price"
                  id="price"
                  required
                />
                <p className="form__error">Campo obrigatório</p>
              </div>
              <div className="form__control">
                <label className="form__label" htmlFor="category">
                  Categoria do Produto
                </label>
                <select
                  className="form__input"
                  name="category"
                  id="category"
                  required
                >
                  <option value="Bebidas">Bebidas</option>
                  <option value="Doces">Doces</option>
                  <option value="Lanches">Lanches</option>
                </select>
              </div>
              <button
                name="button_submit"
                className="button button_type_success button_local_modal"
                disabled
              >
                Salvar Produto
              </button>
            </form>
          </main>
        </article>
      </Modal>
      <Modal opened={true}>
        <div className="modal__container">
          <h2>Excluir Produto</h2>
          <p>
            Você tem certeza que deseja excluir o produto “Fulano de Tal”? Após
            confirmar, esta ação não poderá ser desfeita.
          </p>
          <div>
            <button className="button button_type_cancel">Cancelar</button>
            <button className="button button_type_success">Excluir item</button>
          </div>
        </div>
      </Modal>
      <div className="alert_container" />
      <template id="alert-template" />
    </>
  );
}

export default App;
