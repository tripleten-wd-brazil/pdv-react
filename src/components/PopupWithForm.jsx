function PopupWithForm({ name, title, children, isOpen }) {
  const cssIsOpened = isOpen ? 'popup_opened' : '';

  return (
    <div className={`popup popup_${name} ${cssIsOpened}`}>
      <article className="popup__container popup__container_product">
        <header className="popup__header">
          <h1 className="popup__title">{title}</h1>
          <button className="popup__close-button">X</button>
        </header>
        <form className="form" noValidate name={name}>
          {children}
          <button name="button_submit" className="button button_type_success button_submit">
            Salvar
          </button>
        </form>
      </article>
    </div>
  );
}

export default PopupWithForm;
