import { RouteAxios } from "../urlAxios";
import { useState, useEffect } from "react";

export function useFetchAdress() {
  const [dataAdress, setDataAdress] = useState();
  const [isLoadingAdress, setIsLoadingAdress] = useState(false);
  const [errorAdress, setErrorAdress] = useState(false);

  useEffect(() => {
    async function fetchAdress() {
      setIsLoadingAdress(true);
      try {
        const response = await RouteAxios.get(`/adress`);
        setDataAdress(response.data);
        setIsLoadingAdress(false);
      } catch (e) {
        setErrorAdress(true);
        console.error(e);
      } finally {
        setIsLoadingAdress(false);
      }
    }
    fetchAdress();
  }, []);
  return { dataAdress, isLoadingAdress, errorAdress };
}
