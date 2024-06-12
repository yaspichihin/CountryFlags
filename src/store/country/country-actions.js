import { DiCelluloid } from "react-icons/di";
import {
  SET_COUNTRY,
  SET_LOADING,
  SET_ERROR,
  CLEAR_COUNTRY,
} from "./country-consts";

export function setCountry(country) {
  return {
    type: SET_COUNTRY,
    payload: country,
  };
}

export function setLoading() {
  return {
    type: SET_LOADING,
  };
}

export function setError(err) {
  return {
    type: SET_ERROR,
    payload: err,
  };
}

export function clearCountry() {
  return {
    type: CLEAR_COUNTRY,
  };
}

export const loadCountryByName =
  (name) =>
  (dispatch, getState, { client, api }) => {
    dispatch(setLoading());

    client
      .get(api.searchByCountry(name))
      .then(({ data }) => dispatch(setCountry(data[0])))
      .catch((err) => dispatch(setError(err)));
  };
