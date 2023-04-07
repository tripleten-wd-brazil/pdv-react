import Modal from "../Modal";
import Input from "../Input";
import { useState, useRef } from "react";
import ProductApi from "../../api/ProductApi";

export default function ProductForm({ visible, onClose, onSave }) {
  const formRef = useRef(null);

  const [error, setError] = useState({
    name: false,
    price: false,
    image: false,
  });

  const [disabled, setDisabled] = useState(true);
  const handleValidation = (event) => {
    const isEnabled = formRef?.current.checkValidity();
    setDisabled(!isEnabled);

    setError({
      ...error,
      [event.target.name]: !event.target.validity.valid,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisabled(true);
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const productApi = new ProductApi();
    productApi
      .create(data)
      .then((createdProduct) => {
        onSave(createdProduct);
        onClose();
      })
      .catch(() => {
        setDisabled(false);
      });
  };

  return (
    <Modal opened={visible}>
      <article className="modal__container modal__container_product">
        <header className="modal__header">
          <h1 className="modal__title">Novo Produto</h1>
          <button onClick={onClose} className="modal__close">
            <img src="/close.svg" alt="Close modal" />
          </button>
        </header>
        <form ref={formRef} className="form" noValidate onSubmit={handleSubmit}>
          <Input
            variant="image"
            onInput={handleValidation}
            label="Imagem do Produto"
            id="image"
            error={error.image}
            errorMessage="Campo obrigatório"
            placeholder="Cole a URL da imagem aqui"
            type="url"
          />
          <Input
            onInput={handleValidation}
            label="Nome do Produto"
            id="name"
            error={error.name}
            errorMessage="Campo obrigatório"
            placeholder="Digite o nome do produto"
            required
          />
          <Input
            onInput={handleValidation}
            label="Preço do Produto"
            id="price"
            error={error.price}
            errorMessage="Campo obrigatório"
            placeholder="Digite o preço do produto"
            type="number"
            required
          />

          <div className="form__control">
            <label className="form__label" htmlFor="category">
              Categoria do Produto
            </label>
            <select
              className="form__input"
              name="category"
              id="category"
              required
            >
              <option value="Bebidas">Bebidas</option>
              <option value="Doces">Doces</option>
              <option value="Lanches">Lanches</option>
            </select>
          </div>
          <button
            name="button_submit"
            className="button button_type_success button_local_modal"
            disabled={disabled}
          >
            Salvar Produto
          </button>
        </form>
      </article>
    </Modal>
  );
}
