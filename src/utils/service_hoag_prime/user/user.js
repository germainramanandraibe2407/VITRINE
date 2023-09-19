import { RouteAxios } from "../urlAxios";

function login(mail, password) {
  return RouteAxios.post("/login", {
    mail,
    password,
  })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
        return {
          status: response.status,
          message: "Connexion réussie",
        };
      }
    })
    .catch((error) => {
      return {
        status: error.response.status,
        message: error.response.data.message,
      };
    });
}

function logout() {
  return localStorage.removeItem("user");
}

function getCurrentCompte() {
  return JSON.parse(localStorage.getItem("user"));
}

export { login, logout, getCurrentCompte };
