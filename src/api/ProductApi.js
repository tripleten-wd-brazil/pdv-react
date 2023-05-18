export default class ProductApi {
  constructor() {
    this._baseUrl = `${import.meta.env.VITE_API_BASE_URL}/products`;
  }

  list() {
    return fetch(this._baseUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .catch((error) => error);
  }

  async create(product) {
    const response = await fetch(this._baseUrl, {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      return response.json();
    }

    throw new Error("Network response was not ok.");
  }
}
