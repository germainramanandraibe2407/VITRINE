import { RouteAxios } from "../urlaxios";

export default function postEmailAbonne(email) {
  return RouteAxios.post("/subscribe", { mail: email });
}
