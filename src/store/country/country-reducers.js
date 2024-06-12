import {
  SET_COUNTRY,
  SET_LOADING,
  SET_ERROR,
  CLEAR_COUNTRY,
} from "./country-consts";

const initialState = {
  country: null,
  status: "idle",
  error: null,
};

export function countryReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_COUNTRY:
      return {
        ...state,
        country: payload,
        status: "received",
        error: null,
      };
    case SET_LOADING:
      return {
        ...state,
        status: "loading",
        error: null,
      };
    case SET_ERROR:
      return {
        ...state,
        status: "rejected",
        error: payload,
      };
    case CLEAR_COUNTRY:
      return {
        ...state,
        country: null,
        status: "idle",
        error: null,
      };
    default:
      return state;
  }
}
