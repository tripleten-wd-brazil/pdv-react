import Menu from "../components/Menu";
import ProductCard from "../components/ProductCard";
import ProductForm from "../components/ProductForm";
import { useProducts } from "../hooks/useProducts";
import { useModal } from "../hooks/useModal";
import { useUser } from "../hooks/useUser";

function Home() {
  const { user } = useUser();
  const { token } = user;
  const { products, addProduct } = useProducts(token);
  const {
    isOpened: productModalOpened,
    close: closeProductModal,
    open: openProductModal,
  } = useModal();

  return (
    <>
      <main className="container">
        <Menu />
        <section className="store">
          <ul className="products">
            {products.map((item) => (
              <ProductCard product={item} key={item._id} />
            ))}
          </ul>
          <div>
            <div className="action-buttons">
              <button
                className="button button_type_success"
                onClick={openProductModal}
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
      </main>
      <ProductForm
        visible={productModalOpened}
        onClose={closeProductModal}
        onSave={addProduct}
      />
      {/* <Modal opened={isOpened}>
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
      </Modal> */}
      <div className="alert_container" />
      <template id="alert-template" />
    </>
  );
}

export default Home;
