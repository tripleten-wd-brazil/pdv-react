import "./ProductCard.css";

const ProductCard = ({ data, onSelect }) => {
  const { name, price, image, _id } = data;

  const handleClick = () => {
    onSelect({ name, price, _id });
  };

  return (
    <li className="product">
      <article className="product__container">
        <img className="product__image" src={image} alt={name} />
        <p className="product__price">{price}</p>
        <p className="product__name">{name}</p>
        <button onClick={handleClick} className="product__button">
          Selecionar
        </button>
      </article>
    </li>
  );
};

export default ProductCard;
