import { RouteAxios } from "../urlAxios";
import { useState, useEffect } from "react";

export function useFetchLegalStatus() {
  const [dataLegalStatus, setDataLegalStatus] = useState();
  const [isLoadingLegalStatus, setIsLoadingLegalStatus] = useState(false);
  const [errorLegalStatus, setErrorLegalStatus] = useState(false);

  useEffect(() => {
    async function fetchLegalStatus() {
      setIsLoadingLegalStatus(true);
      try {
        const response = await RouteAxios.get(`/utils/legal-status`);
        setDataLegalStatus(response.data);
        setIsLoadingLegalStatus(false);
      } catch (e) {
        setErrorLegalStatus(true);
        console.error(e);
      } finally {
        setIsLoadingLegalStatus(false);
      }
    }
    fetchLegalStatus();
  }, []);
  return { dataLegalStatus, isLoadingLegalStatus, errorLegalStatus };
}
