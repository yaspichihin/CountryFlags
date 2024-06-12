import { SET_SEARCH } from "./controls-consts";

const initialState = {
  search: "",
  region: "",
};

export function controlsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_SEARCH:
      return {
        ...state,
        search: payload,
      };
    default:
      return state;
  }
}
