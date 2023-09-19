import { RouteAxios } from "../urlAxios";
import { useState, useEffect } from "react";

export function useFetchGroupEntreprise() {
  const [dataEntreprise, setDataEntreprise] = useState();
  const [isLoadingEntreprise, setIsLoadingEntreprise] = useState(false);
  const [errorEntreprise, setErrorEntreprise] = useState(false);

  useEffect(() => {
    async function fetchEntreprise() {
      setIsLoadingEntreprise(true);
      try {
        const response = await RouteAxios.get(`/utils/group-entreprise`);
        setDataEntreprise(response.data);
        setIsLoadingEntreprise(false);
      } catch (e) {
        setErrorEntreprise(true);
        console.error(e);
      } finally {
        setIsLoadingEntreprise(false);
      }
    }
    fetchEntreprise();
  }, []);
  return { dataEntreprise, isLoadingEntreprise, errorEntreprise };
}
