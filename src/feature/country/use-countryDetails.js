import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { clearCountry, loadCountryByName, selectCountryInfo } from "./country-slice";

export const useCountryDetails = (name) => {
  const dispatch = useDispatch();
  const { currentCountry, status, error } = useSelector(selectCountryInfo);

  useEffect(() => {
    dispatch(loadCountryByName(name));
    return () => {
      dispatch(clearCountry());
    };
  }, [name, dispatch]);

  return [currentCountry, { status, error }];
};
