import bebidasUrl from "./assets/images/bebidas.svg";
import docesUrl from "./assets/images/doces.svg";
import lanchesUrl from "./assets/images/lanches.svg";
import MenuItem from "./components/MenuItem/MenuItem";
import ProductCard from "./components/ProductCard/ProductCard";
import OrderItem from "./components/OrderItem/OrderItem";
import ProductApi from "./api/ProductApi";
import { useState, useEffect } from "react";
const productApi = new ProductApi();

function App() {
  const [products, setProducts] = useState([]);
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    productApi.list().then((productsApi) => {
      setProducts(productsApi);
    });
  }, []);

  const handleSelect = (orderItem) => {
    console.log("Clicou");
    setOrderItems([...orderItems, orderItem]);
  };

  return (
    <div className="page">
      <nav className="menu">
        <ul className="menu__bar">
          <MenuItem
            src={bebidasUrl}
            alt="Ícone de garrafa para opção do menu bebidas"
            label={"Bebidas"}
          />
          <MenuItem
            src={docesUrl}
            alt="Ícone de bolo para opção do menu doces"
            label={"Doces"}
          />
          <MenuItem
            src={lanchesUrl}
            alt="Ícone de batata frita para opção de menu lanches"
            label={"Lanches"}
          />
        </ul>
        <hr className="menu__ruler" />
      </nav>
      <main>
        <section>
          <ul className="products">
            {products.map((productData) => (
              <ProductCard
                key={productData._id}
                data={productData}
                onSelect={handleSelect}
              />
            ))}
          </ul>
        </section>
        <button className="button button_add_item">Adicionar Item</button>
        <aside className="order">
          <h2>Resumo da Venda</h2>
          <p>José Costa</p>
          <ul className="order__list">
            {orderItems.map((orderItemData) => (
              <OrderItem key={orderItemData._id} data={orderItemData} />
            ))}
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
