export default class ProductApi {
  constructor() {
    this._baseUrl = `${import.meta.env.VITE_API_BASE_URL}/products`;
  }

  _defaultHeaders() {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
  }

  list() {
    return fetch(this._baseUrl, {
      headers: this._defaultHeaders(),
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response was not ok.");
    });
  }

  async create(product) {
    const response = await fetch(this._baseUrl, {
      method: "POST",
      body: JSON.stringify(product),
      headers: this._defaultHeaders(),
    });
    if (response.ok) {
      return response.json();
    }

    throw new Error("Network response was not ok.");
  }
}
