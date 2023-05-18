const OrderItem = ({ data }) => {
  const { name, price } = data;

  return (
    <li className="order__item item">
      <div>
        <p className="item__name">{name}</p>
        <p className="item__price">{price}</p>
      </div>
      <button>-</button>
      <p className="item__quantity">1</p>
      <button>+</button>
      <p className="item__total">{price}</p>
    </li>
  );
};

export default OrderItem;
