import ProductApi from "../api/ProductApi";
const productApi = new ProductApi();
import { useState, useEffect } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productApi.list().then(setProducts);
  }, []);

  const saveProduct = (productData) => {
    productApi.create(productData).then((createdProduct) => {
      setProducts([createdProduct, ...products]);
    });
  };

  return { products, saveProduct };
};
