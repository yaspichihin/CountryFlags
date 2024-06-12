import { SET_COUNTRIES, SET_ERROR, SET_LOADING } from "./countries-consts";

const initialState = {
  status: "idle", // 'loading', 'received', 'rejected'
  list: [],
  error: null,
};

export function countriesReducers(state = initialState, { type, payload }) {
  switch (type) {
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
    case SET_COUNTRIES:
      return {
        ...state,
        status: "received",
        list: payload,
        error: null,
      };
    default:
      return state;
  }
}
