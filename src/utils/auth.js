class Auth {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  signin(userData) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      body: JSON.stringify(userData),
    }).then((res) => {
      if (!res.ok) return Promise.reject(); // early return or guard clause

      return res.json();
    });
  }

  signup(userData) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      body: JSON.stringify(userData),
    }).then((res) => {
      if (!res.ok) {
        let errorMessage = "";
        switch (res.status) {
          case 400:
            errorMessage = "400 - um ou mais campos não foram fornecidos";
            break;
          case 401:
            errorMessage =
              "401 - o usuário com o e-mail especificado não encontrado";
            break;
        }
        return Promise.reject(errorMessage);
      }

      return res.json();
    });
  }
}

const auth = new Auth("https://se-register-api.en.tripleten-services.com/v1");
export default auth;
