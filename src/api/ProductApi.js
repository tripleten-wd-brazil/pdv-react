export default class ProductApi {
  constructor(token) {
    this._url = `${import.meta.env.VITE_API_BASE_URL}/products`;
    this._token = token;
  }

  _getDefaultHeaders() {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this._token}`,
    };
  }

  list() {
    return fetch(this._url, {
      headers: this._getDefaultHeaders(),
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Não foi possível listar os produtos.");
      }

      return response.json();
    });
  }

  create(productData) {
    const { image, ...data } = productData;
    data.imageUrl = image;

    return fetch(this._url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: this._getDefaultHeaders(),
    }).then((response) => {
      if (!response.ok) {
        return Promise.reject("Não foi possível criar o produto.");
      }

      return response.json();
    });
  }

  update() {}

  delete() {}
}
