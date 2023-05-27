import { useState, useEffect } from "react";
import ProductApi from "../api/ProductApi";

export const useProducts = (token) => {
  const [products, setProducts] = useState([]);
  const productApi = new ProductApi(token);

  useEffect(() => {
    productApi.list().then((apiProducts) => setProducts(apiProducts));
  }, []);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return {
    products,
    addProduct,
  };
};
