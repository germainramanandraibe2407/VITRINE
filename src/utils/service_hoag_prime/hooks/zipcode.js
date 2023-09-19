import { RouteAxios } from "../urlAxios";
import { useState, useEffect } from "react";

export default function useFetchZipcode() {
  const [dataZipcode, setDataZipcode] = useState();
  const [isLoadingZipcode, setIsLoadingZipcode] = useState(false);
  const [errorZipcode, setErrorZipcode] = useState(false);

  useEffect(() => {
    async function fetchZipcode() {
      setIsLoadingZipcode(true);
      try {
        const response = await RouteAxios.get(`/utils/zip-code`);
        setDataZipcode(response.data);
        setIsLoadingZipcode(false);
      } catch (e) {
        setErrorZipcode(true);
        console.error(e);
      } finally {
        setIsLoadingZipcode(false);
      }
    }
    fetchZipcode();
  }, []);
  return { dataZipcode, isLoadingZipcode, errorZipcode };
}
