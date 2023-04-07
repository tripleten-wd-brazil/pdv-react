import { numberToCurrency } from "../../utils/currency";

export default function ProductCard({ product }) {
  const { name, category, price, imageUrl } = product;

  return (
    <article className="product">
      <img className="product__image" alt={name} src={imageUrl} />
      <p className="product__price">{numberToCurrency(price)}</p>
      <p className="product__name">{name}</p>
      <p className="product__category">{category}</p>
      <button className="product__button">Selecionar</button>
    </article>
  );
}
