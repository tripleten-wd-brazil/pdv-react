export const ProductCard = ({ data, onImageClick }) => {
  const { name, price, image, _id } = data;
  return (
    <li className="product">
      <img
        className="product__image"
        src={image}
        alt={name}
        onClick={() => onImageClick(data)}
      />
      <p className="product__text">
        <span className="product__price">{price}</span>
        <span className="product__name">{name}</span>
      </p>
      <button className="button product__button">Selecionar</button>
    </li>
  );
};
