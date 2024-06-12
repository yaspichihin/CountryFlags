import { SET_COUNTRIES, SET_ERROR, SET_LOADING } from "./countries-consts";

export function setCountries(countries) {
  return {
    type: SET_COUNTRIES,
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

export const loadCountries =
  () =>
  (dispatch, getState, { client, api }) => {
    dispatch(setLoading());

    client
      .get(api.getAllCountries)
      .then(({ data }) => dispatch(setCountries(data)))
      .catch((err) => dispatch(setError(err)));
  };
