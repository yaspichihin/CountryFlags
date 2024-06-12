import {
  SET_COUNTRY,
  SET_LOADING,
  SET_ERROR,
  CLEAR_COUNTRY,
  SET_NEIGHBORS,
} from "./country-consts";

export function setCountry(country) {
  return {
    type: SET_COUNTRY,
    payload: country,
  };
}

export function setNeighbors(countries) {
  return {
    type: SET_NEIGHBORS,
    payload: countries,
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

export const loadNeighborsByBorders =
  (borders) =>
  (dispatch, getState, { client, api }) => {
    client
      .get(api.filterByCode(borders))
      .then(({ data }) => dispatch(setNeighbors(data.map((country) => country.name))))
      .catch(console.error);
  };
