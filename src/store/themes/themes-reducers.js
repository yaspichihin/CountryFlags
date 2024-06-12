import { SET_THEME } from "./themes-consts";

export function themesReducer(state = "light", { type, payload }) {
  switch (type) {
    case SET_THEME:
      return payload;
    default:
      return state;
  }
}
