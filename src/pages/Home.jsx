import bebidasUrl from "../assets/images/bebidas.svg";
import docesUrl from "../assets/images/doces.svg";
import lanchesUrl from "../assets/images/lanches.svg";
import MenuItem from "../components/MenuItem/MenuItem";
import ProductCard from "../components/ProductCard/ProductCard";
import OrderItem from "../components/OrderItem/OrderItem";
import ProductForm from "../components/ProductForm/ProductForm";
import { useModal } from "../hooks/useModal";

function Home({ products, onSaveProduct, onSelectProduct, orderItems }) {
  const [isOpen, open, close] = useModal();

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
                onSelect={onSelectProduct}
              />
            ))}
          </ul>
        </section>
        <button onClick={open} className="button">
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
      <ProductForm isOpen={isOpen} onSave={onSaveProduct} onClose={close} />
    </div>
  );
}

export default Home;
