import bebidas from "../images/bebidas.svg";
import doces from "../images/doces.svg";
import lanches from "../images/lanches.svg";

export default function Navigation() {
  return (
    <nav className="categories">
      <ul className="categories__list">
        <li>
          <button className="categories__item">
            <img className="categories__icon" src={bebidas} alt="Bebidas" />
            <span className="categories__text">Bebidas</span>
          </button>
        </li>
        <li>
          <button className="categories__item">
            <img className="categories__icon" src={doces} alt="Doces" />
            <span className="categories__text">Doces</span>
          </button>
        </li>
        <li>
          <button className="categories__item">
            <img className="categories__icon" src={lanches} alt="Lanches" />
            <span className="categories__text">Lanches</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
