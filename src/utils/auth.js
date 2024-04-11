class AuthApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  signup(userData) {
    return fetch(`${this._baseUrl}/signup`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify(userData),
    }).then((res) => res.json());
  }

  signin(email, password) {
    return fetch(`${this._baseUrl}/login`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({ email, password }),
    }).then((res) => res.json());
  }
}

export const authApi = new AuthApi({
  baseUrl: import.meta.env.VITE_AUTH_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
