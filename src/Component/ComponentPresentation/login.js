import * as Yup from "yup";
import Swal from "sweetalert2";
import { useState } from "react";
import "../../assets/css/login.css";
import { useForm } from "react-hook-form";
import Spinner from "react-bootstrap/Spinner";
import { yupResolver } from "@hookform/resolvers/yup";
import withReactContent from "sweetalert2-react-content";
import { login } from "../../utils/service_hoag_prime/user/user";

export default function Login() {
  const MySwal = withReactContent(Swal);
  const [showSpinner, setShowSpinner] = useState(false);
  const validationSchema = Yup.object().shape({
    mail: Yup.string().required("N'oubliez pas votre email s'il vous plaît!!"),
    password: Yup.string().required(
      "N'oubliez pas votre mot de passe s'il vous plaît!!"
    ),
  });

  const postData = async (data) => {
    setShowSpinner(true);
    login(data.mail, data.password)
      .then((response) => {
        if (response.status === 200) {
          setShowSpinner(false);
          window.location.reload();
        } else {
          setShowSpinner(false);
          MySwal.fire({
            title: `${response.message}`,
            icon: "error",
            showConfirmButton: true,
          });
        }
      })
      .catch((error) => {
        setShowSpinner(false);
        MySwal.fire({
          title: "Connexion échouée! Veuillez réessayer à nouveau",
          icon: "error",
          showConfirmButton: true,
        });
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  return (
    <div className="row ">
      <form onSubmit={handleSubmit(postData)}>
        <div className="login">
          <div className="image">
            <img
              src="images/LogoHoag2.svg"
              alt="logo Hoag Target"
              width="150"
            />
          </div>

          <div className="email">
            <label htmlFor="email">Email Address</label>
            <div className="sec-2">
              <input
                type="mail"
                name="email"
                placeholder="example@mail.com"
                {...register("mail")}
              />
              <p className="text-danger">{errors.mail?.message}</p>
            </div>
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <div className="sec-2">
              <input
                className="pas"
                type="password"
                name="password"
                placeholder="***********"
                {...register("password")}
              />
              <p className="text-danger">{errors.password?.message}</p>
              <ion-icon className="show-hide" name="eye-outline" />
            </div>
          </div>

          <button type="submit" className="btn-login">
            {showSpinner && (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            )}
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
