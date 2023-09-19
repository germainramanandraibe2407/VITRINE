import { RouteAxios } from "../urlaxios";

export default function Contact(nom, email, content) {
  return RouteAxios.post("/contact/", {
    nom: nom,
    from_mail: email,
    content: content,
  });
}
