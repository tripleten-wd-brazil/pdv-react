export const PopupWithForm = ({
  title,
  name,
  children,
  isOpen,
  onClose,
  onSubmit,
}) => {
  return (
    <div className={`popup popup_${name} ${isOpen ? "popup_opened" : ""}`}>
      <article className="popup__container popup__container_product">
        <header className="popup__header">
          <h1 className="popup__title">{title}</h1>
          <button className="popup__close-button" onClick={onClose}>
            X
          </button>
        </header>
        <form className="form" onSubmit={onSubmit}>
          {children}
          <button name="button_submit" className="button button_type_success">
            Salvar
          </button>
        </form>
      </article>
    </div>
  );
};
