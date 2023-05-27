export default class UserApi {
  constructor(token) {
    this._url = `${import.meta.env.VITE_API_BASE_URL}`;
    this._token = token;
  }

  _getDefaultHeaders() {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this._token}`,
    };
  }

  getMe() {
    return fetch(`${this._url}/user/me`, {
      headers: this._getDefaultHeaders(),
    }).then(async (response) => {
      const responseData = await response.json();
      if (!response.ok) {
        return Promise.reject(responseData);
      }

      return responseData;
    });
  }
}
