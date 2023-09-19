import Axios from "axios";

// const uRI = "https://site-vitrine.hoag-target.com/api";
const uRI = "http://localhost:3001/api";

const RouteAxios = Axios.create({
  baseURL: uRI,
});

export { RouteAxios, uRI };
