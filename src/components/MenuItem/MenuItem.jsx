function MenuItem({ src, alt, label }) {
  return (
    <li>
      <button className="menu__item">
        <img className="menu__image" src={src} alt={alt} />
        <span className="menu__paragraph">{label}</span>
      </button>
    </li>
  );
}

export default MenuItem;
