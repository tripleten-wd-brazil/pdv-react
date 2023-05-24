import bebidasUrl from "./assets/images/bebidas.svg";
import docesUrl from "./assets/images/doces.svg";
import lanchesUrl from "./assets/images/lanches.svg";
import MenuItem from "./components/MenuItem/MenuItem";
import ProductCard from "./components/ProductCard/ProductCard";
import OrderItem from "./components/OrderItem/OrderItem";
import ProductApi from "./api/ProductApi";
import { useState, useEffect } from "react";
import ProductForm from "./components/ProductForm/ProductForm";
const productApi = new ProductApi();

function App() {
  const [products, setProducts] = useState([]);
  const [orderItems, setOrderItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    productApi.list().then((productsApi) => {
      setProducts(productsApi);
    });
  }, []);

  const handleSelect = (orderItem) => {
    console.log("Clicou");
    setOrderItems([...orderItems, orderItem]);
  };

  const handleSaveProduct = (data) => {
    productApi.create(data).then((createdProduct) => {
      setProducts([createdProduct, ...products]);
    });
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

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
        <button onClick={handleOpenModal} className="button">
          Adicionar Item
        </button>
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
      <ProductForm
        isOpen={isModalOpen}
        onSubmit={handleSaveProduct}
        onClose={handleClose}
      />
    </div>
  );
}

export default App;
