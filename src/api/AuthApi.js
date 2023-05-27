export default class AuthApi {
  constructor() {
    this._url = `${import.meta.env.VITE_API_BASE_URL}`;
  }

  login(userData) {
    return fetch(`${this._url}/login`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (response) => {
      const responseData = await response.json();
      if (!response.ok) {
        return Promise.reject(responseData);
      }

      return responseData;
    });
  }
}
