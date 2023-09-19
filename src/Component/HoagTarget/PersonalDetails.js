import React from "react";
import * as Yup from "yup";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  TextareaAutosize,
} from "@material-ui/core";
import Swal from "sweetalert2";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Radio from "@material-ui/core/Radio";
import Spinner from "react-bootstrap/Spinner";
import MenuItem from "@material-ui/core/MenuItem";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import { yupResolver } from "@hookform/resolvers/yup";
import withReactContent from "sweetalert2-react-content";
import Member from "./../../utils/service_hoag_prime/member";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import useFetchZipcode from "../../utils/service_hoag_prime/hooks/zipcode";
import { useFetchSubCategory } from "../../utils/service_hoag_prime/hooks/category";
import { useFetchGroupEntreprise } from "../../utils/service_hoag_prime/hooks/group";
import { useFetchLegalStatus } from "../../utils/service_hoag_prime/hooks/legalStatus";

export default function Signup({ id_membertype }) {
  const { dataSubCategory } = useFetchSubCategory();
  const { dataLegalStatus } = useFetchLegalStatus();
  const { dataEntreprise } = useFetchGroupEntreprise();
  const { dataZipcode } = useFetchZipcode();
  const [personalTypePM, setPersonalTypePM] = useState(false);
  const [personalTypePP, setPersonalTypePP] = useState(false);
  const [checkSocialActivity, setCheckSocialActivity] = useState(false);
  const [checkSecondaryActivity, setCheckSecondaryActivity] = useState(false);

  // Spinner
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Custom Swal
  const MySwal = withReactContent(Swal);

  // Penser à faire dans la base de données plus tard
  const titleResponsibleEntreprise = [
    "PDG",
    "DG",
    "Gérant Statutaire",
    "Gérant Salarié",
    "Dirécteur Gérant",
  ];

  const createMember = async (data) => {
    // Ici il y a encore le adresse personnelle non prise en charge(people_adress)
    // Penser de le faire dans la base de donnée
    setIsSubmitting(true);
    await Member.createMember({
      ...data,
      revenue: `['${data.revenue_one}' ,'${data.revenue_two}' '${data.revenue_three}']`,
      secondary_activity: checkSecondaryActivity ? 1 : 0,
      social_activity: checkSocialActivity ? 1 : 0,
      facebook_link: data.facebook_link !== "" ? data.facebook_link : null,
      instagram_link: data.instagram_link !== "" ? data.instagram_link : null,
      twitter_link: data.twitter_link !== "" ? data.twitter_link : null,
      linkdin_link: data.linkdin_link !== "" ? data.linkdin_link : null,
      website: data.website !== "" ? data.website : null,
      id_membertype: id_membertype, // A penser et à changer par rapport au type de mebre à créer(BASIC,SILVER,...)
    })
      .then((data) => {
        setIsSubmitting(false);
        if (data.status === 201) {
          MySwal.fire({
            title: "Félicitations",
            text: `${data.message}`,
            icon: "success",
            confirmButtonText: "Ok",
          });
        } else {
          MySwal.fire({
            title: `Erreur ${data.status}`,
            text: `${data.message}`,
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      })
      .catch((err) => {
        setIsSubmitting(false);
        MySwal.fire({
          title: `Erreur`,
          text: "Une erreur inconnue est apparue. Veuillez réessayer à nouveau",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  const validationSchema = Yup.object().shape({
    people_first_name: Yup.string().required("N'oubliez pas votre nom "),
    people_last_name: Yup.string().required("N'oubliez pas votre prénom "),
    mail: Yup.string().required("N'oubliez pas votre email !"),
    phone: Yup.string().required("N'oubliez pas votre numéro téléphone !"),
    people_adress: Yup.string().required("N'oubliez pas votre adresse !"),
    personnal_type: Yup.string().notRequired(),
    revenue_one: Yup.string().required(
      "N'oubliez pas votre chiffre d'affaire d'ici!!"
    ),
    revenue_two: Yup.string().required(
      "N'oubliez pas votre chiffre d'affaire d'ici!!"
    ),
    revenue_three: Yup.string().required(
      "N'oubliez pas votre chiffre d'affaire d'ici!!"
    ),
    id_groupeentreprise: Yup.string().notRequired(),
    id_legalestatus: Yup.string().required(
      "N'oubliez pas votre statut juridique !"
    ),
    id_zipcode: Yup.string().required("N'oubliez pas votre code postal!!"),
    id_subcategorieactivity: Yup.string().required(
      "N'oubliez pas votre activité principal!!"
    ),
    password: Yup.string().required("N'oubliez pas votre mot de passe!!"),

    // Condition selon le type de personne

    social_reason: personalTypePM
      ? Yup.string().required("N'oubliez pas votre raison social !")
      : Yup.string().notRequired(),

    commercial_name: personalTypePM
      ? Yup.string().required("N'oubliez pas votre nom commercial !")
      : Yup.string().notRequired(),

    principal_responsible: personalTypePM
      ? Yup.string().required(
          "N'oubliez pas votre nom du prémier responsable !"
        )
      : Yup.string().notRequired(),
    title_and_function_principal_responsible: personalTypePM
      ? Yup.string().required(
          "N'oubliez pas votre titre et fonction du prémier responsable !"
        )
      : Yup.string().notRequired(),
    sales_manager: personalTypePM
      ? Yup.string().required(
          "N'oubliez pas votre nom du responsable commercial !"
        )
      : Yup.string().notRequired(),

    string_permanent_employees: personalTypePM
      ? Yup.string().required(
          "N'oubliez pas votre nombre d'employés permanents !"
        )
      : Yup.string().notRequired(),
    string_temporary_employees: personalTypePM
      ? Yup.string().required(
          "N'oubliez pas votre nombre d'employés temporaires!!"
        )
      : Yup.string().notRequired(),

    lot: personalTypePM
      ? Yup.string().required("N'oubliez pas votre lot!!")
      : Yup.string().notRequired(),
    rue: personalTypePM
      ? Yup.string().required("N'oubliez pas votre rue!!")
      : Yup.string().notRequired(),
    quartier: personalTypePM
      ? Yup.string().required("N'oubliez pas votre quartier!!")
      : Yup.string().notRequired(),
    fokotany: personalTypePM
      ? Yup.string().required("N'oubliez pas votre fokotany!!")
      : Yup.string().notRequired(),

    description_social_activity: checkSocialActivity
      ? Yup.string().required(
          "N'oubliez pas la description de votre activité social!!"
        )
      : Yup.string().notRequired(),

    description_secondary_activity: checkSecondaryActivity
      ? Yup.string().required(
          "N'oubliez pas la description de votre activité secondaire!!"
        )
      : Yup.string().notRequired(),
    // A regler aussi
    // company_adress: personalTypePM
    //   ? Yup.string().required("N'oubliez pas votre adresse!!")
    //   : Yup.string().notRequired(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  return (
    <Container component="main" maxWidth="lg">
      <div>
        <Typography variant="h3" component="h3">
          Inscription nouveau membre HOAG Prime
        </Typography>
        <br />
        <form onSubmit={handleSubmit(createMember)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid
                item
                xs={12}
                style={{ display: "flex", justifyContent: "flex-start" }}
              >
                <b>
                  <ul>
                    <li>Quelle entité représentez-vous?</li>
                  </ul>
                </b>
              </Grid>
              <Grid
                item
                xs={12}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  onChange={(e) => {
                    if (e.target.value === "PM") {
                      setPersonalTypePM(true);
                      setPersonalTypePP(false);
                    } else {
                      setPersonalTypePM(false);
                      setPersonalTypePP(true);
                    }
                  }}
                >
                  <FormControlLabel
                    value="PM"
                    control={<Radio />}
                    label="personne MORALE (Entreprise,association, ONG,...)"
                    {...register("personnal_type")}
                  />
                  <FormControlLabel
                    value="PP"
                    control={<Radio />}
                    label="personne PHYSIQUE"
                    {...register("personnal_type")}
                  />
                </RadioGroup>
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              style={{ display: "flex", justifyContent: "flex-start" }}
            >
              <b>
                <ul>
                  <li>Informations personnelles</li>
                </ul>
              </b>
            </Grid>
            {/* Nom */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Nom*"
                fullWidth
                {...register("people_first_name")}
              />
              <p className="text-danger">{errors.people_first_name?.message}</p>
            </Grid>
            {/* Prénom */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Prénoms*"
                fullWidth
                {...register("people_last_name")}
              />
              <p className="text-danger">{errors.people_last_name?.message}</p>
            </Grid>

            {/* Adresse */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Adresse*"
                fullWidth
                {...register("people_adress")}
              />
              <p className="text-danger">{errors.people_adress?.message}</p>
            </Grid>
            {/* Télephone */}
            <Grid item xs={12} sm={6}>
              <TextField label="Télephone*" fullWidth {...register("phone")} />
              <p className="text-danger">{errors.phone?.message}</p>
            </Grid>

            {/* Email */}
            <Grid item xs={12} sm={12}>
              <TextField label="Email*" fullWidth {...register("mail")} />
              <p className="text-danger">{errors.mail?.message}</p>
            </Grid>

            <Grid
              item
              xs={12}
              style={{ display: "flex", justifyContent: "flex-start" }}
            >
              <b>
                <ul>
                  <li>Informations sur vos activités</li>
                </ul>
              </b>
            </Grid>

            {/* RaisonSocial */}
            <Grid item xs={12} sm={6}>
              <TextField
                label={
                  personalTypePM
                    ? "Raison sociale de votre entreprise*"
                    : "Raison sociale de votre entreprise"
                }
                fullWidth
                {...register("social_reason")}
              />
              <p className="text-danger">{errors.social_reason?.message}</p>
            </Grid>
            {/* NomCommercial  pour personne physique et moral */}
            <Grid item xs={12} sm={6}>
              <TextField
                label={personalTypePM ? "Nom commercial*" : "Nom commercial"}
                fullWidth
                {...register("commercial_name")}
              />
              <p className="text-danger">{errors.commercial_name?.message}</p>
            </Grid>
            {/* responsable */}

            {personalTypePM && (
              <>
                <Grid item xs={12} sm={12}>
                  <TextField
                    label="Nom du premier responsable"
                    autoComplete="responsable"
                    fullWidth
                    {...register("principal_responsible")}
                  />
                  <p className="text-danger">
                    {errors.principal_responsible?.message}
                  </p>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    select
                    label="Sa fonction et mon titre au sein de l'entréprise"
                    autoComplete="title_and_function_principal_responsible"
                    fullWidth
                    {...register("title_and_function_principal_responsible")}
                  >
                    {titleResponsibleEntreprise.map((value, index) => (
                      <MenuItem key={index} value={value}>
                        {value}
                      </MenuItem>
                    ))}
                  </TextField>
                  <p className="text-danger">
                    {errors.title_and_function_principal_responsible?.message}
                  </p>
                </Grid>
                {/* responsable */}
                <Grid item xs={12}>
                  <TextField
                    label="Nom du responsable commercial"
                    autoComplete="responsable de vente"
                    fullWidth
                    {...register("sales_manager")}
                  />
                  <p className="text-danger">{errors.sales_manager?.message}</p>
                </Grid>
                {/* Nombre de personnel temporaire */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Nombre du personnel temporaire"
                    type="string"
                    autoComplete="Nombre de personnel temporaire "
                    fullWidth
                    {...register("string_temporary_employees")}
                  />
                  <p className="text-danger">
                    {errors.string_temporary_employees?.message}
                  </p>
                </Grid>
                {/* Nombre de personnel permanent */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Nombre du personnel permanent"
                    type="string"
                    fullWidth
                    {...register("string_permanent_employees")}
                  />
                  <p className="text-danger">
                    {errors.string_permanent_employees?.message}
                  </p>
                </Grid>
              </>
            )}

            <Grid
              item
              xs={12}
              style={{ display: "flex", justifyContent: "flex-start" }}
            >
              <Typography>
                Chiffres d'affaires en millier d'Ar(3 dernières années)* :
              </Typography>
            </Grid>

            {/* Chiffres d'affaires */}
            <Grid item xs={12} sm={4}>
              <TextField
                label={new Date().getFullYear() - 2 + "*"}
                type="string"
                autoComplete="Chiffres d'affaires"
                placeholder="20"
                fullWidth
                {...register("revenue_one")}
              />
              <p className="text-danger">{errors.revenue_one?.message}</p>
            </Grid>
            {/* Chiffres d'affaires */}
            <Grid item xs={12} sm={4}>
              <TextField
                label={new Date().getFullYear() - 1 + "*"}
                type="string"
                autoComplete="Chiffres d'affaires"
                placeholder="30.5"
                fullWidth
                {...register("revenue_two")}
              />
              <p className="text-danger">{errors.revenue_two?.message}</p>
            </Grid>
            {/* Chiffres d'affaires */}
            <Grid item xs={12} sm={4}>
              <TextField
                label={new Date().getFullYear() + "*"}
                type="string"
                autoComplete="Chiffres d'affaires"
                fullWidth
                placeholder="40.25"
                {...register("revenue_three")}
              />
              <p className="text-danger">{errors.revenue_three?.message}</p>
            </Grid>
            {/* AdresseEntreprise */}
            {personalTypePP && (
              <Grid item xs={12} sm={12}>
                <TextField
                  label="Adresse d'exploitation*"
                  fullWidth
                  {...register("company_address")}
                />
                <p className="text-danger">{errors.company_adress?.message}</p>
              </Grid>
            )}
            {/* AdresseSiège pour personne physique */}
            {personalTypePM && (
              <>
                <Grid
                  item
                  xs={12}
                  style={{ display: "flex", justifyContent: "flex-start" }}
                >
                  <Typography>Adresse du siège:</Typography>
                </Grid>

                <Grid item xs={12} sm={3}>
                  <TextField label="Lot*" fullWidth {...register("lot")} />
                  <p className="text-danger">{errors.lot?.message}</p>
                </Grid>

                <Grid item xs={12} sm={3}>
                  <TextField
                    label="rue*"
                    autoComplete="rue"
                    fullWidth
                    {...register("rue")}
                  />

                  <p className="text-danger">{errors.rue?.message}</p>
                </Grid>

                <Grid item xs={12} sm={3}>
                  <TextField
                    label="Quartier*"
                    autoComplete="Quartier"
                    fullWidth
                    {...register("quartier")}
                  />

                  <p className="text-danger">{errors.quartier?.message}</p>
                </Grid>

                <Grid item xs={12} sm={3}>
                  <TextField
                    label="fokotany*"
                    autoComplete="fokotany"
                    fullWidth
                    {...register("fokotany")}
                  />
                  <p className="text-danger">{errors.fokotany?.message}</p>
                </Grid>
              </>
            )}
            {/* StructureJuridique */}
            <Grid item xs={12} sm={6}>
              <TextField
                select
                label="Structure juridique*"
                autoComplete="Structure Juridique"
                fullWidth
                {...register("id_legalestatus")}
              >
                {dataLegalStatus &&
                  dataLegalStatus.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.abreviation} ({option.complete_name})
                    </MenuItem>
                  ))}
              </TextField>
              <p className="text-danger">{errors.id_legalestatus?.message}</p>
            </Grid>
            {/* Code postal */}
            <Grid item xs={12} sm={6}>
              <TextField
                select
                label="Code postal*"
                autoComplete="Code Postal"
                fullWidth
                {...register("id_zipcode")}
              >
                {dataZipcode &&
                  dataZipcode.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.code} {option.city}/{option.region}
                    </MenuItem>
                  ))}
              </TextField>
              <p className="text-danger">{errors.id_zipcode?.message}</p>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                select
                label="Activité principale*"
                autoComplete="Activite Principale"
                fullWidth
                {...register("id_subcategorieactivity")}
              >
                {dataSubCategory &&
                  dataSubCategory.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.name}
                    </MenuItem>
                  ))}
              </TextField>
              <p className="text-danger">
                {errors.id_subcategorieactivity?.message}
              </p>
            </Grid>

            {/* Groupe affilié pour personnes et morales*/}
            <Grid item xs={12} sm={6}>
              <TextField
                select
                label="Affiliation à un groupe"
                autoComplete="Groupe affilié"
                fullWidth
                {...register("id_groupeentreprise")}
              >
                {dataEntreprise &&
                  dataEntreprise.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.name_abbreviation} ({option.name})
                    </MenuItem>
                  ))}
              </TextField>
              <p className="text-danger">
                {errors.id_groupeentreprise?.message}
              </p>
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField
                select
                label="Groupe sociale"
                autoComplete="Groupe sociale"
                fullWidth
                {...register("id_groupeentreprise")}
              >
                {dataEntreprise &&
                  dataEntreprise.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.name_abbreviation} ({option.name})
                    </MenuItem>
                  ))}
              </TextField>
              <p className="text-danger">
                {errors.id_groupeentreprise?.message}
              </p>
            </Grid>

            <Grid
              item
              xs={12}
              style={{ display: "flex", justifyContent: "flex-start" }}
            >
              <b>
                <ul>
                  <li> Autres activités</li>
                </ul>
              </b>
            </Grid>

            <Grid>
              <Grid>
                <FormLabel component="legend">
                  Avez vous des activités secondaires? :{" "}
                </FormLabel>
                <Grid
                  item
                  xs={12}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    onChange={(e) => {
                      if (e.target.value === "OUI") {
                        setCheckSecondaryActivity(true);
                      } else {
                        setCheckSecondaryActivity(false);
                      }
                    }}
                  >
                    <FormControlLabel
                      value="OUI"
                      control={<Radio />}
                      label="OUI"
                      {...register("secondary_activity")}
                    />
                    <FormControlLabel
                      value="NON"
                      control={<Radio />}
                      label="NON"
                      {...register("secondary_activity")}
                    />
                  </RadioGroup>

                  {checkSecondaryActivity && (
                    <>
                      <TextareaAutosize
                        minRows={4}
                        aria-label="maximum height"
                        placeholder="Décrivez ici votre activité secondaire"
                        style={{ width: 600 }}
                        {...register("description_secondary_activity")}
                      />
                      <p className="text-danger">
                        {errors.description_secondary_activity?.message}
                      </p>
                    </>
                  )}
                </Grid>
              </Grid>
              <br />
              <Grid>
                <FormLabel component="legend">
                  Avez vous des activités sociales? :{" "}
                </FormLabel>
                <Grid
                  item
                  xs={12}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    onChange={(e) => {
                      if (e.target.value === "OUI") {
                        setCheckSocialActivity(true);
                      } else {
                        setCheckSocialActivity(false);
                      }
                    }}
                  >
                    <FormControlLabel
                      value="OUI"
                      control={<Radio />}
                      label="OUI"
                      {...register("social_activity")}
                    />
                    <FormControlLabel
                      value="NON"
                      control={<Radio />}
                      label="NON"
                      {...register("social_activity")}
                    />
                  </RadioGroup>
                  {checkSocialActivity && (
                    <>
                      <TextareaAutosize
                        minRows={4}
                        aria-label="maximum height"
                        placeholder="Décrivez ici votre activité sociale"
                        fullWidth
                        style={{ width: 600 }}
                        {...register("description_social_activity")}
                      />
                      <p className="text-danger">
                        {errors.description_social_activity?.message}
                      </p>
                    </>
                  )}
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              style={{ display: "flex", justifyContent: "flex-start" }}
            >
              <b>
                <ul>
                  <li>Présence sur Internet(Web, Résaux sociaux)</li>
                </ul>
              </b>
            </Grid>

            {/* Facebook*/}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Lien facebook"
                fullWidth
                placeholder="https://www.facebook.com"
                {...register("facebook_link")}
              />
            </Grid>
            {/* Linkedin */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Lien Linkedin"
                fullWidth
                placeholder="https://www.linkedin.com/login/fr"
                {...register("linkdin_link")}
              />
            </Grid>
            {/* Twiter */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Lien Twitter"
                fullWidth
                placeholder="https://twitter.com/?lang=fr"
                {...register("twitter_link")}
              />
            </Grid>
            {/* Instagram */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Lien instagram"
                fullWidth
                placeholder="https://www.instagram.com/?hl=fr"
                {...register("instagram_link")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Lien site web"
                placeholder="www.example.com"
                autoComplete="Site web"
                fullWidth
                {...register("website")}
              />
            </Grid>

            <Typography
              style={{ display: "flex", justifyContent: "flex-start" }}
            >
              <b>
                <ul>
                  <li>Créer votre mot de passe</li>
                </ul>
              </b>
            </Typography>
            {/* password */}
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TextField
                label="Mot de passe*"
                fullWidth
                type="password"
                {...register("password")}
              />
              <p className="text-danger">{errors.password?.message}</p>
            </Grid>

            <Grid item xs={12} sm={12}>
              {isSubmitting ? (
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                </Button>
              ) : (
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Valider
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
