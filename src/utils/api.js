class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getInitialProducts() {
    // template strings
    return fetch(`${this._baseUrl}/products`, {
      headers: this._headers,
    }).then((res) => res.json());
  }

  createProduct(product) {
    // template strings
    return fetch(`${this._baseUrl}/products`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify(product),
    }).then((res) => res.json());
  }

  deleteProduct(id) {
    return fetch(`${this._baseUrl}/products/${id}`, {
      headers: this._headers,
      method: "DELETE",
    });
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then((res) => res.json());
  }

  setUserInfo(userData) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify(userData),
    }).then((res) => res.json());
  }
}

export const api = new Api({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    authorization: import.meta.env.VITE_API_TOKEN,
  },
});
