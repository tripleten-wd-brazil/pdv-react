import bebidasImage from "../../images/bebidas.svg";
import docesImage from "../../images/doces.svg";
import lanchesImage from "../../images/lanches.svg";

function Menu() {
  return (
    <nav className="categories">
      <ul className="categories__list">
        <li>
          <button className="categories__item">
            <img
              className="categories__icon"
              src={bebidasImage}
              alt="Bebidas"
            />
            <span className="categories__text">Bebidas</span>
          </button>
        </li>
        <li>
          <button className="categories__item">
            <img className="categories__icon" src={docesImage} alt="Doces" />
            <span className="categories__text">Doces</span>
          </button>
        </li>
        <li>
          <button className="categories__item">
            <img
              className="categories__icon"
              src={lanchesImage}
              alt="Lanches"
            />
            <span className="categories__text">Lanches</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
