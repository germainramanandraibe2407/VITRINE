import { RouteAxios } from "../urlAxios";
import { useState } from "react";
import { useEffect } from "react";

export function useFetchCategories() {
  const [dataCategory, setDataCategory] = useState();
  const [isLoadingCategory, setIsLoadingCategory] = useState(false);
  const [errorCategory, setErrorCategory] = useState();

  useEffect(() => {
    async function fetchCategories() {
      setIsLoadingCategory(true);
      try {
        const response = await RouteAxios.get("/utils/category");
        setDataCategory(response.data);
        setIsLoadingCategory(false);
      } catch (e) {
        setErrorCategory(true);
        console.error(e);
      } finally {
        setIsLoadingCategory(false);
      }
    }
    fetchCategories();
  }, []);
  return { dataCategory, isLoadingCategory, errorCategory };
}

export function useFetchSubCategory() {
  const [dataSubCategory, setDataSubCategory] = useState();
  const [isLoadingSubCategory, setIsLoadingSubCategory] = useState(false);
  const [errorSubCategory, setErrorSubCategory] = useState();

  useEffect(() => {
    async function fetchSubCategory(id) {
      try {
        const response = await RouteAxios.get(`/utils/sub-category`);
        setDataSubCategory(response.data);
      } catch (e) {
        setErrorSubCategory(true);
      } finally {
        setIsLoadingSubCategory(false);
      }
    }
    fetchSubCategory();
  },[]);
  return { dataSubCategory, isLoadingSubCategory, errorSubCategory };
}
