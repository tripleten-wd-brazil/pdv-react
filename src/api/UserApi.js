export default class UserApi {
  constructor() {
    this._baseUrl = import.meta.env.VITE_API_BASE_URL;
  }

  register(userData) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response was not ok.");
    });
  }

  async login(userData) {
    return fetch(`${this._baseUrl}/login`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(response => {

      if (response.ok) {
        return response.json();
      }

      throw new Error("Network response was not ok.");
    })
  }

  async checkLogin() {
    return fetch(`${this._baseUrl}/user/me`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }).then(response => {
      console.log(response);
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

    })
  }
}
