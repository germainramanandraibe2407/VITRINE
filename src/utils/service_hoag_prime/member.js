import { RouteAxios } from "./urlAxios";

class Member {
  async verifAdress(data) {
    try {
      return await RouteAxios.post(`/adress/verif`, data);
    } catch (e) {
      return e;
    }
  }

  async createMember(data) {
    console.log(data);
    //verif adress if exist or not
    //(if exist return id existing else create and return id new)
    if (data.personnal_type === "PM") {
      try {
        const verifAdress = await this.verifAdress({
          rue: data.rue,
          quartier: data.quartier,
          fokotany: data.fokotany,
        });
        if (verifAdress.status === 201 || verifAdress.status === 200) {
          const member = await RouteAxios.post(`/member/`, {
            ...data,
            id_adress: verifAdress.data.id,
          });
          if (member.status === 201) {
            return {
              status: 201,
              message: `Votre compte a bien été créé, On reviendra
              vers vous dans les plus brefs délais pour la validation de votre compte`,
            };
          } else {
            return {
              status: member.status,
              message: member.data.message,
            };
          }
        } else {
          return {
            status: verifAdress.status,
            message:
              "Une erreur se produite pendant la création de votre. Veuillez réessayer à nouveau",
          };
        }
      } catch (err) {
        return {
          status: err.response.status,
          message: err.response.data.message,
        };
      }
    } else {
      try {
        const member = await RouteAxios.post(`/member/`, data);
        if (member.status === 201) {
          return {
            status: 201,
            message: `Votre compte a bien été créé, On reviendra
            vers vous dans les plus brefs délais pour la validation de votre compte`,
          };
        }
      } catch (err) {
        console.log(err);
        return {
          status: err.response.status,
          message: err.response.data.message,
        };
      }
    }
  }
}

export default new Member();
