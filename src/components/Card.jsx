export default function Card({ data }) {
  const { image, name, price } = data;
  return (
    <li className="product">
      <p className="product__category"></p>
      <img className="product__image" src={image} alt={name} />
      <p className="product__text">
        <span className="product__price">{price}</span>
        <span className="product__name">{name}</span>
      </p>
      <button className="button product__button">Selecionar</button>
    </li>
  );
}
