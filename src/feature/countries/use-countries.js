import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectCountriesInfo, selectVisibleCountries } from "./countries-slice";
import { loadCountries } from "./countries-slice";
import { selectControls } from "../controls/controls-slice";

export const useCountries = () => {
  const dispatch = useDispatch();
  const controls = useSelector(selectControls);
  const countries = useSelector((state) => selectVisibleCountries(state, controls));
  const { status, error, qty } = useSelector(selectCountriesInfo);

  useEffect(() => {
    // Защита от вторичного запроса
    if (!qty) {
      dispatch(loadCountries());
    }
  }, [qty, dispatch]);

  return [countries, { status, error }];
};
