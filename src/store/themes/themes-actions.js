import { SET_THEME } from "./themes-consts";

export function setTheme(theme) {
  return {
    type: SET_THEME,
    payload: theme,
  };
}
