import PopupWithForm from "./PopupWithForm";
import Input from "./Input";
import { useRef } from "react";

function ProductPopup({ isOpen, onClose, onAddProduct }) {

  const imageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const product = Object.fromEntries(formData.entries());
    const product2 = {
      image: imageRef.current.value
    }
    onAddProduct(product2);
  }

  return (
    <PopupWithForm
      name="add_product"
      title="Novo Produto"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <Input
        label="Imagem"
        id="image"
        name="image"
        type="url"
        ref={imageRef}
      />

      <Input
        label="Nome"
        id="name"
        name="name"
        required
      />
      <Input
        label="Preço"
        id="price"
        name="price"
        type="number"
        required
      />
    </PopupWithForm>
  );
}

export default ProductPopup;
