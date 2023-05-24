import { useRef } from "react";

export default function ProductForm({ isOpen, onClose, onSave }) {
  console.log("RE RENDER FORM");
  if (!isOpen) return null;
  const imageUrlRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      imageUrl: imageUrlRef.current.value,
    };

    onSave(data);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal__container">
        <button onClick={onClose} className="button button_close_modal">
          X
        </button>
        <form
          onSubmit={handleSubmit}
          name="form_add_item"
          className="form form_add_item"
          noValidate
        >
          <div>
            <label htmlFor="image">Imagem do Produto</label>
            <input
              className="form__control"
              id="image"
              name="imageUrl"
              type="url"
              ref={imageUrlRef}
            />
            <p className="error">Insira uma URL válida</p>
          </div>
          <div>
            <label htmlFor="name">Nome do Produto</label>
            <input
              className="form__control"
              id="name"
              name="name"
              type="text"
              minLength="2"
              required
            />
            <p className="error">Campo obrigatório</p>
          </div>
          <div>
            <label htmlFor="price">Valor do Produto</label>
            <input
              className="form__control"
              id="price"
              name="price"
              type="number"
              required
              step="0.01"
            />
            <p className="error">Campo obrigatório</p>
          </div>
          <div>
            <label htmlFor="category">Categoria do Produto</label>
            <select name="category" id="category">
              <option value="Bebidas">Bebidas</option>
              <option value="Doces">Doces</option>
              <option value="Lanches">Lanches</option>
            </select>
          </div>
          <button onClick={onClose} type="reset" className="button">
            Cancelar
          </button>
          <button name="submit" className="button button_submit">
            Salvar Produto
          </button>
        </form>
      </div>
    </div>
  );
}
