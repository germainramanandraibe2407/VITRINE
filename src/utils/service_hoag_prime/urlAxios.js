import Axios from "axios";

const uRI = "http://127.0.0.1:3000/api/v1/";

const RouteAxios = Axios.create({
  baseURL: uRI,
});

export { RouteAxios, uRI };
