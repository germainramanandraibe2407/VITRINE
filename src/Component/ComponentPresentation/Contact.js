import React, { useState } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import Spinner from "react-bootstrap/Spinner";
import { yupResolver } from "@hookform/resolvers/yup";
import Contact from "../../utils/service/contact";

export default function EmbeddedEmail() {
  const validationSchema = Yup.object().shape({
    from_name: Yup.string().required(
      "N'oubliez pas votre nom s'il vous plaît!!"
    ),
    reply_to: Yup.string().required(
      "N'oubliez pas votre email s'il vous plaît!!"
    ),
    message: Yup.string().required(
      "Veuillez écrire ici votre message pour nous"
    ),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (data) => {
    setIsSubmitting(true);
    try {
      const post = await Contact(data.from_name, data.reply_to, data.message);
      if (post.status === 201) {
        setIsSubmitting(false);
        alert("Votre message a été bien envoyé");
      } else {
        alert("Une erreur se produite, Veuiller ressayer à nouveau!");
      }
    } catch (err) {
      console.log(err);
    }
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
      <div className="medium-12 columns">
        <section class="section-padding" id="Contact">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-10 col-12 mx-auto">
              <div class="col-12">
                <h2 class="mb-5 text-center">Nous contacter</h2>
              </div>
                <form class="custom-form" onSubmit={handleSubmit(sendEmail)}>
                  {" "}
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-12 my-2">
                      <label for="name" class="mb-2">
                        Votre nom complet
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="from_name"
                        class="form-control"
                        placeholder="Votre nom complet"
                        {...register("from_name")}
                      />{" "}
                      <p className="text-danger">{errors.from_name?.message}</p>
                    </div>
                    <div class="col-lg-6 col-md-6 col-12 my-2">
                      <label for="email" class="mb-2">
                        Votre Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="reply_to"
                        pattern="[^ @]*@[^ @]*"
                        class="form-control"
                        placeholder="Votre Email"
                        {...register("reply_to")}
                      />{" "}
                      <p className="text-danger">{errors.reply_to?.message}</p>
                    </div>
                    <div class="col-12 my-2">
                      <label for="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Votre message alors...."
                        class="form-control"
                        row="10"
                        {...register("message")}
                      ></textarea>{" "}
                      <p className="text-danger">{errors.message?.message}</p>
                    </div>
                    <button type="submit" class="form-control mt-4">
                      {isSubmitting && (
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                      )}{" "}
                      Envoyer
                    </button>
                  </div>
                </form>
              </div>{" "}
            </div>
          </div>{" "}
        </section>
      </div>{" "}
    </div>
  );
}
